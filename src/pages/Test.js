import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Layout from '../components/Layout';

export default function Test() {
    return (
        <div>
            <Layout>
                <div
                    className='text-white'
                >
                    Hi
                </div>
            </Layout>
        </div>
    )
}
