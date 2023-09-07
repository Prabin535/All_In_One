import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const Content = (props) => {
  return (
    <div>
      {/* <Router> */}
        <div>
        <span className='contentBtn'>
          <Link to={`/${props.value}`} >
            {props.value}
          </Link>
        </span>
        <span className='section1btrue'>
        <Routes>
          <Route exact path={`/${props.value}`} element={`<${props.value}/>`} />
        </Routes>
        </span>
        </div>
        
      {/* </Router> */}
      
    </div>
  );
};

export default Content;
