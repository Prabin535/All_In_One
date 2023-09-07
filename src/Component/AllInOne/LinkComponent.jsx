import React from "react";
import { Link,Routes,Route } from "react-router-dom";
const LinkComponent = () => {
    let content=['Calculator','Converter','Stopwatch']
  return (
    <div className="section1a">
      <Link to={`/${content.map((data)=>data)}`} className="contentBtn">
        
        {content.map((data)=>data)}
      </Link>
    </div>
  );
};

export default LinkComponent;
