import { FC } from "react";
import * as U from '../../util'
import BaseButton from "../ui/base-button";

const Guide: FC = () => {
  return (
    <div className="w-full pl-4 pr-4">
      <div className="text-white text-base font-thin italic mb-10">First you need to create your own wallet, here we recommend the following wallet tools.</div>
      <div
        className="flex justify-center items-center mb-10"
      >
        <img
          src={U.POLKADOT_ICON}
          alt=""
          className="w-10 h-10 mr-4"
        />
        <BaseButton
          label="Polkadot extension"
          handleClick={() => U.Help.goWeb('https://polkadot.js.org/extension/')}
        />
      </div>
      <div className="text-white text-lg font-light italic">Some guild for you:</div>
      <ul className="list-inside mb-10">
        <li
          className="text-white text-base font-thin italic cursor-pointer hover:underline"
          onClick={() => U.Help.goWeb('https://ethereum.org/')}
        >1. The most popular chain is the EVM</li>
        <li
          className="text-white text-base font-thin italic cursor-pointer hover:underline"
          onClick={() => U.Help.goWeb('https://www.binance.com/')}
        >2. The most popular exchanges is the Binance</li>
        <li
          className="text-white text-base font-thin italic cursor-pointer hover:underline"
          onClick={() => U.Help.goWeb('https://uniswap.org/')}
        >3. The most popular swap is the Uniswap</li>
        <li
          className="text-white text-base font-thin italic cursor-pointer hover:underline"
          onClick={() => U.Help.goWeb('https://litentry.com/')}
        >4. The most popular DID is the Litentry</li>
        <li
          className="text-white text-base font-thin italic cursor-pointer hover:underline"
          onClick={() => U.Help.goWeb('https://opensea.io/')}
        >5. The most popular NFT markets is the Opensea</li>
      </ul>
    </div>
  )
}

export default Guide;