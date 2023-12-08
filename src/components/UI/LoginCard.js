"use client"
import { useState } from "react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { useRouter } from "next/navigation";

import Link from "next/link";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import axios from "axios";

export default function Login(props) {

  const router = useRouter();

  // chain info
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  // router obj
  const selectedTypeStyles =
    "p-4 m-2 text-white text-xl rounded w-full transition duration-500 ease-in-out  ";

  const { address, isConnected } = useAccount();

  const verifyChains = () => {
    if (chain.network !== "maticmum") {
      // switch to mumbai
      switchNetwork?.(80001);
    }
  };

  const handleProceed = async () => {
    // verify if volunteer is on mumbai, if NGO is not on mumbai
    verifyChains();
    // const res = await axios.get(
    //   `/api/authUserOrNGO?network=${chain.network}&address=${address}`
    // );
    //const authStatus = res.data.status;
    if (true) {
      router.push("/dashboard");
    }
    
  };

  return (
    <div className='flex flex-col justify-center space-y-8 items-center text-white'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg bg-black'>
        <div className='px-6 py-4 flex flex-col justify-center relative'>
          <div className='container mb-2 flex flex-col items-center py-3 gap-y-2 space-y-4'>
            <div>
              <span className='font-bold font-heading text-4xl'>Join Us</span>
            </div>
            <div>
              <p className='container font-light font-crimson text-xl text-center '>
                Let&apos;s decentralize the{" "}
                <span className='text-yellow-100 font-semibold italic'>communiti</span>
              </p>
            </div>
           
            <ConnectButton
              accountStatus='address'
              chainStatus='name'
            />

            {address && isConnected && (
              <button
                id='bordered-radio-1'
                onClick={handleProceed}
                className={
                  selectedTypeStyles
                 
                }>
                Proceed{" "}
                {isLoading && pendingChainId === 80001 && " (switching)"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div >
  );
}
