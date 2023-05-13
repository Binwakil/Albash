//We epxport all the functions from the ArchiNFT Smart Contract that we will use in the frontend 
import { GRPCWEB_URL, LCD_URL, RPC_URL, CHAIN_ID, CHAIN_NAME, contractAddress } from "./config";
import React, { useState, useEffect } from "react";

const { SecretNetworkClient } = require("secretjs");

const [myAddress, setMyAddress] = useState("");
const [secretjs, setSecretjs] = useState();
const [keplrReady, setKeplrReady] = useState(false);



export const isLogging = () => {
    return window.walletConnection.isSignedIn();
}

// for getting signer account
export const getAccount = () => {
    return window.walletConnection.getAccountId();
}

// for loging out user 
export function logout() {
    if (isLogging()) {
        window.walletConnection.signOut();
        window.location.reload();
        // reload page
        //window.location.replace(window.location.origin + window.location.pathname)
    } else {
        alert('the User is already logout');   
    }
}


const getKeplr = async () => {

  while (
    !window.keplr &&
    !window.getOfflineSigner &&
    !window.getEnigmaUtils
  ) {
    await sleep(10);
  }

    await window.keplr.experimentalSuggestChain({
    chainId: CHAIN_ID,
    chainName: CHAIN_NAME,
    rpc: RPC_URL,
    rest: LCD_URL,
    bip44: {
      coinType: 529,
    },
    coinType: 529,
    stakeCurrency: {
      coinDenom: DENOM,
      coinMinimalDenom: MINIMAL_DENOM,
      coinDecimals: 6,
    },
    bech32Config: {
      bech32PrefixAccAddr: "secret",
      bech32PrefixAccPub: "secretpub",
      bech32PrefixValAddr: "secretvaloper",
      bech32PrefixValPub: "secretvaloperpub",
      bech32PrefixConsAddr: "secretvalcons",
      bech32PrefixConsPub: "secretvalconspub",
    },
    currencies: [
      {
        coinDenom: DENOM,
        coinMinimalDenom: MINIMAL_DENOM,
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: DENOM,
        coinMinimalDenom: MINIMAL_DENOM,
        coinDecimals: 6,
      },
    ],
    gasPriceStep: {
      low: 0.1,
      average: 0.25,
      high: 0.4,
    },
    features: ["secretwasm"],
  });

  // Enable Keplr.
  // This pops-up a window for the user to allow keplr access to the webpage.
  await window.keplr.enable(CHAIN_ID);

  // Setup SecrtJS with Keplr's OfflineSigner
  // This pops-up a window for the user to sign on each tx we sent

  const keplrOfflineSigner = window.getOfflineSignerOnlyAmino(CHAIN_ID);

  const [{ address: myAddress }] = await keplrOfflineSigner.getAccounts();
  
  const secretjs = new SecretNetworkClient({
    url: LCD_URL,
    chainId: CHAIN_ID,
    wallet: keplrOfflineSigner,
    walletAddress: myAddress,
    encryptionUtils: window.getEnigmaUtils(CHAIN_ID),
  });

  setKeplrReady(true);
  setMyAddress(myAddress);
  setSecretjs(secretjs);

    
  }
  


// for logig in user
export async function login() {
  

 // Wait for Keplr to be injected to the page
 getKeplr();
       


  if (!isLogging()) {
   // await window.keplr.enable(CHAIN_ID);


  } else {
    //let me = await getAccount()
    alert(`already login please as ${getAccount()}`);
  }  
}