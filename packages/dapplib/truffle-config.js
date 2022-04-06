require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food custom return noise essay coral light army gather'; 
let testAccounts = [
"0xe0a6e937d58b8003baa9a7847aface45f7d11003ab7f2d119526057542b2e580",
"0x0819e72373fa18a2d1318680f206db957717418a85e99e85913386507770f385",
"0x92a0a6c2feb538c11ec11b7a8577cbf8d6524834a64e72fbc1ecf3d143c4a6f0",
"0x9011d8390a00e352353110c341f19424ad1429ab4e76a675a1e5c2d3aac50e46",
"0x19eb358584f94aecd5090eb915362e7d6fdcada1ea7d016e9580f806691c2434",
"0x1ec452715b7c7f9dce33d8475e22c6f3eea5bb29d19bafc9a82dce08dfa3576a",
"0xcd3a3b6fd604166170c43c350c3136192a0458e8f407e75e243927f5e45bf4c3",
"0x5300c876c64e6a6b561a41b841f5d8ed38253e089e3c9e6df87a45c73447aacb",
"0xb0c5dec72c341ece8c90e2c7169aed012442b89cfcd8f0d293bed56e4788f549",
"0x174f50f68d4aa32b45edf810b0d4f7eb44cb16c09f0c25b6f91eac8af42bbb75"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


