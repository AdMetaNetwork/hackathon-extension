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

  useEffect(() => {
    browser.storage.local.get(['first_install']).then(({ first_install }) => {
      setFirstInstall(!!!first_install)
    });
  })

  return (
    <div className='w-body-w'>
      <Header />
      {/* <Protocol /> */}
      {/* <Claim /> */}
      {/* <Guide /> */}
      <Dashboard />
    </div>
  )
}

ReactDOM.render(<Popup />, document.getElementById('popup'));