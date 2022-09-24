import React, { useState } from "react";
import "./calculate.scss";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const TemperatureInput = (props) => {
  const temperature = props.temperature;
  const scale = props.scale;

  function handleChange(e) {
    props.onTemperatureChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input type="text" value={temperature} onChange={handleChange} />
    </fieldset>
  );
};

export default TemperatureInput;
