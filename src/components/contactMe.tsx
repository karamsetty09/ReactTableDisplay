import React,{Component, Fragment} from 'react';
import Hr from './common/hr';
import {Header} from './header/header';


export default function contactMe() {
    return (
      <div>
        <Fragment>
        <Header text="CONTACT-ME"/>
        <Hr/>
        <address><em>
          8 Woodhill Street<br/>
          Fairy Meadow - 2519<br/>
          NSW - Australia<br/>
          Moblile No:<a href="tel: +61 479155146">0479155146</a><br/>
          <a href="mailto:venkatasandeepkumarkaramsetty@gmail.com">venkatasandeepkumarkaramsetty@gmail.com</a>
          </em></address>
          <details>
            <h4>Mixed Berry Tart.</h4>
            <h6>Raspberries, blueberries, and strawberries on top of a creamy filling served in a crispy tart.</h6>
          </details>
        </Fragment>
      </div>
    );
}


