const withImages = require('next-images')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withImages({
  env: {
    INFURA_PROJECT_ID: '922492ddbd61487c98b1c45aed5cfdc1',
    CHAIN_ID: '4',
    CHAIN_NAME: 'Rinkeby',
    DENOMINTAION: 'DAI',

    BLOCK_EXPLORER: 'https://rinkeby.etherscan.io/tx/',

    DAI_CONTRACT: '0x0527E400502d0CB4f214dd0D2F2a323fc88Ff924',
    VAULT_CONTRACT: '0xedaca69df50a0f99bd4d78e2cc5cd1e56682441e',
    GCT_TOKEN_CONTRACT: '0x542d9c5468d8e5a6ecd42b45cda89fa4e7b30e17',
    TOKEN_MANAGER_CONTRACT: '0xd4b0c737040f3bcad81d45dd07351d8c654af832',
    FUNDRAISING_CONTRACT: '0x4d21c8f8b11062a869b958e7d54f205362b07b82',
    PRE_SALE_CONTRACT: '0xc635960e935bbacaacf024f5c3a85298876b4a63',
  },
  assetPrefix: isProd ? '/donation-dao/' : ''
});  
