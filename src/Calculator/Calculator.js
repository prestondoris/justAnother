import React, {Component} from 'react'
import './Calculator.css'
import CalculatorButton from './CalculatorButton'
import CalculatorHeader from './CalculatorHeader'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayValue: '0',
      fullOperation: '',
      inputValues: [],
      lastButtonClicked: null // 1 for number, 0 for operation
    }
    this.buttonClick = this.buttonClick.bind(this)
    this.performOperation = this.performOperation.bind(this)
    this.roundValue = this.roundValue.bind(this)
  }

  roundValue(numAsString) {
    return 
  }

  buttonClick(e) {
    
    let buttonClicked = e.target.tagName === 'SPAN' ? e.currentTarget.textContent : e.target.children[0].value
    let numbers = ['.','1','2','3','4','5','6','7','8','9','0']
    let operations = ['+', '-', '*', '/']

    if(numbers.indexOf(buttonClicked) > -1) {
      if(this.state.lastButtonClicked === 'equals') {
        let displayValue = buttonClicked
        this.setState({inputValues: [], displayValue, fullOperation: '', lastButtonClicked: 'number'})
      } else {
        let displayValue = this.state.displayValue === '0' ? buttonClicked : this.state.displayValue + buttonClicked
        this.setState({ displayValue, lastButtonClicked: 'number' })
      }


    } else if (operations.indexOf(buttonClicked) > -1) {
      let inputValues = this.state.inputValues.map(val => val)
      let curOperation = operations[operations.indexOf(buttonClicked)]
      let fullOperation = this.state.fullOperation

      if(this.state.lastButtonClicked === 'operation') {
        inputValues.pop()
        inputValues.push(curOperation)
        fullOperation = fullOperation.slice(0,-1) + curOperation
      } else if(this.state.lastButtonClicked === 'equals') {
        inputValues.push(Number(this.state.displayValue), curOperation)
        fullOperation = this.state.displayValue + curOperation
      } else {
        inputValues.push(Number(this.state.displayValue), curOperation)
        fullOperation += this.state.displayValue + curOperation
      }

      this.setState({ inputValues, displayValue: '0', fullOperation, lastButtonClicked: 'operation' })

    } else if (buttonClicked === '+ / -'){
      let displayValue = this.state.displayValue;
      if (displayValue[0] === '-') displayValue = displayValue.slice(1)
      else displayValue = '-' + displayValue

      this.setState({displayValue})

    } else if (buttonClicked === '%') {
      let displayValue = this.state.displayValue;
      if(displayValue !== '0') {
        displayValue = '' + Number(displayValue)/100
      }

      this.setState({displayValue})
    }else if (buttonClicked === '=') {
      let inputValues = this.state.inputValues.map(val => val)
      inputValues.push(Number(this.state.displayValue))
      let answer = this.performOperation(inputValues)
      let fullOperation = this.state.fullOperation + this.state.displayValue + '=' + answer
      this.setState({ displayValue: `${answer}`, fullOperation, inputValues: [], lastButtonClicked: 'equals' })

    } else if(buttonClicked === 'C') {
      this.setState({
        displayValue: '0',
        fullOperation: '',
        inputValues: []
      })
    }
  }

  performOperation(equation) {
    let finalEquation = []

    const isAnOperation = (val => '+-*/%'.indexOf(val) > -1)

    let i = 0
    while(i<equation.length) {
      let val = equation[i]

      if(isAnOperation(val) && (val === '*' || val === '/') ) {
        i++
        let firstVal = finalEquation.pop()
        let secondVal = equation[i]
        if(val === '*') finalEquation.push(firstVal * secondVal)
        else finalEquation.push(firstVal / secondVal)
      } else {
        finalEquation.push(val)
      }
      i++
    }

    let calculatedValue = finalEquation[0]
    let j=0
    while(j<finalEquation.length) {
      let val = finalEquation[j]
      if (isAnOperation(finalEquation[j])) {
        j++
        if(val === '+') calculatedValue += finalEquation[j]
        else calculatedValue -= finalEquation[j]
      }
      j++
    }
    return calculatedValue
  }

  render() {
    let values = ['C', '+ / -', '%', '*',
                  '7', '8', '9', '/',
                  '4', '5', '6', '+',
                  '1', '2', '3', '-',
                  '0', '.', '=']

    let calcButtons = values.map((val, ind) => {
      
      if ('0123456789.'.indexOf(val) > -1) {
        let extraClass = 'btn-num'
        if(val === '0') {
          extraClass += ' zero'
        }
        return <CalculatorButton 
                  extraClass={extraClass} 
                  buttonClick={this.buttonClick} 
                  val={val} 
                  key={ind} 
                /> 
      } else if(val === '=') {
        return <CalculatorButton
                  extraClass='equals'
                  buttonClick={this.buttonClick}
                  val={val}
                  key={ind}
                /> 
      } else {
        return <CalculatorButton
                  extraClass='btn-op'
                  buttonClick={this.buttonClick}
                  val={val}
                  key={ind}
                /> 
      }
    })

    return (
      <main className='calc'>
        <CalculatorHeader 
            mainClass='header' 
            operationClass='operation'
            displayClass='display'
            fullOperation={this.state.fullOperation} 
            displayValue={this.state.displayValue} 
        />
        {calcButtons}
      </main>
    )
  }
}



export default Calculator