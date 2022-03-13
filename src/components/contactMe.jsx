import React,{Component} from 'react';
import Hr from './common/hr'

class contactMe extends Component {
  render(){
    const letterStyle ={
      padding: 10,
      margin: 10,
      backgroundColor: "#ffde00",
      color:"#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: 32,
      textAlign: "center"
    }
    function styling(text) {
      return <div style={letterStyle}>{text}</div>
    } 
    function displaytext(text) {
      var finaltext = [];
      for (var i=0; i < text.length; i++){
        var presenttext = text[i];
        finaltext.push(styling(presenttext));
      }
      return finaltext
    }
    return (
      <div>
        {displaytext(this.props.text)}
        <Hr/>
      </div>
    );
  }
}
  

export default contactMe


