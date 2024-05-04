import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout';
import ThirdWebConnect from '../components/ThirdWebConnect';
import FooterButton from '../components/FooterButton';


export default function PayPal() {
    const [paypal, setPayPal] = useState("");

    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/receiver?paypal=" + paypal);
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
                            Enter your PayPal email
                        </div>
                    </div>
                    <div>
                        <input
                            value={paypal}
                            onChange={(e) => setPayPal(e.currentTarget.value)}
                            placeholder='yourname@paypal.com'
                            type='email'
                            className='w-full bg-transparent border-none outline-none text-[#7cf31b] text-2xl'
                        />
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