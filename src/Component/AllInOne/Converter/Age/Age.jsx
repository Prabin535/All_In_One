import React from "react";
import { useState } from "react";
import BackBtn from "../../BackBtn";
import ConvBtn from "../ConvBtn";

const Age = () => {
  let [userInput, setUserInput] = useState(0);
  let newDob = new Date(userInput);
  let [age, setAge] = useState();
  let [nextBirthDay, setNextBirthDay] = useState();

  function getAge() {
    if (userInput === 0 || userInput === "") {
      document.getElementById("dobError").innerText = "Please Enter Your DOB";
      setNextBirthDay();
      setAge();
    } else {
      document.getElementById("dobError").innerText = "";
      let dobDate = newDob.getDate();
      let dobMonth = newDob.getMonth() + 1;
      let dobYear = newDob.getFullYear();

      let current = new Date();
      let currentDate = current.getDate();
      let currentMonth = current.getMonth() + 1;
      let currentYear = current.getFullYear();

      let nextBirthYear = 0;
      let nextBirthMonth = 12 - (currentMonth - dobMonth);
      let nextBirthDate = dobDate - currentDate;
      if (nextBirthMonth === 12 && nextBirthDate === 0) {
        nextBirthMonth = 0;
        nextBirthYear = 0;
        setNextBirthDay("Happy Birthday");
      } else {
        if (currentMonth === dobMonth) {
          if (nextBirthDate < 0) {
            nextBirthMonth = 11;
            nextBirthDate = 31 + nextBirthDate;
          } else {
            nextBirthMonth = 0;
          }
        } else if (currentMonth > dobMonth) {
          if (nextBirthDate < 0) {
            nextBirthMonth -= 1;
            nextBirthDate = 30 + nextBirthDate;
          }
        } else if (currentMonth < dobMonth) {
          if (nextBirthDate < 0) {
            nextBirthDate = 30 + nextBirthDate;
          }
          nextBirthMonth = nextBirthMonth - 13;
        }
        setNextBirthDay(
          `${nextBirthYear} yrs,${nextBirthMonth}month and ${nextBirthDate} days remaining`
        );
      }

      let ageYears = currentYear - dobYear;
      let ageMonth;
      let ageDate;

      if (currentMonth >= dobMonth) {
        ageMonth = currentMonth - dobMonth;
      } else {
        ageYears -= 1;
        ageMonth = 12 + currentMonth - dobMonth;
      }

      if (currentDate >= dobDate) {
        ageDate = currentDate - dobDate;
      } else {
        ageMonth -= 1;
        ageDate = 30 + currentDate - dobDate;
      }

      if (ageMonth < 0) {
        ageYears -= 1;
        ageMonth = 11;
      }

      setAge(`${ageYears} yrs,${ageMonth} months and ${ageDate} days old`);
    }
  }

  return (
    <div className="converterSection1">
      <BackBtn back={"/Converter"} />
      <div className="converterSection1a">
        <div className="converterSection1a1">
          <h3 className="inputConverter">DOB :</h3>
          <input
            type="date"
            id="dob"
            className="inputConverter"
            onChange={(event) => setUserInput(event.target.value)}
          />
        </div>
        <div className="converterSection1a2">
          <h3 className="inputConverter">Age :</h3>
          <h3 className="inputConverter">{age}</h3>
        </div>
        <div className="converterSection1a3">
          <h3 className="inputConverter">Next Birthday :</h3>
          <h3 className="inputConverter">{nextBirthDay}</h3>
        </div>
        <div className="converterSection1a4">
          <ConvBtn text={"Calculate"} onclick={getAge} clas={"convBtn"} />
        </div>
        <p id="dobError"></p>
      </div>
    </div>
  );
};

export default Age;
