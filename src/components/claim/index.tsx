import { FC } from "react";
import BaseButton from "../ui/base-button";

interface Prop {
  handClaim: () => void
}

const Claim: FC<Prop> = ({ handClaim }) => {
  return (
    <div className="w-full pl-4 pr-4">
      <div className="text-white text-base font-thin italic mb-10">Thank you for installing and using our plugin, you will be rewarded.</div>
      {/* <div className="text-white text-base font-thin italic">Before claiming rewards, we need to verify that you are not a robot.</div> */}
      <div className="mb-10 flex justify-center">
        <BaseButton
          label="Claim 20 ADM"
          handleClick={handClaim}
        />
      </div>
    </div>
  )
}

export default Claim;