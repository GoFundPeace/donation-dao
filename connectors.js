import { NetworkConnector } from '@web3-react/network-connector'
import { InjectedConnector } from '@web3-react/injected-connector'

const INFURA_PREFIXES = {
  1: 'mainnet',
  4: 'rinkeby',
  100: 'xDAI'
};

export function getNetwork(defaultChainId = 1) {
  return new NetworkConnector({
    urls: [1, 4].reduce(
      (urls, chainId) =>
        Object.assign(urls, {
          [chainId]: `https://${INFURA_PREFIXES[chainId]}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
        }),
      {}
    ),
    defaultChainId,
  })
}


// FOR XDAI
//
// export function getNetwork(defaultChainId = 1) {
//   return new NetworkConnector({
//     urls: [100].reduce(
//       (urls, chainId) =>
//         Object.assign(urls, {
//           [chainId]: `<quick-node>`,
//         }),
//       {}
//     ),
//     defaultChainId,
//   })
// }

export const injected = new InjectedConnector({ supportedChainIds: [1, 4, 100] })
