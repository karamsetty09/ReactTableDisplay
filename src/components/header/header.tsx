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
    function styling(text: string, index: number) {
      return <div style={letterStyle} key={index}>{text}</div>
    }    
  return (
    <Fragment>
      {props.text.split('').map((character, index) => styling(character, index))}
    </Fragment>
  )
}
