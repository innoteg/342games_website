import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet, bsc } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = '4a7c79abe4604baf891ea414448d1d19' // this is a public projectId only to use on localhost

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, bsc] as [AppKitNetwork, ...AppKitNetwork[]]

export const ethersAdapter = new EthersAdapter();