import { FC } from "react";
import Jazzicon from 'react-jazzicon'
import BaseTag from "../ui/base-tag";

const NFT: FC = () => {

  return (
    <div className="w-full pl-4 pr-4 mb-10">
      <div className="text-white text-lg font-light italic mb-2">Your soul NFT is:</div>
      <div className="flex justify-start items-center">
        <Jazzicon diameter={40} seed={Math.round(Math.random() * 10000000)} />
        <div className="ml-4 flex justify-start items-center">
          <div className="ml-2">
            <BaseTag
              label="SWAP"
            />
          </div>
          <div className="ml-2">
            <BaseTag
              label="DeFi"
            />
          </div>
          <div className="ml-2">
            <BaseTag
              label="GameFi"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFT;