import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function EnterAmount() {
  return (
    <div className='bg-[#000000] relative h-screen'>
        <div className='h-[25%] flex justify-center items-center'>
            <img src={logo} className='w-28 aspect-square rounded-2xl'/>
        </div>
        <div className='p-5 m-5'>
            <div>
                <h1 className='text-white text-xl font-semibold'>Enter Amount</h1>
            </div>
            <div className='flex items-center'>
                <input placeholder='420.69' className='bg-transparent w-1/2 text-white text-[52px] outline-none mr-2'/>
                <h1 className='text-[#848484] text-[52px] mr-1'>USD</h1>
            </div>
        </div>
        <div className='absolute flex bottom-0 w-full p-5'>
            <button className='bg-[#C8F73A] h-16 w-full rounded-xl'>
                <Link to='/review'>
                    Review
                </Link>
            </button>
        </div>
    </div>
  )
}

export default EnterAmount