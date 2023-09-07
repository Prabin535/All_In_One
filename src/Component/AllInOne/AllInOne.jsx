import React from "react";
import "./AllInOne.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator/Calculator";
import Converter from "./Converter/Converter";
import Age from "./Converter/Age/Age";
import CurrentTime from "./Current Time/CurrentTime";
import Stopwatch from "./Stopwatch/Stopwatch";
import TaskReminder from "./Task Reminder/TaskReminder";
import TypingTest from "./Typing Test/TypingTest";
import NoteBook from "./Note Book/NoteBook";
import BalanceSheet from "./Balance Sheet/BalanceSheet";
import HealthCare from "./Health Care/HealthCare";
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
import Currency from "./Converter/Currency/Currency";
import Length from "./Converter/Length/Length";
import Number from "./Converter/Number/Number";
import Tempreture from "./Converter/Tempreture/Tempreture";
const AllInOne = () => {
  return (
    <Router>
      <div>
        <Home />
        <div className="section1">
          <div className="section1a">
            <Link to="/Calculator" className="contentBtn">
              <FontAwesomeIcon icon={faCalculator} className="icon" size="2x" />
              Calculator
            </Link>

            <Link to="/Converter" className="contentBtn">
              <FontAwesomeIcon
                icon={faArrowRightArrowLeft}
                className="icon"
                rotation={90}
                size="2x"
              />
              Converter
            </Link>

            <Link to="/Stopwatch" className="contentBtn">
              <FontAwesomeIcon icon={faStopwatch} className="icon" size="2x" />
              Stopwatch
            </Link>

            <Link to="/CurrentTime" className="contentBtn">
              <FontAwesomeIcon icon={faClock} className="icon" size="2x" />
              Current Time
            </Link>

            <Link to="/TypingTest" className="contentBtn">
              <FontAwesomeIcon icon={faKeyboard} className="icon" size="2x" />
              Typing Test
            </Link>

            <Link to="/TaskReminder" className="contentBtn">
              <FontAwesomeIcon icon={faTasks} className="icon" size="2x" />
              Task Reminder
            </Link>

            <Link to="/HealthCare" className="contentBtn">
              <FontAwesomeIcon
                icon={faHeartCircleBolt}
                className="icon"
                size="2x"
              />
              Health Care
            </Link>

            <Link to="/BalanceSheet" className="contentBtn">
              <FontAwesomeIcon
                icon={faFileInvoiceDollar}
                className="icon"
                size="2x"
              />
              Balance Sheet
            </Link>

            <Link to="/NoteBook" className="contentBtn">
              <FontAwesomeIcon icon={faNoteSticky} className="icon" size="2x" />
              Note Book
            </Link>
          </div>
          <div>
            <Routes>
              <Route exact path="/Calculator" element={<Calculator />} />
              <Route exact path="/Converter" element={<Converter />}>
                <Route exact path="Age" element={<Age/>} />
                <Route exact path="Currency" element={<Currency/>} />
                <Route exact path="Length" element={<Length/>} />
                <Route exact path="Number" element={<Number/>} />
                <Route exact path="Tempreture" element={<Tempreture/>} />
              </Route>
              <Route exact path="/Stopwatch" element={<Stopwatch />} />
              <Route exact path="/CurrentTime" element={<CurrentTime />} />
              <Route exact path="/TypingTest" element={<TypingTest />} />
              <Route exact path="/TaskReminder" element={<TaskReminder />} />
              <Route exact path="/HealthCare" element={<HealthCare />} />
              <Route exact path="/BalanceSheet" element={<BalanceSheet />} />
              <Route exact path="/NoteBook" element={<NoteBook />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AllInOne;
