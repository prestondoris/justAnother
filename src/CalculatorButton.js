import React from 'react'

function CalculatorButton(props) {
  return (
    <div className={props.classes} onClick={props.buttonClick}><input className='value' type='hidden' value={props.val} />{props.val}</div>
  )
}

export default CalculatorButton