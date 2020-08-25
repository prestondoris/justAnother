import React from 'react'
import './CalculatorHeader.css'

function CalculatorHeader(props) {
  return (
    <div className='header'>
      <div className='operation'><span>{props.fullOperation}</span></div>
      <div className='display'><span>{props.displayValue}</span></div>
    </div>
  )
}

export default CalculatorHeader
