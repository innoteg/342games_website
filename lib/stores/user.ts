import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Session } from 'next-auth'

interface UserState {
  session: Session | null
  setSession: (session: Session | null) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      session: null,
      setSession: (session) => set({ session }),
    }),
    {
      name: 'user-storage',
    }
  )
) 