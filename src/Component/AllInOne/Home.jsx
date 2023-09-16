import React from 'react';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='header'>
        <h1 className='heading' onClick={()=>navigate('/')}>All In One</h1>
    </div>
  )
}

export default Home