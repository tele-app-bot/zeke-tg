import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout';
import ThirdWebConnect from '../components/ThirdWebConnect';
import FooterButton from '../components/FooterButton';
import { cn } from "../utils";
import { useActiveAccount, useActiveWalletChain } from 'thirdweb/react';
import { getContract, prepareContractCall, sendTransaction } from 'thirdweb';

const progressLabels = [
    {
        upcoming: "Submit order",
        current: "Submitting order",
        done: "Order submitted"
    },
    {
        upcoming: "Find liquidity",
        current: "Finding liquidity",
        done: "Liquidity found"
    },
    {
        upcoming: "Send fiat",
        current: "Waiting for fiat",
        done: "Fiat received"
    },
    {
        upcoming: "Fulfill order",
        current: "Fulfiling your order",
        done: "Order fulfiled, you're all done!"
    }
];

export default function Checkout() {
    const [progressIndex, setProgressIndex] = useState(-1);

    const progressStyle = (progress, index) => {
        if (progressIndex < index) {
            return {
                label: progress.upcoming,
                textStyle: "text-slate-800 text-lg",
                dotStyle: "bg-slate-900 w-6 h-6"
            };
        }

        if (progressIndex == index) {
            return {
                label: progress.current,
                textStyle: "text-slate-300 text-xl",
                dotStyle: "bg-slate-200 animate-pulse w-8 h-8"
            };
        }

        return {
            label: progress.done,
            textStyle: "text-[#7cf31b] text-lg",
            dotStyle: "bg-[#7cf31b] w-6 h-6"
        };
    };

    const rampContract = getContract({
        client: "a02abdc106da3c1467ba518489b891dc",
        chain: useActiveWalletChain(),
        address: "0xcc6F072eC6ED45Dbdb722728d0905A0930F63889"
    });

    const handleSubmit = async () => {
        setProgressIndex(progressIndex + 1);

        const addOrderTxn = prepareContractCall({
            rampContract,
            method: "function addOrder(address _onramper, address _token, uint256 _amount, int256 _minFiatRate, uint64 _dstChainSelector)",
            params: [
                "receiver",
                "token",
                100,
                1,
                10344971235874465080
            ],
            value: 0
        })
        const addOrderHash = await sendTransaction(addOrderTxn);

        setProgressIndex(progressIndex + 1);
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
                    className='w-full px-8 pt-6 space-y-12'
                >
                    <div
                        className="space-y-2"
                    >
                        <div
                            className='text-gray-400 text-2xl'
                        >
                            Summary
                        </div>
                        <div
                            className='w-full h-[1px] bg-gray-400'
                        />
                        <div>
                            <div
                                className='text-white'
                            >
                                PayPal
                            </div>
                            <div
                                className='text-[#7cf31b] text-xl'
                            >
                                youruser@paypal.com
                            </div>
                        </div>
                        <div>
                            <div
                                className='text-white'
                            >
                                Receiver
                            </div>
                            <div
                                className='text-[#7cf31b] text-xl'
                            >
                                0x6905...9A63
                            </div>
                        </div>
                        <div>
                            <div
                                className='text-white'
                            >
                                Amount
                            </div>
                            <div
                                className='text-[#7cf31b] text-xl'
                            >
                                250 USDC
                            </div>
                        </div>
                    </div>
                    <div
                        className='space-y-8'
                    >
                        {progressLabels.map((progress, i) => {
                            const { label, textStyle, dotStyle } = progressStyle(progress, i);

                            return (
                                <div
                                    key={i}
                                    className='flex flex-row space-x-2'
                                >
                                    <div
                                        className={cn(
                                            'rounded-full',
                                            dotStyle
                                        )}
                                    />
                                    <div
                                        className={cn(
                                            '',
                                            textStyle
                                        )}
                                    >
                                        {label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    className='w-full h-fit text-center fixed bottom-0'
                >
                    <FooterButton
                        label="Submit"
                        onClick={()=>setProgressIndex(progressIndex + 1)}
                    />
                </div>
            </Layout>
        </div>
    )
}  