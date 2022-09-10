require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note oval clump harvest inflict slot gift'; 
let testAccounts = [
"0x20a124dea8db4c4ad5d53c8ca896c78fa7bc375ba33cdaac329bc391a49e2b75",
"0x80461e1fc94666c3bcc10cec3b1f78fee906bebe25e24af6c32be4fe541a4eb2",
"0xdce7343ccb0afa20f9ffac340498eef33be0a1ff36ee5d582dc99956de1434fa",
"0x0ab32173cae1e2b1e376a4d630e1e86ee29d55baaf2590afc948a6fcadb2b5de",
"0xf673037dd22efab80f3423e3535369981b0e900c43f54c59b643f3efd60e116d",
"0xaf4d2446431bfa8e6e32c6628203eebf5d355fa71a68615bd8801d3e3505440e",
"0x74ad32454c74a32abc7a2e373ea4432a2c9b0464d26ffe6354cba057866ee05f",
"0xc4730af919ad2b4f2b76def9ace418ea5a02c6d054c4b80210e89f5a0437befd",
"0x022179d5f167130e35d39be2ce23d6f4dc3449d83d0d4d5a1c90877889422a6b",
"0xcd53534bf54996ed2f5bbf03a0d005c391e2f9cbbc600917b27a43ee779dd983"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

