/**
 * 菜品新增/编辑页（管理员）
 *
 * 功能：
 * 1. 表单：名称、价格、分类、描述、图片、库存、上架状态、推荐状态
 * 2. 图片上传（选择图片 → 上传到服务器）
 * 3. 提交（新增/更新）
 *
 * 路由参数：
 *   - 无参数：新增模式
 *   - id=xxx：编辑模式，加载菜品详情
 *   - readonly=1：只读模式（查看详情）
 */
import React, { useState, useEffect, useCallback } from 'react'
import Taro, { useRouter } from '@tarojs/taro'
import { View, Text, Input, Textarea, Switch, Picker } from '@tarojs/components'
import { dishApi, createDish, updateDish, categoryApi, UPLOAD_BASE, type Dish, type Category } from '../../api'
import { useUserStore } from '../../store/user'
import { useTheme } from '../../hooks/useTheme'
import './index.scss'

export default function DishEditPage() {
  const { themeStyle } = useTheme()
  const { user, isLoggedIn } = useUserStore()
  const router = useRouter()

  // 路由参数
  const dishId = router.params?.id ? parseInt(router.params.id) : undefined
  const readonly = router.params?.readonly === '1'
  const isEdit = !!dishId && !readonly

  // 表单状态
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined)
  const [description, setDescription] = useState('')
  const [stock, setStock] = useState('999')
  const [isActive, setIsActive] = useState(true)
  const [isRecommended, setIsRecommended] = useState(false)
  const [imageUrl, setImageUrl] = useState('')   // 已上传的图片 URL
  const [tempImagePath, setTempImagePath] = useState('') // 本地临时图片路径
  const [categories, setCategories] = useState<Category[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [loading, setLoading] = useState(!!dishId)

  const isAdmin = user?.role === 'ADMIN'

  /** 加载分类列表 */
  const loadCategories = useCallback(async () => {
    try {
      const res = await categoryApi.list()
      const list = Array.isArray(res) ? res : (res as any)?.data || []
      setCategories(list)
    } catch (err) {
      console.error('[菜品编辑] 加载分类失败:', err)
    }
  }, [])

  /** 加载菜品详情（编辑模式） */
  const loadDishDetail = useCallback(async (id: number) => {
    setLoading(true)
    try {
      const dish = await dishApi.detail(id)
      setName(dish.name || '')
      setPrice(dish.price !== undefined ? String(dish.price) : '')
      setCategoryId(dish.categoryId)
      setDescription(dish.description || '')
      setStock(String(dish.stock || 999))
      setIsActive(dish.isActive !== false)
      setIsRecommended(!!dish.isRecommended)
      setImageUrl(dish.image || '')
    } catch (err) {
      console.error('[菜品编辑] 加载菜品详情失败:', err)
      Taro.showToast({ title: '加载失败', icon: 'none' })
      setTimeout(() => Taro.navigateBack(), 1500)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  useEffect(() => {
    if (dishId) {
      loadDishDetail(dishId)
    }
  }, [dishId, loadDishDetail])

  /** 选择图片 */
  const handleChooseImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        setTempImagePath(res.tempFilePaths[0])
      },
      fail: (err) => {
        console.error('[菜品编辑] 选择图片失败:', err)
      },
    })
  }

  /** 上传图片到服务器 */
  const uploadImage = async (): Promise<string> => {
    // 如果没有新图片，返回已有的 imageUrl
    if (!tempImagePath) return imageUrl

    Taro.showLoading({ title: '上传图片...', mask: true })
    try {
      const uploadRes = await Taro.uploadFile({
        url: `${UPLOAD_BASE}/api/upload`,
        filePath: tempImagePath,
        name: 'image',
        formData: { type: 'dish' },
        header: {
          Authorization: `Bearer ${Taro.getStorageSync('token')}`,
        },
      })
      Taro.hideLoading()
      const data = JSON.parse(uploadRes.data)
      if (data.success && data.data?.url) {
        return data.data.url
      }
      throw new Error(data.message || '上传失败')
    } catch (err: any) {
      Taro.hideLoading()
      console.error('[菜品编辑] 上传图片失败:', err)
      throw new Error(err?.message || '图片上传失败')
    }
  }

  /** 提交表单 */
  const handleSubmit = async () => {
    // 表单校验
    if (!name.trim()) {
      Taro.showToast({ title: '请输入菜品名称', icon: 'none' })
      return
    }
    if (!price || isNaN(Number(price)) || Number(price) <= 0) {
      Taro.showToast({ title: '请输入有效价格', icon: 'none' })
      return
    }
    if (!categoryId) {
      Taro.showToast({ title: '请选择分类', icon: 'none' })
      return
    }

    setSubmitting(true)
    Taro.showLoading({ title: '保存中...', mask: true })

    try {
      // 如果有新图片，先上传
      const finalImageUrl = await uploadImage()

      const dishData: any = {
        name: name.trim(),
        price: Number(price),
        categoryId,
        description: description.trim() || undefined,
        stock: stock ? parseInt(stock) : 999,
        isActive,
        isRecommended,
        image: finalImageUrl || undefined,
      }

      if (dishId && isEdit) {
        // 编辑模式
        await updateDish(dishId, dishData)
        Taro.hideLoading()
        Taro.showToast({ title: '更新成功', icon: 'success' })
      } else {
        // 新增模式
        await createDish(dishData)
        Taro.hideLoading()
        Taro.showToast({ title: '添加成功', icon: 'success' })
      }

      setTimeout(() => Taro.navigateBack(), 1500)
    } catch (err: any) {
      Taro.hideLoading()
      const msg = err?.message || '保存失败'
      Taro.showToast({ title: msg.length > 20 ? msg.slice(0, 18) + '...' : msg, icon: 'none', duration: 2500 })
      console.error('[菜品编辑] 提交失败:', err)
    } finally {
      setSubmitting(false)
    }
  }

  /** 分类 Picker 选项 */
  const catPickerRange = categories.map(c => c.icon ? `${c.icon} ${c.name}` : c.name)

  if (!isLoggedIn || !isAdmin) {
    return (
      <View className='dish-edit-page' style={themeStyle}>
        <View className='empty-wrap'>
          <Text className='empty-icon'>🚫</Text>
          <Text className='empty-text'>无权访问</Text>
        </View>
      </View>
    )
  }

  if (loading) {
    return (
      <View className='dish-edit-page' style={themeStyle}>
        <View className='loading-wrap'>
          <Text>加载中...</Text>
        </View>
      </View>
    )
  }

  return (
    <View className='dish-edit-page' style={themeStyle}>
      {/* 页面标题 */}
      <View className='page-header'>
        <Text className='page-title'>
          {readonly ? '菜品详情' : dishId ? '编辑菜品' : '新增菜品'}
        </Text>
      </View>

      {/* 图片上传区域 */}
      <View className='image-section'>
        <View className='image-upload-area' onClick={readonly ? undefined : handleChooseImage}>
          {(tempImagePath || imageUrl) ? (
            <View
              className='image-preview'
              style={{ backgroundImage: `url(${tempImagePath || imageUrl})` }}
            />
          ) : (
            <View className='image-placeholder'>
              <Text className='upload-icon'>📷</Text>
              <Text className='upload-text'>点击上传菜品图片</Text>
            </View>
          )}
        </View>
      </View>

      {/* 表单区域 */}
      <View className='form-section'>
        {/* 菜品名称 */}
        <View className='form-item'>
          <Text className='form-label'>菜品名称 *</Text>
          <Input
            className='form-input'
            placeholder='请输入菜品名称'
            placeholderClass='input-placeholder'
            value={name}
            onInput={(e) => setName(e.detail.value)}
            disabled={readonly}
            maxlength={50}
          />
        </View>

        {/* 价格 */}
        <View className='form-item'>
          <Text className='form-label'>价格（元） *</Text>
          <Input
            className='form-input'
            type='digit'
            placeholder='请输入价格'
            placeholderClass='input-placeholder'
            value={price}
            onInput={(e) => setPrice(e.detail.value)}
            disabled={readonly}
          />
        </View>

        {/* 分类选择 */}
        <View className='form-item'>
          <Text className='form-label'>分类 *</Text>
          {readonly ? (
            <View className='form-value'>
              <Text>{categories.find(c => c.id === categoryId)?.name || '未选择'}</Text>
            </View>
          ) : (
            <Picker
              mode='selector'
              range={catPickerRange}
              onChange={(e) => {
                const idx = e.detail.value
                setCategoryId(categories[idx].id)
              }}
            >
              <View className='form-picker'>
                <Text className={categoryId ? '' : 'input-placeholder'}>
                  {categoryId
                    ? catPickerRange[categories.findIndex(c => c.id === categoryId)]
                    : '请选择分类'}
                </Text>
                <Text className='picker-arrow'>▼</Text>
              </View>
            </Picker>
          )}
        </View>

        {/* 库存 */}
        <View className='form-item'>
          <Text className='form-label'>库存</Text>
          <Input
            className='form-input'
            type='number'
            placeholder='默认999'
            placeholderClass='input-placeholder'
            value={stock}
            onInput={(e) => setStock(e.detail.value)}
            disabled={readonly}
          />
        </View>

        {/* 描述 */}
        <View className='form-item'>
          <Text className='form-label'>描述</Text>
          <Textarea
            className='form-textarea'
            placeholder='菜品描述（可选）'
            placeholderClass='input-placeholder'
            value={description}
            onInput={(e) => setDescription(e.detail.value)}
            disabled={readonly}
            maxlength={200}
            autoHeight
          />
        </View>

        {/* 上架状态 */}
        {!readonly && (
          <View className='form-item switch-item'>
            <Text className='form-label'>立即上架</Text>
            <Switch
              checked={isActive}
              onChange={(e) => setIsActive(e.detail.value)}
              color='#ff6b35'
            />
          </View>
        )}

        {/* 推荐状态 */}
        {!readonly && (
          <View className='form-item switch-item'>
            <Text className='form-label'>设为推荐</Text>
            <Switch
              checked={isRecommended}
              onChange={(e) => setIsRecommended(e.detail.value)}
              color='#ff6b35'
            />
          </View>
        )}
      </View>

      {/* 提交按钮（非只读模式） */}
      {!readonly && (
        <View className='submit-section'>
          <View
            className={`submit-btn ${submitting ? 'disabled' : ''}`}
            onClick={submitting ? undefined : handleSubmit}
          >
            <Text>{submitting ? '保存中...' : (dishId ? '保存修改' : '添加菜品')}</Text>
          </View>
        </View>
      )}
    </View>
  )
}
