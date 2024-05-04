import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Layout from '../components/Layout';
import ThirdWebConnect from '../components/ThirdWebConnect';
import FooterButton from '../components/FooterButton';
import { cn } from "../utils";
import { useActiveAccount, useContractEvents, useSendTransaction } from 'thirdweb/react';
import { createThirdwebClient, getContract, prepareContractCall, sendTransaction } from 'thirdweb';
import { baseSepolia } from 'thirdweb/chains';

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
        current: "Waiting for your payment",
        done: "Payment received"
    },
    {
        upcoming: "Fulfill order",
        current: "Fulfiling your order",
        done: "Order fulfiled, you're all done!"
    }
];

const client = createThirdwebClient({
    clientId: "a02abdc106da3c1467ba518489b891dc",
});

const rampContract = getContract({
    client: client,
    chain: baseSepolia,
    address: "0xcc6F072eC6ED45Dbdb722728d0905A0930F63889"
});

export default function Checkout() {
    const [searchParams] = useSearchParams();
    const paypal = searchParams.get("paypal");
    const receiver = searchParams.get("receiver");
    const amount = searchParams.get("amount");

    const navigate = useNavigate();

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
            textStyle: "text-[#ABEF09] text-lg",
            dotStyle: "bg-[#ABEF09] w-6 h-6"
        };
    };

    const activeAccount = useActiveAccount();

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    const handleSubmit = async () => {
        setProgressIndex(0);

        await sleep(1000);

        setProgressIndex(1);

        await sleep(1000);

        setProgressIndex(2);

        await sleep(1000);

        setProgressIndex(3);

        await sleep(1000);

        setProgressIndex(4);

        await sleep(1000);

        navigate("/success?receiver=" + receiver + "&amount=" + amount);

        /*
        const addOrderTxn = prepareContractCall({
            contract: rampContract,
            method: "function addOrder(address _onramper, address _token, uint256 _amount, int256 _minFiatRate, uint64 _dstChainSelector)",
            params: [
                "0x69051293E342942E7bA168cE9522aBBC7a259A63",
                "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
                100,
                10 ** 8,
                10344971235874465080
            ],
            value: 0
        })
        await sendTransaction({
            account: activeAccount,
            transaction: addOrderTxn
        });

        setProgressIndex(progressIndex + 1);
        */

        // 2. Listen for order commitment

        // 3. Wait for paypal

        // 4. Listen for order fulfillment
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
                                className='text-[#ABEF09] text-xl'
                            >
                                {paypal}
                            </div>
                        </div>
                        <div>
                            <div
                                className='text-white'
                            >
                                Receiver
                            </div>
                            <div
                                className='text-[#ABEF09] text-xl'
                            >
                                {receiver.slice(0, 6) + "..." + receiver.slice(38)}
                            </div>
                        </div>
                        <div>
                            <div
                                className='text-white'
                            >
                                Amount
                            </div>
                            <div
                                className='text-[#ABEF09] text-xl'
                            >
                                {amount + " USDC"}
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
                        label={progressIndex < 0 ? "Submit" : "Order in progress"}
                        onClick={handleSubmit}
                        disabled={progressIndex >= 0}
                    />
                </div>
            </Layout>
        </div>
    )
}  