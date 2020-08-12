import React, {Component} from 'react'
import './Calculator.css'

class Calculator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <div className='header area'>header</div>
        <div className='area'>C</div>
        <div className='area'>+/-</div>
        <div className='area'>%</div>
        <div className='area'>*</div>
        <div className='area'>7</div>
        <div className='area'>8</div>
        <div className='area'>9</div>
        <div className='area'>/</div>
        <div className='area'>4</div>
        <div className='area'>5</div>
        <div className='area'>6</div>
        <div className='area'>+</div>
        <div className='area'>1</div>
        <div className='area'>2</div>
        <div className='area'>3</div>
        <div className='area'>-</div>
        <div className='b17 area'>0</div>
        <div className='area'>=</div>
      </main>
    )
  }
}

function CalculatorRow(props) {
  return (
    <div>{props.children}</div>
    
  )
}

export default Calculator