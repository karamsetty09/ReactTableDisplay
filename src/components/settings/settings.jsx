import React, {useContext} from 'react'
import Hr from '../common/hr';
import { Header } from '../header/header';
import './settings.scss';

import AppContext from '../contextAPI/app-context';

function Settings() {
  const center = {
    textAlign: 'center',
  };

  // accessing from context
  const {theme, setTheme} = useContext(AppContext);

  return (
    <div>
      <hr/>
      <div>
        <Header text="Settings" color="white"/>
        <Hr/>
        <div className='wrapper'>
          <div className='ColorBox'>
            <div style={{background: theme ? "green":"red"}}>
            Application Color
            <div>
            {
            theme ? 
            <button onClick={()=>setTheme(false)}>Logout</button> : 
            <button onClick={()=>setTheme(true)}>Login</button>
            }
            </div>
            </div>
            
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
