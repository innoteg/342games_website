import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Settings {
  notifications: boolean
  language: string
}

interface SettingsState {
  settings: Settings
  updateSettings: (settings: Partial<Settings>) => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
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
      name: 'settings-storage',
    }
  )
) 