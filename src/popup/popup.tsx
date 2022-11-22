import ReactDOM from 'react-dom';
import { FC, useEffect, useState } from "react";
import browser from 'webextension-polyfill'
import Header from '../components/header';
import Protocol from '../components/protocol';
import Claim from '../components/claim';
import Guide from '../components/guide';
import Dashboard from '../components/dashboard';

import './style.css'

const Popup: FC = () => {
  const [isFirstInstall, setFirstInstall] = useState(true)
  const [step, setStep] = useState(0)
  const [address, setAddress] = useState('')

  useEffect(() => {
    browser.storage.local.get(['address', 'isClaim']).then(({ address, isClaim }) => {
      console.log(address, isClaim)
      if (!address) {
        setStep(0)
        return
      }
      setAddress(address || '')
      if (isClaim === 'NO') {
        setStep(1)
      } else {
        setStep(2)
      }
    });
  })

  return (
    <div className='w-body-w'>
      <Header />
      {
        step === 0
        &&
        <Protocol />
      }
      {
        step === 1
        &&
        <Claim
          handClaim={() => {
            browser.storage.local.set({ isClaim: 'YES' })
            setStep(2)
          }}
        />
      }
      {
        step === 2
        &&
        <Dashboard
          address={address}
        />
      }
    </div>
  )
}

ReactDOM.render(<Popup />, document.getElementById('popup'));