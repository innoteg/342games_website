import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Session } from 'next-auth'

interface UserState {
  session: Session | null
  token: string | null
  userInfo: any
  runestoneList: any
  runestoneDetail: any
  setSession: (session: Session | null, token?: string | null) => void
  setToken: (token: string) => void
  setUserInfo: (userInfo: any) => void
  setRunestoneList: (runestoneList: any) => void
  setRunestoneDetail: (runestoneDetail: any) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      session: null,
      token: null,
      userInfo: {},
      runestoneList: [],
      runestoneDetail: {},
      setSession: (session, token) => set({ session, token }),
      setToken: (token) => set({ token }),
      setUserInfo: (userInfo) => set({ userInfo }),
      setRunestoneList: (runestoneList) => set({ runestoneList }),
      setRunestoneDetail: (runestoneDetail) => set({ runestoneDetail }),
    }),
    {
      name: 'user-storage',
      // storage: () => localStorage,
    })
) 
