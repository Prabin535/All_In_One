import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const BackBtn = (props) => {
  const back = useNavigate();
  return (
      <button className="backBtn" onClick={() => back(props.back)}>
        <FontAwesomeIcon icon={faArrowLeft} className="iconBack" />
        <span>Back</span>
      </button>
  );
};

export default BackBtn;
