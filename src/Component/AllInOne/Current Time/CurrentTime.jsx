import React from "react";
import { useState, useLayoutEffect } from "react";
import BackBtn from "../BackBtn";
import TimeZones from "./TimeZones";
import Layout from "../Layout";

const CurrentTime = () => {
  function getTime(timezone) {
    return new Date().toLocaleString("en-US", { timeZone: `${timezone}` });
  }
  let [timezone, setTimeZone] = useState("Asia/Kolkata");
  console.log(timezone);
  let time = getTime(timezone);
  console.log(time);
  let date = time.slice(0, time.indexOf(","));
  let actualTime= time.slice(time.indexOf(' '))
  console.log(actualTime);

  let [currentHours, setCurrentHours] = useState(Number(actualTime.slice(0,actualTime.indexOf(':'))));
  let [currentMinutes, setCurrentMinutes] = useState(Number(actualTime.slice(actualTime.indexOf(':')+1,actualTime.indexOf(':')+3)));
  let [currentSeconds, setCurrentSeconds] = useState(Number(actualTime.slice(actualTime.lastIndexOf(':')+1,actualTime.lastIndexOf(':')+3)));
  // console.log(currentHours);
  // console.log(currentMinutes);
  // console.log(currentSeconds);
  let days = new Date().getDay();
  let day;
  if (days === 1) {
    day = "MONDAY";
  } else if (days === 2) {
    day = "TUESDAY";
  } else if (days === 3) {
    day = "WEDNESDAY";
  } else if (days === 4) {
    day = "THURSDAY";
  } else if (days === 5) {
    day = "FRIDAY";
  } else if (days === 6) {
    day = "SATURDAY";
  } else {
    day = "SUNDAY";
  }

  useLayoutEffect(() => {
    let timer = setInterval(() => {
      if (currentSeconds === 59) {
        setCurrentSeconds(0);
        if (currentMinutes === 59) {
          setCurrentMinutes(0);
          if (currentHours === 12) {
            setCurrentHours(1);
          } else {
            setCurrentHours(currentHours + 1);
          }
        } else {
          setCurrentMinutes(currentMinutes + 1);
        }
      } else {
        setCurrentSeconds(currentSeconds + 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSeconds, currentMinutes, currentHours]);

  return (
    <Layout>
    <div className="section1b">
      <BackBtn back={"/"} />
      <div className="currentTimeSection">
        <div className="clockDigital">INDIA</div>

        <div className="clockAnalog">
          <div
            className="clockAnalogHour"
            style={{ transform: `rotate(${currentHours * 30}deg)` }}
          >
            <div className="clockAnalogHour1"></div>
            <div className="clockAnalogHour2"></div>
          </div>
          <div
            className="clockAnalogMinute"
            style={{ transform: `rotate(${currentMinutes * 6}deg)` }}
          >
            <div className="clockAnalogMinute1"></div>
            <div className="clockAnalogMinute2"></div>
          </div>
          <div
            className="clockAnalogSecond"
            style={{ transform: `rotate(${currentSeconds * 6}deg)` }}
          >
            <div className="clockAnalogSecond1"></div>
            <div className="clockAnalogSecond2"></div>
          </div>
          <div className="clockCenter"></div>

          <span className="twelve">12</span>
          <span className="eleven">11</span>
          <span className="ten">10</span>
          <span className="nine">9</span>
          <span className="eight">8</span>
          <span className="seven">7</span>
          <span className="six">6</span>
          <span className="five">5</span>
          <span className="four">4</span>
          <span className="three">3</span>
          <span className="two">2</span>
          <span className="one">1</span>
        </div>
        <div className="clockDigital">
          {date}
          {actualTime}
        </div>
        <div className="selectRegion">
          <select
            className="inputConverterCurrency"
            id="timeZone"
            onChange={(event) => setTimeZone(event.target.value)}
          >
            <TimeZones />
          </select>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default CurrentTime;
