"use client";

import "./globals.css";
import Script from "next/script";

import { LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// <------------- rainbow kit imports ------------->
import "@rainbow-me/rainbowkit/styles.css";
import { scrollSepolia } from "../../extrachains";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  arbitrumGoerli,
  polygonZkEvmTestnet,
  polygonMumbai,
  celo,
  baseGoerli,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import NavBar from "../components/UI/NavBar";

// <-------------  setting up rainbow kit ------------->
const { chains, provider } = configureChains(
  [arbitrumGoerli, polygonZkEvmTestnet, polygonMumbai, scrollSepolia, celo],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  connectors,
  provider,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            coolMode
            chains={chains}
            theme={darkTheme({
              accentColor: "#f7a34f",
              borderRadius: "large",
              fontStack: "system",
            })}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <NavBar />
              <section className="scroll-smooth " id="intro">
                <div className="hero flex-row relative flex items-center justify-center h-screen overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-screen">
                    {children}
                  </div>
                </div>
              </section>
            </LocalizationProvider>
          </RainbowKitProvider>
        </WagmiConfig>

        <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></Script>
      </body>
    </html>
  );
}
