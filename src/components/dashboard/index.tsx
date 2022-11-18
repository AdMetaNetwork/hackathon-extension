import { FC } from "react";
import Account from "./account";
import NFT from "./nft";
import Rewards from "./rewards";

const Dashboard: FC = () => {

  return (
    <div className="w-full pl-4 pr-4">
      <Account />
      <NFT />
      <Rewards />
    </div>
  )
}

export default Dashboard;