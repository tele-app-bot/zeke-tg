import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Layout from '../components/Layout';
import ThirdWebConnect from '../components/ThirdWebConnect';
import FooterButton from '../components/FooterButton';
import { cn } from "../utils";

const amountTags = [
    100,
    250,
    500
];

export default function Amount() {
    const [searchParams] = useSearchParams();
    const paypal = searchParams.get("paypal");
    const receiver = searchParams.get("receiver");

    const [amount, setAmount] = useState(0);
    const [selectedTag, setSelectedTag] = useState(-1);

    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/checkout?paypal=" + paypal + "&receiver=" + receiver + "&amount=" + amount.toString());
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
                    <div
                        className="flex flex-row"
                    >
                        <div>
                            <input
                                value={amount}
                                onChange={(e)=>{
                                    setAmount(e.currentTarget.value);
                                    setSelectedTag(-1);
                                }}
                                type='number'
                                className='bg-transparent border-none outline-none text-[#ABEF09] text-3xl w-full'
                            />
                        </div>
                        <div
                            className="text-white text-center text-3xl"
                        >
                            USDC
                        </div>
                    </div>
                    <div
                        className="flex flex-row space-x-2"
                    >
                        {amountTags.map((value, i) => (
                            <div
                                key={i}
                                className={cn(
                                    'px-2 w-fit h-fit border rounded-full border-[#ABEF09] text-center',
                                    i === selectedTag ? "bg-[#ABEF09] text-black" : "text-[#ABEF09]"
                                )}
                                onClick={()=>{
                                    setAmount(value);
                                    setSelectedTag(i);
                                }}                            
                            >
                                {value}
                            </div>
                        ))}
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