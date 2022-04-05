import React from 'react'
import CSS from 'csstype';
import {Fragment} from 'react';

interface Props {
  text: string
  color: string
}

export function Header(props: Props) {
    const letterStyle: CSS.Properties = {
      padding: "1rem",
      margin: "1rem",
      backgroundColor: "#008080",
      color: `${props.color}`,
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: "1.5rem",
      textAlign: "center",
    }
      function styling(text: string) {
        return <div style={letterStyle}>{text}</div>
      } 
      function displaytext(text: string) {
        var finaltext = [];
        for (var i=0; i < text.length; i++){
          var presenttext = text[i];
          finaltext.push(styling(presenttext));
        }
        return finaltext
      }
  
  return (
    <Fragment>
      {displaytext(props.text)}
    </Fragment>
  )
}
