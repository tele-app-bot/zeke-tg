import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout';
import ThirdWebConnect from '../components/ThirdWebConnect';


export default function Connect() {
    const navigate = useNavigate();

    const handleConnect = async (wallet) => {
        navigate("/paypal");
    };

    return (
        <div>
            <Layout
                title={true}
            >
                <div
                    className='w-full h-fit text-center fixed bottom-5'
                >
                    <ThirdWebConnect
                        onConnect={handleConnect}
                    />
                </div>
            </Layout>
        </div>
    )
}  