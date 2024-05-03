import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function WalletAddress() {
  return (
    <div className='bg-[#C8F73A] relative h-screen'>

        <div className='bg-[#000000] w-full rounded-t-[32px] bottom-0 absolute h-[95%]'>
            <div className='h-[25%] flex justify-center items-center'>
                {/* <img src={logo} className='w-28 aspect-square rounded-2xl'/> */}
                <h1 className='text-[54px] text-[#C8F73A] font-bold'>ZEKE</h1>

            </div>
            <div className='p-5 m-5'>
                <div>
                    <h1 className='text-white text-sm font-semibold'>Enter Wallet Address</h1>
                </div>
                <input placeholder='0x12345677998765' className='bg-transparent placeholder-[#c8f73a46] text-[#C8F73A] text-2xl outline-none mt-5'/>
            </div>
            <div className='absolute flex bottom-10 justify-center w-full p-5'>
                <button className='bg-[#C8F73A] h-12 w-[90%] rounded-xl'>
                    <Link to='/continue-one'>
                        Continue
                    </Link>
                </button>
            </div>
        </div>

    </div>
  )
}

export default WalletAddress