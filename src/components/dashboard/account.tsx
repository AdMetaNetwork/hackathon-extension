import { FC, useMemo } from "react";
import Jazzicon from 'react-jazzicon'
import * as U from '../../util'

interface Prop {
  address: string
}

const Account: FC<Prop> = ({ address }) => {

  const generateAvator = useMemo(() => {
    return address && <Jazzicon diameter={40} seed={Math.round(Math.random() * 10000000)} />
  }, [address])

  return (
    <div className="w-full pl-4 pr-4 flex justify-start items-center mb-10">
      {generateAvator}
      <div className="ml-4">
        <div className="text-white text-lg font-light italic">Account 1</div>
        <div className="text-white text-lg font-thin italic">{U.Helper.formatAddress(address)}</div>
      </div>
    </div>
  )
}

export default Account;