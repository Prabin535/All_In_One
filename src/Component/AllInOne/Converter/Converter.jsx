import React from "react";
import BackBtn from "../BackBtn";
import {
  Link,
  Outlet
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faCake,
  faTape,
  faList12,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";

const Converter = () => {
  return (
    <div className="section1b">
      <BackBtn back={"/"} />
      <div className="converterSection">
        <Link to="Age" className="contentBtn">
          <FontAwesomeIcon icon={faCake} className="icon" size="2x" />
          Age
        </Link>
        <Link to="Currency" className="contentBtn">
          <FontAwesomeIcon icon={faDollar} className="icon" size="2x" />
          Currency
        </Link>
        <Link to="Length" className="contentBtn">
          <FontAwesomeIcon icon={faTape} className="icon" size="2x" />
          Length
        </Link>
        <Link to="Number" className="contentBtn">
          <FontAwesomeIcon icon={faList12} className="icon" size="2x" />
          Number
        </Link>
        <Link to="Tempreture" className="contentBtn">
          <FontAwesomeIcon
            icon={faTemperatureHalf}
            className="icon"
            size="2x"
          />
          Tempreture
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Converter;
