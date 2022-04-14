import React from 'react'
import Hr from './common/hr';
import { Header } from './header/header';


function Settings() {
  const center = {
    textAlign: 'center',
  };
  return (
    <div>
      <hr/>
      <div style={center}>
        <Header text="Settings" color="white"/>
      </div>
      <Hr/>
    </div>
  )
}

export default Settings;
