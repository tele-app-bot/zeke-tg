import React, { useEffect, useState } from 'react';
import {
    ConnectButton,
    useActiveAccount,
} from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import {
    walletConnect,
    inAppWallet,
} from "thirdweb/wallets";

const client = createThirdwebClient({
    clientId: "a02abdc106da3c1467ba518489b891dc",
});

const wallets = [
    walletConnect(),
    inAppWallet({
        auth: {
            options: ["email", "phone"],
        },
    }),
];

export default function ThirdWebConnect({ onConnect }) {
    return (
        <ConnectButton
            client={client}
            chain={baseSepolia}
            theme={"dark"}
            connectModal={{
                size: "compact",
                titleIcon: "",
                showThirdwebBranding: false,
            }}
            wallets={wallets}
            accountAbstraction={{
                chain: baseSepolia,
                factoryAddress: "0xb26BE4505119107f9Bb6D4948360E4B7Dea50e29",
                gasless: true,
            }}
            connectButton={{
                label: "Connect",
                style: {
                    backgroundColor: "#ABEF09",
                    width: "90%",
                    height: "3rem",
                    borderRadius: "0.5rem",
                    fontSize: "1.125rem",
                }
            }}
            autoConnect={true}
            onConnect={onConnect}
        />
    );
}