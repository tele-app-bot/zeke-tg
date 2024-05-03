import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useActiveAccount } from 'thirdweb/react'

function WalletAddress() {
	const [receiver, setReceiver] = useState("");

	const activeAccount = useActiveAccount();

	const handleReceiverConnected = () => setReceiver(activeAccount?.address);

	return (
		<div className='bg-[#000000] relative h-screen'>
			<div className='h-[25%] flex justify-center items-center'>
				<img src={logo} className='w-28 aspect-square rounded-2xl' />
			</div>
			<div className='p-5 m-5'>
				<div>
					<h1 className='text-white text-xl font-semibold'>Enter Wallet Address</h1>
				</div>
				<input value={receiver} onChange={(e) => { setReceiver(e.currentTarget.value) }} placeholder="0x0" className='bg-transparent text-white text-3xl outline-none mt-5' />
				<h1 className='text-blue-500 font-semibold mt-3' onClick={handleReceiverConnected}>Send to connected wallet</h1>
			</div>
			<div className='absolute flex bottom-0 w-full p-5'>
				<button className='bg-[#C8F73A] h-16 w-full rounded-xl'>
					<Link to='/paypalemail'>
						Continue
					</Link>
				</button>
			</div>
		</div>
	)
}

export default WalletAddress