import React,{useState} from 'react'
import BackBtn from '../../BackBtn'


const Number = () => {
  let [inputBinary,setInputBinary]=useState('');
  let [inputDecimal,setInputDecimal]=useState('');
  let [errorMsg,setErrorMsg]=useState('');

  function onInputBinary(event) {
    let bin=event.target.value;
    let flag;
    for(let i=0;i<bin.length;i++){
      if((bin.includes('1',i)||bin.includes('0',i))===true){
        flag=true;
      }
      else{
        return flag=false
      }
    }
    let dec=0;
    let power=0;
    while(bin>0){
      let rem=bin%10;
      dec=dec+(rem*(2**power));
      power++;
      bin=Math.trunc(bin/10);
    }
    setInputBinary(event.target.value)
    setInputDecimal(dec);
  }
  function onInputDecimal(event) {
    let dec=event.target.value;
    let bin=0;
    let power=0;
    while(dec>0){
      let rem=dec%2;
      bin=bin+(rem*(10**power));
      power++;
      dec=Math.trunc(dec/2);
    }
    setInputDecimal(event.target.value);
    setInputBinary(bin);
  }
  return (
    <div className="converterCurrency1">
      <BackBtn back={"/Converter"} />
      
      <div className="converterCurrency1a">
        
        <div className="converterCurrency1a1">
          <label className="inputConverterCurrency">Binary</label>
          <input
            type="text"
            name="select1"
            placeholder="BIN"
            className="inputConverterCurrency"
            value={inputBinary}
            onInput={onInputBinary}
          />
          <p id='dobError'>{errorMsg}</p>
        </div>

        <div className="converterCurrency1a2">
          <label className="inputConverterCurrency">Decimal</label>
          <input
            type="text"
            name="select2"
            placeholder="DEC"
            className="inputConverterCurrency"
            value={inputDecimal}
            onInput={onInputDecimal}
          />
        </div>
        {/* <div className="converterCurrency1a3">
          <label className="inputConverterCurrency">Kelvin</label>
          <input
            type="text"
            name="select2"
            placeholder="K"
            className="inputConverterCurrency"
            value={inputKelvin}
            onInput={onInputKelvin}
          />
        </div> */}
        
      </div>
      
    </div>
  );
}

export default Number