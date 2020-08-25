import React from 'react'
import './CalculatorButton.css'

function CalculatorButton(props) {
  let classes = props.extraClass ? props.extraClass : ''
  return (
    <div className={classes + ' btn'} onClick={props.buttonClick}>
      <input className='value' type='hidden' value={props.val} />
      <span>{props.val}</span>
    </div>
  )
}

export default CalculatorButton