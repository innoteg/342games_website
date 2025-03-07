import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Session } from 'next-auth'

interface UserState {
  session: Session | null
  token: string | null
  userInfo: any
  setSession: (session: Session | null, token?: string | null) => void
  setToken: (token: string) => void
  setUserInfo: (userInfo: any) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      session: null,
      token: null,
      userInfo: {},
      setSession: (session, token) => set({ session, token }),
      setToken: (token) => set({ token }),
      setUserInfo: (userInfo) => set({ userInfo }),
    }),
    {
      name: 'user-storage',
      // storage: () => localStorage,
    })
) 
