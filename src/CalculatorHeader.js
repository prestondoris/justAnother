import React from 'react'

function CalculatorHeader(props) {
  return (
    <div className={props.mainClass}>
      <div className={props.operationClass}><span>{props.fullOperation}</span></div>
      <div className={props.displayClass}><span>{props.displayValue}</span></div>
    </div>
  )
}

export default CalculatorHeader