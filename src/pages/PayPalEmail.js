import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


function PayPalEmail() {
  return (
    <div className='bg-[#000000] relative h-screen'>
        <div className='h-[25%] flex justify-center items-center'>
            <img src={logo} className='w-28 aspect-square rounded-2xl'/>
        </div>
        <div className='p-5 m-5'>
            <div>
                <h1 className='text-white text-xl font-semibold'>Enter PayPal Email Address</h1>
            </div>
            <input placeholder='useremail@paypal.com' className='bg-transparent text-white text-3xl outline-none mt-5'/>
        </div>
        <div className='absolute flex bottom-0 w-full p-5'>
            <button className='bg-[#C8F73A] h-16 w-full rounded-xl'>
                <Link to='/continue-one'>
                    Continue
                </Link>
            </button>
        </div>
    </div>
  )
}

export default PayPalEmail