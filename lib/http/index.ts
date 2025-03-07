
import http from './httpIndex';
// import { BACKEND_URL } from '@/base/env';

export function fetchPokemon(data?: any) {
  return http({
    method: 'post',
    url: ' https://pokeapi.co/api/v2/pokemon',
    params: data,
    data
  });
}

export function getUserInfo(data?: any) {
  return http({
    method: 'get',
    url: 'app/user/getUserInfo',
  });
}
// 获取符石列表
export function getRunestoneList(data?: any) {
  return http({
    method: 'get',
    url: 'app/user/runestone/getList',
  });
}
// 获取符石配置信息

export function getRunestoneDetail(data?: any) {
  return http({
    method: 'get',
    url: 'app/user/runestone/getDetail',
  });
}
