'use client'

import { Toaster as HotToaster } from 'react-hot-toast'

export function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        // 默认样式
        style: {
          background: '#333',
          color: '#fff',
          borderRadius: '8px',
          padding: '12px 24px',
        },
        // 成功提示的样式
        success: {
          duration: 3000,
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#00b09b',
          },
        },
        // 错误提示的样式
        error: {
          duration: 3000,
          style: {
            background: 'linear-gradient(to right, #ff5f6d, #ffc371)',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#ff5f6d',
          },
        }
      }}
    />
  )
} 