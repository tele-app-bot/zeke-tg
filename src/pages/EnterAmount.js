import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function EnterAmount() {
    const [fSize, setSize] = useState(38)
    const [amount, setAmount] = useState('')

    const fontChange = (e) => {
        console.log(e.target.value.length)
        setAmount(e.target.value)
        if (e.target.value.length > 6) {
            setSize(32)
        }
        if (e.target.value.length > 8) {
            setSize(24)
        }
        if (e.target.value.length > 12) {
            setSize(16)
        }
        if (e.target.value.length < 7) {
            setSize(32)
        }
    }
    return (
        <div className='bg-[#C8F73A] relative h-screen'>

            <div className='bg-[#000000] w-full rounded-t-[32px] bottom-0 absolute h-[95%]'>
                <div className='h-[25%] flex justify-center items-center'>
                    {/* <img src={logo} className='w-28 aspect-square rounded-2xl'/> */}
                    <h1 className='text-[54px] text-[#C8F73A] font-bold'>ZEKE</h1>

                </div>
                <div className='p-5 m-5'>
                    <div>
                        <h1 className='text-white text-sm font-semibold'>Enter Amount</h1>
                    </div>
                    <div className='flex items-center'>
                        <input placeholder='420.69' className='bg-transparent placeholder-[#c8f73a46] w-[50%] text-right h-14 text-[#C8F73A] outline-none mr-1' value={amount} onChange={(e) => fontChange(e)} style={{ fontSize: `${fSize}px` }} />
                        <h1 className='text-[#c8f73a46] mr-1' style={{ fontSize: `${fSize}px` }}>USD</h1>
                    </div>
                </div>
                <div className='absolute flex bottom-10  justify-center w-full p-5'>

                    <Link to='/review'>
                        <button className='bg-[#C8F73A] h-12 w-[80vw] rounded-xl'>
                            Review
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EnterAmount