import React from "react";
import { useState } from "react";
import BackBtn from "../../BackBtn";

const Currency = () => {
  let [inputINR, setInputINR] = useState('');
  let [inputUSD, setInputUSD] = useState('');
  let [inputEUR, setInputEUR] = useState('');

  function onInputINR(event) {
    setInputUSD(event.target.value / 82.22);
    setInputEUR(event.target.value / 81);
    setInputINR(event.target.value);
  }
  function onInputUSD(event) {
    setInputINR(event.target.value * 82.22);
    setInputEUR(event.target.value * 1.0166);
    setInputUSD(event.target.value);
  }
  function onInputEUR(event) {
    setInputINR(event.target.value * 81);
    setInputUSD(event.target.value * 0.9836);
    setInputEUR(event.target.value);
  }
  return (
    <div className="converterCurrency1">
      <BackBtn back={"/Converter"} />
      <div className="converterCurrency1a">
        <div className="converterCurrency1a1">
          <label className="inputConverterCurrency">INR</label>
          <input
            type="text"
            name="select1"
            placeholder="₹"
            className="inputConverterCurrency"
            value={inputINR}
            onInput={onInputINR}
          />
        </div>

        <div className="converterCurrency1a2">
          <label className="inputConverterCurrency">USD</label>
          <input
            type="text"
            name="select2"
            placeholder="$"
            className="inputConverterCurrency"
            value={inputUSD}
            onInput={onInputUSD}
          />
        </div>
        <div className="converterCurrency1a3">
          <label className="inputConverterCurrency">EUR</label>
          <input
            type="text"
            name="select2"
            placeholder="€"
            className="inputConverterCurrency"
            value={inputEUR}
            onInput={onInputEUR}
          />
        </div>
      </div>
    </div>
  );
};

export default Currency;
