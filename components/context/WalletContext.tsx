'use client'

import { ethersAdapter, projectId, networks } from './config'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: '342Games',
  description: '342Games',
  url: 'https://342games.342games.com/', // origin must match your domain & subdomain
  icons: ['http://ssqmwdnwb.sabkt.gdipper.com/342website/head/%E8%83%8C%E6%99%AF.jpg']
}

// Create the modal
export const modal = createAppKit({
  adapters: [ethersAdapter],
  projectId,
  networks,
  metadata,
  themeMode: 'light',
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  },
  themeVariables: {
    '--w3m-accent': '#000000',
  }
})

function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  )
}

export default ContextProvider
