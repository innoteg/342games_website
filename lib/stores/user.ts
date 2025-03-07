import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Session } from 'next-auth'

interface UserState {
  session: Session | null
  token: string | null
  setSession: (session: Session | null, token?: string | null) => void
  setToken: (token: string | null) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      session: null,
      token: null,
      setSession: (session, token) => set({ session, token }),
      setToken: (token) => set({ token }),
    }),
    {
      name: 'user-storage',
      // storage: () => localStorage,
    })
) 
