"use client";
import { useEffect } from "react";
import { useAccount, useSwitchNetwork } from "wagmi";
import { useRouter } from "next/navigation";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Login() {
  const router = useRouter();

  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      router.push(`/dashboard/${address}`);
    }
  }, [isConnected, router]);

  return (
    <div className="flex flex-col justify-center space-y-8 h-screen items-center text-white">
      <div className=" flex flex-col justify-center relative">
        <div className="container flex flex-col items-center py-3 gap-y-2 space-y-4">
          <ConnectButton accountStatus="address" chainStatus="name" />
        </div>
      </div>
    </div>
  );
}
