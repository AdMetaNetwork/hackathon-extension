import { FC } from "react";
import BaseButton from "../ui/base-button";

const Protocol: FC = () => {
  return (
    <div className="w-full pl-4 pr-4">
      <div className="text-white text-lg font-thin italic mb-3">Welcome, we will collect private access data limited to
        whitelisted domains in order to analyze it, recommend
        you precise ads, and make you rewarded.</div>
      <div className="mb-8">
        <div className="text-white text-lg font-light italic mb-1">The domain whitelist:</div>
        <ul className="list-inside">
          <li className="text-white text-base font-thin italic">xxxx.xx.com</li>
          <li className="text-white text-base font-thin italic">xxxx.xx.com</li>
        </ul>
      </div>
      <div className="flex justify-center mb-10">
        <BaseButton 
          label="Agree"
          handleClick={() => {}}
        />
      </div>
    </div>
  )
}

export default Protocol;