import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import BackBtn from "../BackBtn";
import Layout from "../Layout";

const TypingTest = () => {
  let [flag, setFlag] = useState(false);
  let text = [
    "Good Morning",
    "Good Afternoon",
    "Good Night",
    "How are you",
    "Howdy!",
  ];
  let [durationMin, setDurationMin] = useState(1);
  let [durationSec, setDurationSec] = useState(0);
  let [currentTextCount, setCurrentTextCount] = useState(0);
  let [currentText, setCurrentText] = useState("");
  const [border, setBorder] = useState("transparent");
  let timeSection = useRef();
  let textSection = useRef();
  let typingSection = useRef();
  let btnSection = useRef();
  function CheckInput(event) {
    document.getElementById("typingTestError").textContent = "";
    if (event.target.value) {
      if (
        event.target.value ===
        text[currentTextCount].slice(0, event.target.value.length)
      ) {
        setBorder("green");
      } else {
        setBorder("red");
      }
    } else {
      setBorder("transparent");
    }
    setCurrentText(event.target.value);
  }
  function SubmitText() {
    if (flag) {
      if (currentTextCount < text.length - 1) {
        if (currentText === text[currentTextCount]) {
          setCurrentTextCount(currentTextCount + 1);
          document.getElementById("typingArea").value = "";
        } else {
          document.getElementById("typingTestError").textContent =
            "Not Matching!!!";
        }
      } else {
        document.getElementById("typingTestError").textContent =
          "You are a Typing Master";
        setFlag(false);
        textSection.current.style.display = "none";
        timeSection.current.style.display = "none";
        typingSection.current.style.display = "none";
        btnSection.current.style.display = "none";
      }
    }
  }
  function StartTyping() {
    setFlag(true);
    document.getElementById("typingArea").value = "";
  }

  useEffect(() => {
    if (flag === true) {
      let timer = setInterval(() => {
        if (durationSec === 0) {
          if (durationMin > 0) {
            setDurationMin(durationMin - 1);
            setDurationSec(59);
          } else {
            document.getElementById("typingTestError").textContent =
              "Time Over";
            document.getElementById("typingArea").value = "";
            textSection.current.style.display = "none";
            timeSection.current.style.display = "none";
            typingSection.current.style.display = "none";
            btnSection.current.style.display = "none";
          }
        } else {
          setDurationSec(durationSec - 1);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  });

  return (
    <Layout>
    <div className="section1b">
      <BackBtn back={"/"} />
      <div className="typingTestSection">
        <div className="timeSection" ref={timeSection}>
          <span className="timeText">
            Time {durationMin.toString().padStart(2, "0")}:
            {durationSec.toString().padStart(2, "0")}
          </span>
          <span className="timeText">
            {currentTextCount + 1}/{text.length}
          </span>
        </div>
        <div className="textSection" ref={textSection}>
          <p>{text[currentTextCount]}</p>
        </div>
        <div className="typingSection" ref={typingSection}>
          <textarea
            name=""
            id="typingArea"
            cols="45"
            rows="3"
            onChange={CheckInput}
            style={{
              border: `2px solid ${border}`,
            }}
          ></textarea>
        </div>
        <div className="btnSection" ref={btnSection}>
          <button onClick={StartTyping} className="convBtn">
            Start
          </button>
          <button onClick={SubmitText} className="convBtn">
            Submit
          </button>
        </div>
        <h1 id="typingTestError"></h1>
      </div>
    </div>
    </Layout>
  );
};

export default TypingTest;
