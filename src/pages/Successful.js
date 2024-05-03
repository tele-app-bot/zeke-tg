import React from 'react'
import logo from '../assets/logo.png'
import tick from '../assets/tick.png'


function Successful() {
  return (
    <div className='bg-[#000000] relative h-screen'>
        <div className='h-[25%] flex justify-center items-center'>
            <img src={logo} className='w-28 aspect-square rounded-2xl'/>
        </div>
        <div className='p-5 m-5'>
            <div className='mt-5 flex justify-center'>
                <img src={tick} alt="" />
            </div>


            <div className='mt-5'>
                <h1 className='text-[#6e6e6e] text-center text-xl font-semibold'>Top Up Successful!</h1>
            </div>
        </div>
    </div>
  )
}

export default Successful