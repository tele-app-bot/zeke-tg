import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout';
import ThirdWebConnect from '../components/ThirdWebConnect';
import FooterButton from '../components/FooterButton';
import { useActiveAccount } from 'thirdweb/react';


export default function Receiver() {
    const [receiver, setReceiver] = useState("");

    const activeAccount = useActiveAccount();
    const handleConnectedWallet = () => setReceiver(activeAccount?.address);

    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/amount");
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
                            Enter the receivers wallet address
                        </div>
                    </div>
                    <div>
                        <input
                            value={receiver}
                            onChange={(event) => setReceiver(event.currentTarget.value)}
                            placeholder='0x012..abcd'
                            className='w-full bg-transparent border-none outline-none text-[#7cf31b] text-2xl overflow-ellipsis'
                        />
                    </div>
                    <div>
                        <div
                            className='text-[#7cf31b8e]'
                            onClick={handleConnectedWallet}
                        >
                            Send to connected wallet
                        </div>
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