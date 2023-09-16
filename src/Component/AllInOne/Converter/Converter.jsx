import React from "react";
import BackBtn from "../BackBtn";
// import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faCake,
  faTape,
  faList12,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout";

const Converter = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="section1b">
        <BackBtn back={"/"} />
        <div className="converterSection">
          <div className="contentBtn" onClick={() => navigate("/Age")}>
            <FontAwesomeIcon icon={faCake} className="icon" size="2x" />
            Age
          </div>
          <div className="contentBtn" onClick={() => navigate("/Currency")}>
            <FontAwesomeIcon icon={faDollar} className="icon" size="2x" />
            Currency
          </div>
          <div className="contentBtn" onClick={() => navigate("/Length")}>
            <FontAwesomeIcon icon={faTape} className="icon" size="2x" />
            Length
          </div>
          <div className="contentBtn" onClick={() => navigate("/Number")}>
            <FontAwesomeIcon icon={faList12} className="icon" size="2x" />
            Number
          </div>
          <div className="contentBtn" onClick={() => navigate("/Tempreture")}>
            <FontAwesomeIcon
              icon={faTemperatureHalf}
              className="icon"
              size="2x"
            />
            Tempreture
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Converter;
