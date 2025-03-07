'use client'
import React, { useEffect } from 'react';
import { useUserStore } from '../../../lib/stores/user';
import { getUserInfo } from '../../../lib/http';

interface MainContextProviderProps {
  children: React.ReactNode;
}

const MainContextProvider: React.FC<MainContextProviderProps> = ({ children }) => {
  const token = useUserStore((state) => state.token); // 假设这是获取 token 的方法
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  useEffect(() => {
    if (token) {
      getUserInfo().then((res) => {
        if (res.code === 200) {
          setUserInfo(res.data);
        }
      }); // 有 token 时请求用户信息
    }
  }, [token]);

  return <>{children}</>;
}

export default MainContextProvider;
