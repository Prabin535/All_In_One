import React from 'react'

const CalcBtn = ({clas,value,click}) => {
  return (
    <button className={`${clas}`} onClick={click}>{value}</button>
  )
}

export default CalcBtn