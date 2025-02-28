import toast from 'react-hot-toast'

export const showToast = {
  success: (message: string) => {
    toast.success(message, {
      id: `success-${Date.now()}`, // 确保每个toast都有唯一ID
      position: 'top-center',

    })
  },
  error: (message: string) => {
    toast.error(message, {
      id: `error-${Date.now()}`,
      position: 'top-center',

    })
  },
  info: (message: string) => {
    toast(message, {
      id: `info-${Date.now()}`,
      position: 'top-center',

    })
  },
  
} 