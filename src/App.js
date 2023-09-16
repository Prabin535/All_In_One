import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

import AllInOne from "./Component/AllInOne/AllInOne";
import Calculator from "./Component/AllInOne/Calculator/Calculator";
import Converter from "./Component/AllInOne/Converter/Converter";
import Age from "./Component/AllInOne/Converter/Age/Age";
import Currency from "./Component/AllInOne/Converter/Currency/Currency";
import Length from "./Component/AllInOne/Converter/Length/Length";
import Number from "./Component/AllInOne/Converter/Number/Number";
import Tempreture from "./Component/AllInOne/Converter/Tempreture/Tempreture";
import Stopwatch from "./Component/AllInOne/Stopwatch/Stopwatch";
import CurrentTime from "./Component/AllInOne/Current Time/CurrentTime";
import TypingTest from "./Component/AllInOne/Typing Test/TypingTest";
import TaskReminder from "./Component/AllInOne/Task Reminder/TaskReminder";
import HealthCare from "./Component/AllInOne/Health Care/HealthCare";
import BalanceSheet from "./Component/AllInOne/Balance Sheet/BalanceSheet";
import NoteBook from "./Component/AllInOne/Note Book/NoteBook";

function App() {
  return (
    // <div>
    //   <AllInOne />
    // </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<AllInOne />} />
        <Route exact path="/Calculator" element={<Calculator />} />
        <Route exact path="/Converter" element={<Converter />} />
        <Route exact path="Age" element={<Age />} />
        <Route exact path="Currency" element={<Currency />} />
        <Route exact path="Length" element={<Length />} />
        <Route exact path="Number" element={<Number />} />
        <Route exact path="Tempreture" element={<Tempreture />} />
        <Route exact path="/Stopwatch" element={<Stopwatch />} />
        <Route exact path="/CurrentTime" element={<CurrentTime />} />
        <Route exact path="/TypingTest" element={<TypingTest />} />
        <Route exact path="/TaskReminder" element={<TaskReminder />} />
        <Route exact path="/HealthCare" element={<HealthCare />} />
        <Route exact path="/BalanceSheet" element={<BalanceSheet />} />
        <Route exact path="/NoteBook" element={<NoteBook />} />
      </Routes>
    </Router>
  );
}

export default App;
