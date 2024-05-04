import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function CheckoutOld() {
    const [progress, setProgress] = useState(-1);

    const progressText = (index) => {
        if (progress < index) {
            return "text-slate-800";
        }

        if (progress == index) {
            return "text-slate-300";
        }

        return "text-green-600";
    };

    const progressDot = (index) => {
        if (progress < index) {
            return "bg-slate-900";
        }

        if (progress == index) {
            return "bg-slate-200 animate-pulse";
        }

        return "bg-green-600";
    };

    return (
        <div className='bg-[#C8F73A] relative h-screen'>
            <div className='bg-[#000000] w-full rounded-t-[32px] bottom-0 absolute h-[95%]'>
                <div className='flex justify-center items-center mb-8'>
                    {/* <img src={logo} className='w-28 aspect-square rounded-2xl'/> */}
                    <h1 className='text-[54px] text-[#C8F73A] font-bold'>ZEKE</h1>
                </div>
                <div className=''>
                    <div className='text-center' >
                        <h1 className='text-[#6e6e6e] text-sm font-semibold'>PayPal</h1>
                        <h1 className='text-[#C8F73A] text-sm font-semibold'>useremail@paypal.com</h1>
                    </div>
                    <div className='mt-5 text-center'>
                        <h1 className='text-[#6e6e6e] text-sm font-semibold'>Receiver</h1>
                        <h1 className='text-[#C8F73A] text-sm font-semibold'>0x7182782737383787687678</h1>
                    </div>

                    <div className='mt-5 text-center'>
                        <h1 className='text-[#6e6e6e] text-sm font-semibold'>Amount</h1>
                        <h1 className='text-[#C8F73A] text-sm font-semibold'>USDT 420.69</h1>
                    </div>
                </div>
                <div className='flex flex-col text-center space-y-6 w-fit mx-auto mt-10'>
                    <div className='flex flex-row space-x-2'>
                        <div className={'w-6 h-6 bg-slate-900 rounded-full ' + progressDot(0)} />
                        <h1 className={'font-semibold ' + progressText(0)}>Submit order</h1>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <div className={'w-6 h-6 bg-slate-900 rounded-full ' + progressDot(1)} />
                        <h1 className={'font-semibold ' + progressText(1)}>Liquidity found</h1>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <div className={'w-6 h-6 bg-slate-900 rounded-full ' + progressDot(2)} />
                        <h1 className={'font-semibold ' + progressText(2)}>Payment received</h1>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <div className={'w-6 h-6 bg-slate-900 rounded-full ' + progressDot(3)} />
                        <h1 className={'font-semibold ' + progressText(3)}>Order fulfilled</h1>
                    </div>
                </div>
                <div className='absolute  bottom-5 justify-center flex w-full p-5'>
                    {/* <h1 className='text-gray-100 font-semibold text-center mb-3'>Continue to top up using PayPal</h1> */}

                    <button className='bg-[#C8F73A] h-12 w-[80vw] rounded-xl' onClick={()=>setProgress(progress + 1)}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
