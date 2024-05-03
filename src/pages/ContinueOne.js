import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function ContinueOne() {
  return (
    <div className='bg-[#C8F73A] relative h-screen'>

    <div className='bg-[#000000] w-full rounded-t-[32px] bottom-0 absolute h-[95%]'>
        <div className='h-[25%] flex justify-center items-center'>
            {/* <img src={logo} className='w-28 aspect-square rounded-2xl'/> */}
            <h1 className='text-[54px] text-[#C8F73A] font-bold'>ZEKE</h1>

        </div>
        <div className='p-5 m-5'>
            <div>
                <h1 className='text-white text-sm  text-center font-semibold'>Wallet Address and PayPal email stored!</h1>
            </div>
        </div>
        <div className='absolute bottom-10 flex flex-col justify-center items-center w-full p-5'>
            <h1 className='text-gray-100 font-semibold text-center text-xs mb-3'>Continue to top up using PayPal</h1>
            <button className='bg-[#C8F73A] h-12 w-[90%] rounded-xl'>
                <Link to='/enteramount'>
                    Continue
                </Link>
            </button>
        </div>
        </div>
    </div>
  )
}

export default ContinueOne