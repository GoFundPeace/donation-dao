const withImages = require('next-images')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withImages({
  env: {
    INFURA_PROJECT_ID: '922492ddbd61487c98b1c45aed5cfdc1',
    CHAIN_ID: '4',
    CHAIN_NAME: 'Rinkeby',
    DENOMINATION: 'DAI',

    BLOCK_EXPLORER: 'https://rinkeby.etherscan.io/tx/',

    DAI_CONTRACT: '0x0527E400502d0CB4f214dd0D2F2a323fc88Ff924',
    VAULT_CONTRACT: '0x535eb2f5ac6d77c7da1448e24057fd3532301c2f',
    GCT_TOKEN_CONTRACT: '0x49a21036f3b55a01a833618990564d35cbda18c0',
    TOKEN_MANAGER_CONTRACT: '0x3825f613abfdd913a096ca25d52e915310e159f2',
    FUNDRAISING_CONTRACT: '0x0bcd16b8eb2f2af0b3e0642fda6aa73c295cc2f6',
    PRE_SALE_CONTRACT: '0xc0e36e760a41f3f641249b0bc46010afbf18a80c',
  },
  
  // not needed when using custom domain 
  // assetPrefix: isProd ? '/donation-dao/' : ''
});  
