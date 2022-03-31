import React,{Component} from 'react';
import Hr from './common/hr';
import Header from './header/header';

class contactMe extends Component {
  render(){
    return (
      <div>
        <Header text={this.props.text} />
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
            <p4>Raspberries, blueberries, and strawberries on top of a creamy filling served in a crispy tart.</p4>
          </details>
      </div>
    );
  }
}
  

export default contactMe


