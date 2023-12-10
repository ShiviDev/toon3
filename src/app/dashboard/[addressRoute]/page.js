"use client";

import NavBar from "../../../components/UI/NavBar";
import { useAccount, useNetwork, useContractEvent } from "wagmi";
import "../../globals.css";
import { useRouter } from "next/navigation";
import { useContractWrite, useContractRead, parseEther } from "wagmi";
import BookCardProfile from "@/components/UI/BookCardProfile";
import { useEffect, useState } from "react";
import abiJSON from "../../../../contracts/abi.json";

export default function Home({ params: { addressRoute } }) {
  // const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const [usersWork, setUsersWork] = useState([
    {
      image: "/explore/storycard.png",
      title: "Hangry Maidens",
      description:
        "10 normal men turn into vampires by night that cause them to go on a killing frenzy. But that doesn't deter the 10 hangry women defending the town, who venture out fearlessly...",
      year: 2004,
    },
  ]);
  const [amount, setAmount] = useState(0);

  const {
    data: dataWithdraw,
    isLoading: isLoadingWithdraw,
    isSuccess: isSuccessWithdraw,
    write: writeWithdraw,
  } = useContractWrite({
    address:
      process.env.NEXT_PUBLIC_CELO_CONTRACT_ADDRESS ||
      "0xDD465c41d7E542000f2de8892267A98f5759A186",
    abi: abiJSON,
    functionName: "withdrawDonations",
    chainId: 44787, // celo
  });

  const {
    data: dataDonate,
    isLoading: isLoadingDonate,
    isSuccess: isSuccessDonate,
    write: writeDonate,
  } = useContractWrite({
    address:
      process.env.NEXT_PUBLIC_CELO_CONTRACT_ADDRESS ||
      "0xDD465c41d7E542000f2de8892267A98f5759A186",
    abi: abiJSON,
    functionName: "dontateToCreator",
    chainId: 44787, // celo
  });

  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
  } = useContractRead({
    address:
      process.env.NEXT_PUBLIC_CELO_CONTRACT_ADDRESS ||
      "0xDD465c41d7E542000f2de8892267A98f5759A186",
    abi: abiJSON,
    functionName: "getUserDetails",
    args: [addressRoute],
    chainId: 44787, // celo
  });

  console.log("dataUser", dataUser);
  console.log("user address", addressRoute);

  useEffect(() => {
    if (dataUser && typeof dataUser != "undefined") setUsersWork(dataUser);
  });

  function getUsersMetadata() {
    // write();
  }

  function handleDonate() {
    writeDonate({ args: [], from: address, value: parseEther("0.01") });
  }

  function handleWithdraw() {
    writeWithdraw({ args: [], from: address, value: parseEther("0.01") });
  }

  if (addressRoute.length === 42)
    return (
      <>
        <NavBar />
        <div className="w-full flex flex-row pt-32 pl-4">
          <div className="flex flex-row justify-center p-4 w-1/2 bg-slate-600 items-center">
            <img
              src="/profilepic.png"
              style={{ height: "300px", width: "300px", borderRadius: "15px" }}
            />
            <div className="flex flex-col text-white ml-4 gap-y-2 space-y-2">
              <p className="text-6xl font-semibold">
                {address
                  ? `${address.substring(0, 5)}...${address.substring(39)}`
                  : "<anon.eth>"}
              </p>
              <p className="text-md font-semibold">
                Donate to your favorite artist on their preferred network
                <p className="text-center mt-4">
                  {(chain && <div>{chain.name}</div>) || <p>{"<network>"} </p>}
                </p>
              </p>
              {addressRoute === address ? (
                <button
                  className="w-full bg-yellow-500 p-4 m-4 rounded-lg h-1/2"
                  onClick={handleWithdraw}
                  disabled={isConnected}
                >
                  Withdraw
                </button>
              ) : (
                <button
                  className="w-full bg-yellow-500 p-4 m-4 rounded-lg h-1/2"
                  onClick={handleDonate}
                  disabled={isConnected}
                >
                  Donate
                </button>
              )}
            </div>
          </div>
          <div className="flex-4 ml-16 first-letter:w-[90%] border-2 border-green-300"></div>
          <div className="flex flex-col text-white ml-8 pl-8 underline">
            <h1 className="text-2xl font-bold block">Your work</h1>
            <div className="flex flex-row flex-wrap p-4 m-4 gap-x-8 space-x-8 gap-y-6 space-y-6 h-full">
              {usersWork &&
                usersWork.map(({ title, description, image, year }) => (
                  <BookCardProfile
                    title={title}
                    description={description}
                    image={image}
                    year={year}
                    key={title}
                  />
                ))}
            </div>
          </div>
        </div>
      </>
    );
  else throw Error("Not a valid address");
}
