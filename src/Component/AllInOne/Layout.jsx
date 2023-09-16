import React from 'react'
import Home from './Home'

const Layout = ({children}) => {
  return (
    <>
    <Home/>
    {children}   
    </>
  )
}

export default Layout