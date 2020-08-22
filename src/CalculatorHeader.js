import React from 'react'

function CalculatorHeader(props) {
  return (
    <div className={props.classes}>
      <div>{props.fullOperation}</div>
      <div>{props.displayValue}</div>
    </div>
  )
}

export default CalculatorHeader