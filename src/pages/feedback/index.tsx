/**
 * 意见反馈页面
 *
 * 功能：
 * 1. 文字输入框：用户填写反馈内容（必填，最多 500 字）
 * 2. 图片上传：可选项，最多上传 4 张图片
 * 3. 提交按钮：校验后调用 feedbackApi.submit 提交到后端
 *
 * 权限：需要登录，未登录时显示引导页
 */

import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Textarea, Button } from "@tarojs/components";
import { feedbackApi, UPLOAD_BASE } from "../../api";
import { useUserStore } from "../../store/user";
import { useTheme } from "../../hooks/useTheme";
import "./index.scss";

export default function FeedbackPage() {
  const { themeStyle } = useTheme();
  const { isLoggedIn } = useUserStore();
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  /** 未登录时显示引导页 */
  if (!isLoggedIn) {
    return (
      <View className="feedback-page" style={themeStyle}>
        <View className="empty-wrap">
          <Text className="empty-icon">🔒</Text>
          <Text className="empty-text">请先登录</Text>
          <Text className="empty-hint">登录后即可提交反馈意见</Text>
          <View
            className="go-menu-btn"
            onClick={() => Taro.switchTab({ url: "/pages/profile/index" })}
          >
            去登录
          </View>
        </View>
      </View>
    );
  }

  /** 选择图片（调用微信原生选择图片 API） */
  const handleChooseImage = () => {
    const remaining = 4 - images.length;
    if (remaining <= 0) {
      Taro.showToast({ title: "最多上传4张图片", icon: "none" });
      return;
    }
    Taro.chooseImage({
      count: remaining,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        setImages([...images, ...res.tempFilePaths]);
      },
      fail: (err) => {
        console.error("[feedback] 选择图片失败:", err);
      },
    });
  };

  /** 移除已选中的图片 */
  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  /** 提交反馈 */
  const handleSubmit = async () => {
    if (!content.trim()) {
      Taro.showToast({ title: "请输入反馈内容", icon: "none" });
      return;
    }
    if (submitting) return;

    setSubmitting(true);
    Taro.showLoading({ title: "提交中...", mask: true });
    try {
      // 如果有图片，先上传到服务器获取 URL
      let imageUrls: string[] = [];
      if (images.length > 0) {
        for (const filePath of images) {
          try {
            const uploadRes = await Taro.uploadFile({
              url: `${UPLOAD_BASE}/api/upload`,
              filePath,
              name: "image",
              formData: { type: "feedback" },
              header: {
                Authorization: `Bearer ${Taro.getStorageSync("token")}`,
              },
            });
            const data = JSON.parse(uploadRes.data);
            if (data.success && data.data?.url) {
              imageUrls.push(data.data.url);
            } else {
              console.error("[feedback] 上传响应异常:", uploadRes.data);
            }
          } catch (uploadErr) {
            console.error("[feedback] 上传图片失败:", uploadErr);
            // 上传失败不阻断流程，仅提示一次
          }
        }
        if (imageUrls.length === 0 && images.length > 0) {
          Taro.showToast({ title: "图片上传失败，将仅提交文字", icon: "none" });
        }
      }

      await feedbackApi.submit({ content: content.trim(), images: imageUrls });
      Taro.hideLoading();
      Taro.showToast({ title: "感谢您的反馈！", icon: "success", duration: 2000 });
      setTimeout(() => Taro.navigateBack(), 2000);
    } catch (err: any) {
      Taro.hideLoading();
      const msg = err?.message || "提交失败，请重试";
      Taro.showToast({ title: msg.length > 20 ? msg.slice(0, 18) + "..." : msg, icon: "none", duration: 2500 });
      console.error("[feedback] submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View className="feedback-page" style={themeStyle}>
      {/* 提示文字 */}
      <View className="feedback-hint">
        <Text>您的意见对我们非常重要，请详细描述您遇到的问题或建议。</Text>
      </View>

      {/* 文字输入 */}
      <View className="feedback-form">
        <Textarea
          className="feedback-textarea"
          placeholder="请输入反馈内容（必填，最多500字）..."
          maxlength={500}
          value={content}
          onInput={(e) => setContent(e.detail.value)}
          autoHeight
        />

        {/* 图片上传区域 */}
        <View className="image-section">
          <Text className="section-label">图片（选填，最多4张）</Text>
          <View className="image-grid">
            {images.map((url, i) => (
              <View key={i} className="image-item">
                <View
                  className="image-preview"
                  style={{ backgroundImage: `url(${url})` }}
                  onClick={() => Taro.previewImage({ urls: images, current: url })}
                />
                <View className="remove-btn" onClick={() => handleRemoveImage(i)}>
                  <Text>×</Text>
                </View>
              </View>
            ))}
            {images.length < 4 && (
              <View className="add-image-btn" onClick={handleChooseImage}>
                <Text className="add-icon">+</Text>
                <Text className="add-text">添加图片</Text>
              </View>
            )}
          </View>
        </View>
      </View>

      {/* 提交按钮 */}
      <View className="submit-area">
        <Button
          className={`submit-btn ${submitting ? "disabled" : ""}`}
          onClick={submitting ? undefined : handleSubmit}
        >
          {submitting ? "提交中..." : "提交反馈"}
        </Button>
      </View>
    </View>
  );
}
