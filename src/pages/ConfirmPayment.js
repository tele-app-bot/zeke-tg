import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function ConfirmPayment() {
  return (
    
    <div className='bg-[#000000] relative h-screen'>
            <div className='h-[25%] flex justify-center items-center'>
                <img src={logo} className='w-28 aspect-square rounded-2xl'/>
            </div>
            <div className='p-5 m-5'>
                <div>
                    <h1 className='text-white text-xl  text-center font-semibold'>Top Up Submitted!</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='text-[#6e6e6e] text-xl font-semibold'>Make PayPal payment to</h1>
                    <h1 className='text-white text-xl font-semibold'>otheremail@paypal.com</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='text-[#6e6e6e] text-xl font-semibold'>of amount</h1>
                    <h1 className='text-white text-xl font-semibold'>USD 420.69</h1>
                </div>
            </div>
            <div className='absolute  bottom-0 w-full p-5'>
                {/* <h1 className='text-gray-100 font-semibold text-center mb-3'>Continue to top up using PayPal</h1> */}
                <button className='bg-[#C8F73A] h-16 w-full rounded-xl'>
                    <Link to='/successful'>
                        Submit
                    </Link>
                </button>
            </div>
        </div>
  )
}

export default ConfirmPayment