import React from 'react'

const ConvBtn = (props) => {
  return (
    <button onClick={props.onclick} className={props.clas}>{props.text}</button>
  )
}

export default ConvBtn