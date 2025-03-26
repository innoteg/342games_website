import getConfig from 'next/config';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
const {
  NEXT_PUBLIC_BASE,

} = publicRuntimeConfig || {};
export const defaultConfig = {
  NEXT_PUBLIC_BASE
}
// const { NEXT_PRIVATE_BILLING_API_URL, NEXT_PRIVATE_EXPLORER_API_URL } = serverRuntimeConfig || {};

// export type TRuntimeEnv = 'development' | 'qa' | 'testnet' | 'mainnet';

// export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
// export const BACKEND_ACCOUNT_ADDRESS = process.env.NEXT_PUBLIC_BACKEND_ACCOUNT_ADDRESS;

// export const NODE_ENV = process.env.NODE_ENV;
// export const runtimeEnv: TRuntimeEnv = NEXT_PUBLIC_ENV || 'qa';
// console.log('runtimeEnv', NODE_ENV, runtimeEnv)
// export const assetPrefix = NEXT_PUBLIC_STATIC_HOST || '';
// export const GA_ID = NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
// // This default values for compatible wagmi build error.
// export const GREENFIELD_CHAIN_ID = +NEXT_PUBLIC_GREENFIELD_CHAIN_ID || 5600;
// export const BSC_CHAIN_ID = +NEXT_PUBLIC_BSC_CHAIN_ID || 97;
// export const GREENFIELD_CHAIN_RPC_URL =
//   NEXT_PUBLIC_GREENFIELD_CHAIN_RPC_URL || 'https://gnfd-testnet-ethapi-us.bnbchain.org';
// export const BSC_RPC_URL =
//   NEXT_PUBLIC_BSC_RPC_URL || 'https://gnfd-bsc-testnet-dataseed1.bnbchain.org';
// export const GREENFIELD_CHAIN_EXPLORER_URL = NEXT_PUBLIC_GREENFIELD_CHAIN_EXPLORER_URL;
// export const BSC_EXPLORER_URL = NEXT_PUBLIC_BSC_EXPLORER_URL;
// export const GREENFIELD_MAINNET_ID = NEXT_PUBLIC_GREENFIELD_CHAIN_MAINNET_ID;
// export const GREENFIELD_MAINNET_RPC_URL = NEXT_PUBLIC_GREENFIELD_CHAIN_MAINNET_RPC_URL;

// export const BILLING_API_URL = removeTrailingSlash(NEXT_PRIVATE_BILLING_API_URL || '');
// export const EXPLORER_API_URL = removeTrailingSlash(NEXT_PRIVATE_EXPLORER_API_URL || '');

// export const mainnetSpMetaEndpoint = NEXT_PUBLIC_APOLLO_MAINNET_SP_RECOMMEND_META;

// export const defaultApolloConfig = {
//   NEXT_PUBLIC_BASE,
//   TOKEN_HUB_CONTRACT_ADDRESS: NEXT_PUBLIC_APOLLO_TOKEN_HUB_CONTRACT_ADDRESS,
//   CROSS_CHAIN_CONTRACT_ADDRESS: NEXT_PUBLIC_APOLLO_CROSS_CHAIN_CONTRACT_ADDRESS,
//   RECOMMEND_SPS: NEXT_PUBLIC_APOLLO_RECOMMEND_SPS,
//   SP_RECOMMEND_META: NEXT_PUBLIC_APOLLO_SP_RECOMMEND_META,
//   CLIENT_FROZEN_ACCOUNT_BUFFER_TIME: NEXT_PUBLIC_APOLLO_CLIENT_FROZEN_ACCOUNT_BUFFER_TIME,
//   LIST_FOR_SELL_ENDPOINT: NEXT_PUBLIC_APOLLO_LIST_FOR_SELL_ENDPOINT,
//   GLOBAL_NOTIFICATION: NEXT_PUBLIC_APOLLO_GLOBAL_NOTIFICATION,
//   GLOBAL_NOTIFICATION_ETA: NEXT_PUBLIC_APOLLO_GLOBAL_NOTIFICATION_ETA,
// };
// export { NEXT_PUBLIC_BASE };

