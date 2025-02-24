
import http from './httpIndex';
import { BACKEND_URL } from '@/base/env';


export function fetchPokemon(data?: any) {
  return http({
    method: 'post',
    url: ' https://pokeapi.co/api/v2/pokemon',
    params: data,
    data
  });
}

export function loginApi(data?: any) {
  return http({
    method: 'post',
    url: '/login/loginIn',
    data
  });
}
export function userEdit(data?: any) {
  return http({
    method: 'post',
    url: '/user/edit',
    data,
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
}
export function visitorList(data?: any) {
  return http({
    baseURL: BACKEND_URL,
    method: 'get',
    url: '/visitor/list',
    // data,
    params: data
  });
}
export function getUserPackageDetail(accountAddress?: any) {
  return http({
    baseURL: BACKEND_URL,
    method: 'get',
    url: '/subscription/getUserPackageDetail',
    // data,
    params: {
      accountAddress
    }
  });
}
export function validateFilePassword(data?: any) {
  return http({
    baseURL: BACKEND_URL,
    method: 'post',
    url: '/object/validateFilePassword',
    data,
    params: data
  });
}
export function deleteFilePassword(data?: any) {
  return http({
    baseURL: BACKEND_URL,
    method: 'delete',
    url: '/object/deleteFilePassword',
    data,
    params: data
  });
}
export function getEncryptStatus(data?: any) {
  return http({
    baseURL: BACKEND_URL,
    method: 'get',
    url: '/object/getEncryptStatus',
    params: data
  });
}
export function addFilePassword(data?: any) {
  return http({
    baseURL: BACKEND_URL,
    method: 'post',
    url: '/object/addFilePassword',
    data,
  });
}