import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  user: {
    id: string
    name: string
  } | null
  setUser: (user: AppState['user']) => void
  settings: {
    notifications: boolean
    language: string
  }
  updateSettings: (settings: Partial<AppState['settings']>) => void
  // 这里可以添加更多状态
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      user: null,
      setUser: (user) => set({ user }),
      settings: {
        notifications: true,
        language: 'en'
      },
      updateSettings: (newSettings) => 
        set((state) => ({
          settings: { ...state.settings, ...newSettings }
        }))
    }),
    {
      name: 'app-storage', // 存储的键名
    }
  )
) 