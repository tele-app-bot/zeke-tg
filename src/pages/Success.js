import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Layout from '../components/Layout';
import ThirdWebConnect from '../components/ThirdWebConnect';
import FooterButton from '../components/FooterButton';
import Confetti from 'react-confetti';


export default function Success() {
    const [searchParams] = useSearchParams();

    const receiver = searchParams.get("receiver");
    const amount = searchParams.get("amount");

    return (
        <div>
            <Confetti
                numberOfPieces={200}
                recycle={false}
            />
            <Layout>
                <div
                    className='w-full h-fit text-center mt-4'
                >
                    <ThirdWebConnect />
                </div>
                <div
                    className="w-full px-8 pt-24 space-y-8 text-center"
                >
                    <div
                        className='text-[#ABEF09] text-4xl'
                    >
                        Order successful!
                    </div>
                    <div>
                        <div
                            className='text-gray-400'
                        >
                            {receiver.slice(0, 6) + "..." + receiver.slice(38) + " received"}
                        </div>
                        <div
                            className='text-white text-3xl'
                        >
                            {amount + " USDC"}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}  