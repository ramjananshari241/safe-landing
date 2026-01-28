import { ImageResponse } from 'next/og'

// 设置图标的属性
export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

// 用代码画一个 AP 图标
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#2563eb', // 对应我们用的 blue-600
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: 6, // 圆角
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        AP
      </div>
    ),
    { ...size }
  )
}