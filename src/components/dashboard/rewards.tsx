import { FC } from "react";
import BaseButton from "../ui/base-button";

const Rewards: FC = () => {

  return (
    <div className="w-full pl-4 pr-4 mb-10">
      <div className="text-white text-lg font-light italic mb-2">Your rewards:</div>
      <div className="flex justify-between items-center mb-10">
        <div className="w-5/12 border-white border rounded flex flex-col justify-center items-center p-10 box-border">
          <div className="text-white text-lg font-light italic">Total</div>
          <div className="flex justify-center items-center my-2">
            <div className="text-white text-xl font-medium italic mr-2">3000</div>
            <div className="text-theme-bg-color text-base font-medium italic">AMD</div>
          </div>
          <BaseButton
            label="Record"
            handleClick={() => { }}
          />
        </div>
        <div className="w-5/12 border-white border rounded flex flex-col justify-center items-center p-10 box-border">
          <div className="text-white text-lg font-light italic">Uncliam</div>
          <div className="flex justify-center items-center my-2">
            <div className="text-white text-xl font-medium italic mr-2">70</div>
            <div className="text-theme-bg-color text-base font-medium italic">AMD</div>
          </div>
          <BaseButton
            label="Claim"
            handleClick={() => { }}
          />
        </div>
      </div>
      <div className="text-white text-lg font-light italic">Your tasks:</div>
      <ul className="list-inside mb-10">
        <li className="text-white text-base font-thin italic">1. xxxx</li>
        <li className="text-white text-base font-thin italic">2. xxxx</li>
      </ul>
    </div>
  )
}

export default Rewards;