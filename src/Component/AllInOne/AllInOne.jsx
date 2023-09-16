import React from "react";
import "./AllInOne.css";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faArrowRightArrowLeft,
  faStopwatch,
  faClock,
  faKeyboard,
  faTasks,
  faNoteSticky,
  faHeartCircleBolt,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

const AllInOne = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <Home />
      <div className="section1">
        <div className="section1a">
          <div className="contentBtn" onClick={() => navigate("/Calculator")}>
            <FontAwesomeIcon icon={faCalculator} className="icon" size="2x" />
            Calculator
          </div>

          <div className="contentBtn" onClick={() => navigate("/Converter")}>
            <FontAwesomeIcon
              icon={faArrowRightArrowLeft}
              className="icon"
              rotation={90}
              size="2x"
            />
            Converter
          </div>

          <div className="contentBtn" onClick={() => navigate("/Stopwatch")}>
            <FontAwesomeIcon icon={faStopwatch} className="icon" size="2x" />
            Stopwatch
          </div>

          <div className="contentBtn" onClick={() => navigate("/CurrentTime")}>
            <FontAwesomeIcon icon={faClock} className="icon" size="2x" />
            Current Time
          </div>

          <div className="contentBtn" onClick={() => navigate("/TypingTest")}>
            <FontAwesomeIcon icon={faKeyboard} className="icon" size="2x" />
            Typing Test
          </div>

          <div className="contentBtn" onClick={() => navigate("/TaskReminder")}>
            <FontAwesomeIcon icon={faTasks} className="icon" size="2x" />
            Task Reminder
          </div>

          <div className="contentBtn" onClick={() => navigate("/HealthCare")}>
            <FontAwesomeIcon
              icon={faHeartCircleBolt}
              className="icon"
              size="2x"
            />
            Health Care
          </div>

          <div className="contentBtn" onClick={() => navigate("/BalanceSheet")}>
            <FontAwesomeIcon
              icon={faFileInvoiceDollar}
              className="icon"
              size="2x"
            />
            Balance Sheet
          </div>

          <div className="contentBtn" onClick={() => navigate("/NoteBook")}>
            <FontAwesomeIcon icon={faNoteSticky} className="icon" size="2x" />
            Note Book
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
