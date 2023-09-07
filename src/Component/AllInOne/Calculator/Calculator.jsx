import React from "react";
import { useState } from "react";
import BackBtn from "../BackBtn";
import CalcBtn from "./CalcBtn";
const Calculator = () => {
  let [inpValue, setInpValue] = useState("");
  let arr1 = [
    { value: "7", click: onclick },
    { value: "8", click: onclick },
    { value: "9", click: onclick },
    { value: "DEL", click: del },
    { value: "C", click: clr },
  ];
  let arr2 = [
    { value: "4", click: onclick },
    { value: "5", click: onclick },
    { value: "6", click: onclick },
    { value: "/", click: onclick },
    { value: "%", click: percentage },
  ];
  let arr3 = [
    { value: "1", click: onclick },
    { value: "2", click: onclick },
    { value: "3", click: onclick },
    { value: "*", click: onclick },
    { value: "-", click: onclick },
  ];
  let arr4 = [
    { value: "0", click: onclick },
    { value: "00", click: onclick },
    { value: ".", click: onclick },
    { value: "+", click: onclick },
    { value: "=", click: result },
  ];

  function onclick(event) {
    let cv=inpValue+event.target.innerText;
    if(cv.length===1){
      if((cv.includes('/',0)||cv.includes('*',0)||cv.includes('-',0)||cv.includes('+',0))){
        setInpValue('');
      }
      else{
        setInpValue(cv);
      }
    }
    else{
      setInpValue(cv);
    }
  }
  function result() {
      let resultVal = eval(inpValue);
      setInpValue(resultVal);
  }
  function del(){
    if(inpValue===''){
      setInpValue('');
    }
    else{
      let civ=String(inpValue);
      let uv='';
      let i=0;
      while(i<civ.length-1){
        uv+=civ[i];
        i++;
      }
      setInpValue(uv);
    }
    
  }
  function percentage(){
    if(inpValue===''){
      setInpValue('');
    }
    else{
      setInpValue(inpValue/100);
    }
    
  }
  function clr() {
    setInpValue("");
  }
  return (
    <div className="section1b">
      <BackBtn back={"/"} />
      <div className="calculatorSection">
        <div className="calculatorSection1">
          <h1 className="calInput">{inpValue}</h1>
        </div>
        <div className="calculatorSection2">
          <div className="btnRow1">
            {arr1.map((data, index) => {
              return (
                <CalcBtn
                  key={index}
                  value={data.value}
                  clas="calcBtn1"
                  click={data.click}
                />
              );
            })}
            {arr2.map((data, index) => {
              return (
                <CalcBtn
                  key={index}
                  value={data.value}
                  clas="calcBtn1"
                  click={data.click}
                />
              );
            })}
            {arr3.map((data, index) => {
              return (
                <CalcBtn
                  key={index}
                  value={data.value}
                  clas="calcBtn1"
                  click={data.click}
                />
              );
            })}
            {arr4.map((data, index) => {
              return (
                <CalcBtn
                  key={index}
                  value={data.value}
                  clas="calcBtn1"
                  click={data.click}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
