import React,{useState} from "react";
import BackBtn from "../../BackBtn";

const Length = () => {
  let [inputKilometer,setInputKilometer]=useState('');
  let [inputMeter,setInputMeter]=useState('');
  let [inputCentimeter,setInputCentimeter]=useState('');

  function onInputKilometer(event) {
    setInputMeter(event.target.value * 1000);
    setInputCentimeter(event.target.value * 100000);
    setInputKilometer(event.target.value);
  }
  function onInputMeter(event) {
    setInputKilometer(event.target.value / 1000);
    setInputCentimeter(event.target.value * 100);
    setInputMeter(event.target.value);
  }
  function onInputCentimeter(event) {
    setInputKilometer(event.target.value / 100000);
    setInputMeter(event.target.value / 100);
    setInputCentimeter(event.target.value);
  }
  return (
    <div className="converterCurrency1">
      <BackBtn back={"/Converter"} />
      <div className="converterCurrency1a">
        <div className="converterCurrency1a1">
          <label className="inputConverterCurrency">Kilometer</label>
          <input
            type="text"
            name="select1"
            placeholder="Km"
            className="inputConverterCurrency"
            value={inputKilometer}
            onInput={onInputKilometer}
          />
        </div>

        <div className="converterCurrency1a2">
          <label className="inputConverterCurrency">Meter</label>
          <input
            type="text"
            name="select2"
            placeholder="m"
            className="inputConverterCurrency"
            value={inputMeter}
            onInput={onInputMeter}
          />
        </div>
        <div className="converterCurrency1a3">
          <label className="inputConverterCurrency">Centimeter</label>
          <input
            type="text"
            name="select2"
            placeholder="cm"
            className="inputConverterCurrency"
            value={inputCentimeter}
            onInput={onInputCentimeter}
          />
        </div>
      </div>
    </div>
  );
};

export default Length;
