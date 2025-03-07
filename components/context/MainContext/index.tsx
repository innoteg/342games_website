'use client'
import React, { useEffect } from 'react';
import { useUserStore } from '../../../lib/stores/user';
import { getRunestoneDetail, getRunestoneList, getUserInfo } from '../../../lib/http';

interface MainContextProviderProps {
  children: React.ReactNode;
}

const MainContextProvider: React.FC<MainContextProviderProps> = ({ children }) => {
  const token = useUserStore((state) => state.token); // 假设这是获取 token 的方法
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const setRunestoneList = useUserStore((state) => state.setRunestoneList);
  const setRunestoneDetail = useUserStore((state) => state.setRunestoneDetail);
  useEffect(() => {
    if (token) {
      getUserInfo().then((res) => {
        if (res.code === 200) {
          setUserInfo(res.data);
        }
      }); // 有 token 时请求用户信息
      getRunestoneList().then((res) => {
        if (res.code === 200) {
          setRunestoneList(res.data);
        }
      });
      getRunestoneDetail().then((res) => {
        if (res.code === 200) {
          setRunestoneDetail(res.data);
        }
      });
    }
  }, [token]);

  return <>{children}</>;
}

export default MainContextProvider;
