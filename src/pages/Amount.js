import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout';
import ThirdWebConnect from '../components/ThirdWebConnect';
import FooterButton from '../components/FooterButton';

const availableTokens = [
    {
        name: "USDC",
        symbol: "USDC",
        icon: "tokens/usdc.svg"
    },
    {
        name: "Tether",
        symbol: "USDT",
        icon: "tokens/usdt.svg"
    },
    {
        name: "Dai",
        symbol: "DAI",
        icon: "tokens/dai.svg"
    },

];

export default function Amount() {
    const navigate = useNavigate();

    const handleNext = () => {
        
    };

    return (
        <div>
            <Layout>
                <div
                    className='w-full h-fit text-center mt-4'
                >
                    <ThirdWebConnect />
                </div>
                <div
                    className="w-full px-8 pt-24 space-y-2"
                >
                    <div>
                        <div
                            className='text-white font-semibold'
                        >
                            Enter amount
                        </div>
                    </div>
                    <div>
                        <input
                            placeholder='100'
                            type='number'
                            className='bg-transparent border-none outline-none text-[#7cf31b] text-3xl w-full'
                        />
                        <select>
                            {availableTokens.map((token) => {
                                <div>
                                    
                                </div>
                            })}
                        </select>
                    </div>
                </div>
                <div
                    className='w-full h-fit text-center fixed bottom-0'
                >
                    <FooterButton
                        label="Next"
                        onClick={handleNext}
                    />
                </div>
            </Layout>
        </div>
    )
}  