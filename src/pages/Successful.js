import React from 'react'
import logo from '../assets/logo.png'
import tick from '../assets/tick.png'


function Successful() {
  return (
    <div className='bg-[#C8F73A] relative h-screen'>

    <div className='bg-[#000000] w-full rounded-t-[32px] bottom-0 absolute h-[95%]'>
        <div className='h-[25%] flex justify-center items-center'>
            {/* <img src={logo} className='w-28 aspect-square rounded-2xl'/> */}
            <h1 className='text-[54px] text-[#C8F73A] font-bold'>ZEKE</h1>

        </div>
        <div className='p-5 m-5'>
            {/* <div className='mt-5 flex justify-center'>
                <img src={tick} alt="" />
            </div> */}


            <div className='mt-5'>
                <h1 className='text-[#fff] text-center text-sm font-semibold'>Top Up Successful!</h1>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Successful