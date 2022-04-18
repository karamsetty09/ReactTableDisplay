import React from 'react'
import Hr from '../common/hr';
import { Header } from '../header/header';
import './settings.scss';


function Settings() {
  const center = {
    textAlign: 'center',
  };
  return (
    <div>
      <hr/>
      <div>
        <Header text="Settings" color="white"/>
        <Hr/>
        <div className='wrapper'>
          <div className='ColorBox'>
            Application Color
            <input></input>
          </div>
          <div className='FontBox'>
            Application font
          </div> 
          <div className='LogoBox'>
            Application Logo
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;
