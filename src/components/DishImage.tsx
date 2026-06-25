/**
 * DishImage —— 自动处理 HTTP 图片在微信小程序真机无法显示的问题
 *
 * 原因：微信小程序真机的 WebView 对非 HTTPS 图片有严格限制，即使能访问也可能被拦截。
 * 解法：用 Taro.downloadFile 把图片下载到临时路径，再用本地路径渲染。
 *
 * 微信小程序真机调试关键：
 * 1. 不能使用外部域名（如 via.placeholder.com）——未在微信后台配置白名单的域名会被拦截
 * 2. 正确做法：无图片时不加载外部 URL，渲染本地占位元素
 */
import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { Image, View, Text } from "@tarojs/components";

interface DishImageProps {
  src: string;
  mode?: "aspectFill" | "aspectFit" | "scaleToFill" | "widthFix" | "heightFix";
  className?: string;
  style?: React.CSSProperties;
  /** 占位文字（无图片时显示），默认"暂无图片" */
  placeholder?: string;
  /** 是否启用点击预览大图，默认 true */
  preview?: boolean;
}

/** 简单的内存缓存：url → 临时路径，避免同一图片重复下载 */
const imgCache: Record<string, string> = {};

export default function DishImage({
  src,
  mode = "aspectFill",
  className = "",
  style,
  placeholder = "暂无图片",
  preview = true,
}: DishImageProps) {
  const [localSrc, setLocalSrc] = useState<string>("");
  const [failed, setFailed] = useState(false);

  /** 点击预览大图：使用微信原生图片预览 API，支持双指缩放 */
  const handlePreview = () => {
    if (!preview || !src) return;
    const url = localSrc || src;
    // 已经是本地路径或 https，可以直接用于预览
    if (url && !failed) {
      Taro.previewImage({
        urls: [url],
        current: url,
      });
    }
  };

  useEffect(() => {
    if (!src) {
      setFailed(true);
      return;
    }

    /* 如果是 https / data: / wxfile:// 开头，微信小程序允许直接使用 */
    if (src.startsWith("https://") || src.startsWith("data:") || src.startsWith("wxfile://")) {
      setLocalSrc(src);
      return;
    }

    /* 如果已经缓存了临时路径，直接用 */
    if (imgCache[src]) {
      setLocalSrc(imgCache[src]);
      return;
    }

    /* http:// 图片 → 用 downloadFile 下载到临时路径再渲染 */
    Taro.downloadFile({
      url: src,
      success: (res) => {
        if (res.statusCode === 200) {
          imgCache[src] = res.tempFilePath;
          setLocalSrc(res.tempFilePath);
        } else {
          console.error("[DishImage] downloadFile failed, status:", res.statusCode, src);
          setFailed(true);
        }
      },
      fail: (err) => {
        console.error("[DishImage] downloadFile error:", src, err);
        setFailed(true);
      },
    });
  }, [src]);

  /* 图片加载失败或无图片 → 渲染本地占位元素（避免加载外部域名被微信拦截） */
  if (failed || !localSrc) {
    return (
      <View
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          color: "#999",
          fontSize: "24rpx",
          overflow: "hidden",
          ...style,
        }}
        onClick={handlePreview}
      >
        <Text>{placeholder}</Text>
      </View>
    );
  }

  return (
    <Image
      src={localSrc}
      mode={mode}
      className={className}
      style={style}
      onError={() => setFailed(true)}
      onClick={handlePreview}
    />
  );
}
