
const { SecretNetworkClient } = require("secretjs");

export const DENOM = 'SCRT';
export const MINIMAL_DENOM = 'uscrt';

// Testnet, using a known contract
export const GRPCWEB_URL = 'https://grpc.pulsar.scrttestnet.com';
export const LCD_URL = 'https://api.pulsar.scrttestnet.com';
export const RPC_URL = 'https://rpc.pulsar.scrttestnet.com';
export const CHAIN_ID = 'pulsar-2';
export const CHAIN_NAME = 'Secret Testnet'; 
export const contractAddress = "secret1vuph04rrzxs0admn5w030ek3hrtacttwcdwtvj";

export function getConfig (env) {
    switch (env) {
      case 'development':
      case 'testnet':
        return {
            MNEMONIC:'put your mnemonic here',
            CONTRACTADDRESS:'secret17hxzcy4y8aznjsjlv6l33tk4fql5fcsl9zccjm',
            CONTRACTHASH:'add0d4c751f7503a564031dab3b31007c696382d732c88fb95d4d07aee4c5fc8',
            CONTRACTID:'21044'
        }
      
      default:
        throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`)
    }
  }
  

