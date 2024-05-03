import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {
  ConnectButton,
} from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import {
  createWallet,
  walletConnect,
  inAppWallet,
  preAuthenticate
} from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "a02abdc106da3c1467ba518489b891dc",
});

const wallets = [
  walletConnect(),
  inAppWallet({
    auth: {
      options: ["email", "phone"],
    },
  }),
  createWallet("io.metamask")
];

function Home() {
  return (
    <div className='bg-[#000000] relative h-screen'>
      <div className='h-[25%] flex justify-center items-center'>
        <img src={logo} className='w-28 aspect-square rounded-2xl' />
      </div>
      <div>
        <ConnectButton
          client={client}
          theme={"dark"}
          connectModal={{
            size: "compact",
            title: "Zeke",
            titleIcon: "",
            showThirdwebBranding: false,
          }}
          wallets={wallets}
          accountAbstraction={{
            chain: baseSepolia,
            factoryAddress: "0xb26BE4505119107f9Bb6D4948360E4B7Dea50e29",
            gasless: true,
          }}
        />
      </div>
      <div className='absolute flex bottom-0 w-full p-5'>
        <button className='bg-[#C8F73A] h-16 w-full rounded-xl'>
          <Link to='/walletaddress'>
            Begin
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Home