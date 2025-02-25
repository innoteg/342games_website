'use client'

import React from 'react'
import toast from 'react-hot-toast'

interface ToastProps {
  t: {
    visible: boolean
    id: string
  }
  message: string
}

const ToastContent: React.FC<ToastProps> = ({ t, message }) => (
  <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
            {message}
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        关闭
      </button>
    </div>
  </div>
)

export const showToast = {
  success: (message: string) => {
    toast.success(message, {
      id: `success-${Date.now()}`,
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
  custom: (message: string, options?: Record<string, unknown>) => {
    toast.custom(
      (t) => <ToastContent t={t} message={message} />,
      {
        id: `custom-${Date.now()}`,
        position: 'top-center',
        ...options,
      }
    )
  },
  promise: async <T,>(
    promise: Promise<T>,
    messages: {
      loading: string
      success: string
      error: string
    }
  ) => {
    return toast.promise(promise, messages, {
      position: 'top-center',
      loading: {
        style: {
          background: '#333',
          color: '#fff',
        },
      },
      success: {
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      },
      error: {
        style: {
          background: 'linear-gradient(to right, #ff5f6d, #ffc371)',
        },
      },
    })
  },
} 