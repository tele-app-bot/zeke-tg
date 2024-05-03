import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { ConnectButton } from "thirdweb/react";
import { sepolia } from "thirdweb/chains";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({ clientId: "dc7468c96c27ede108735c2ce3ff91cc" });


function Home() {
  return (
    <div className='bg-[#000000] relative h-screen'>
        <div className='h-[25%] flex justify-center items-center'>
            <img src={logo} className='w-28 aspect-square rounded-2xl'/>
        </div>
        <div>
            <ConnectButton
                client={client}
                accountAbstraction={{
                    chain: sepolia,
                    factoryAddress: "your-factory-address",
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