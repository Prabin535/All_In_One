import React,{useState} from "react";
import BackBtn from "../../BackBtn";


const Tempreture = () => {
  let [inputCelsius,setInputCelsius]=useState('');
  let [inputFahrenheit,setInputFahrenheit]=useState('');
  let [inputKelvin,setInputKelvin]=useState('');
  
  function onInputCelsius(event) {
    setInputFahrenheit(event.target.value *1.8+32);
    setInputKelvin(Number(event.target.value) +273.15);
    setInputCelsius(event.target.value);
  }
  function onInputFahrenheit(event) {
    setInputCelsius(event.target.value *0.555555-17.777777);
    setInputKelvin(event.target.value *0.5555559+255.372222);
    setInputFahrenheit(event.target.value);
  }
  function onInputKelvin(event) {
    setInputCelsius(event.target.value - 273.15);
    setInputFahrenheit(event.target.value*1.80-459.67);
    setInputKelvin(event.target.value);
  }
  return (
    <div className="converterCurrency1">
      <BackBtn back={"/Converter"} />
      <div className="converterCurrency1a">
        <div className="converterCurrency1a1">
          <label className="inputConverterCurrency">Celsius</label>
          <input
            type="text"
            name="select1"
            placeholder="°C"
            className="inputConverterCurrency"
            value={inputCelsius}
            onInput={onInputCelsius}
          />
        </div>

        <div className="converterCurrency1a2">
          <label className="inputConverterCurrency">Fahrenheit</label>
          <input
            type="text"
            name="select2"
            placeholder="°F"
            className="inputConverterCurrency"
            value={inputFahrenheit}
            onInput={onInputFahrenheit}
          />
        </div>
        <div className="converterCurrency1a3">
          <label className="inputConverterCurrency">Kelvin</label>
          <input
            type="text"
            name="select2"
            placeholder="K"
            className="inputConverterCurrency"
            value={inputKelvin}
            onInput={onInputKelvin}
          />
        </div>
      </div>
    </div>
  );
};

export default Tempreture;
