import React from 'react'

export default function header(props) {
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
    <div>{displaytext(props.text)}</div>
  )
}
