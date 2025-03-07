const _getPublicEnv = (prefix:any) => {
  const envs = process.env;
  const res:any = {};

  Object.keys(envs).forEach((k) => {
    if (k.startsWith(prefix)) {
      res[k] = envs[k];
    }
  });

  return res;
};
export default {
  images: {
    domains: ['ssqmwdnwb.sabkt.gdipper.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        search: ''
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        search: ''
      },
      {
        // loader: 'imgix',
        protocol: 'http',
        hostname: 'ssqmwdnwb.sabkt.gdipper.com',
      },
    ]
  },
  publicRuntimeConfig: {
    ..._getPublicEnv('NEXT_PUBLIC_'),
  },
  serverRuntimeConfig: {
    ..._getPublicEnv('NEXT_PRIVATE_'),
  },
};
