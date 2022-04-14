import React from 'react';
import Hr from '../common/hr';
import { Header } from '../header/header';

const CounterApp = () => {
    const center = {
        textAlign: 'center',
      };
  return (
    <div>
        <hr/>
        <div style={center}>
        <Header text="Counter-App" color="white"/>
        </div>
        <Hr/>
    </div>
  )
}

export default CounterApp