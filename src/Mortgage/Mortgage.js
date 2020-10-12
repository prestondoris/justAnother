import React, { Component } from 'react'
import Mortgage from 'tiny-mortgage'
import './Mortgage.css'

class MortgageCalc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interestRate: '',
      houseCost:'$ ',
      downPayment:'',
      loanTerm:'',
      monthlyMortgage: '$0.00',
      totalAmount: '$0.00',
    }
    this.calculateMortgage = this.calculateMortgage.bind(this)
    this.availableChars = this.availableChars.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addCommas = this.addCommas.bind(this)
  }

  calculateMortgage() {
    let {interestRate, houseCost, downPayment, loanTerm} = this.state
    if(interestRate!=='' && houseCost!=='' && downPayment!=='' && loanTerm!=='') {
      let houseCostNoCommas = houseCost.split(',').join('')
      let houseCostNoDollarSign = houseCostNoCommas.substring(2)
      let m = new Mortgage(Number(houseCostNoDollarSign), Number(downPayment), Number(interestRate), Number(loanTerm))
      let monthlyMortgage = '$' + this.addCommas(m.getMonthly()+'')
      let totalAmount = '$' + this.addCommas(m.getTotal()+'')
      this.setState({monthlyMortgage, totalAmount})
    }
  }

  handleChange(event) {
    let val = event.target.value
    let name = event.target.name
    if(val === '' && name !== 'houseCost') {
      this.setState({ [name]: '', monthlyMortgage: '$0.00', totalAmount: '$0.00' })
    } else if (this.availableChars(val[val.length - 1]) > -1) {
      if (name === 'houseCost') {
        let withoutCommas = event.target.value.split(',').join('')
        let noDollarSign = withoutCommas.substring(2)
        console.log(noDollarSign)
        let houseCost = '$ ' + this.addCommas(noDollarSign)
        this.setState({ houseCost }, this.calculateMortgage)
      } else {
        this.setState({ [name]: event.target.value }, this.calculateMortgage)
      }
    } 
    this.setState({})
  }

  availableChars(char) {
    return '0123456789. '.indexOf(char)
  }

  addCommas(value) {
    let i = value.length - 1
    let charCount = 1
    let returnVal = ''

    while(i >= 0) {
      let char = value[i]
      if (charCount === 4 || charCount === 8 || charCount === 12 || charCount === 16) returnVal = ',' + returnVal
      else {
        returnVal = char + returnVal
        i--
      }
      charCount++
    }
    return returnVal
  }
  render() {
    return (
      <div id="mortgageBox">
        <header>Mortgage</header>
        <main>
          <div className='inputGroup'>
            <label htmlFor='houseCost'>House Cost</label>
            <input onChange={this.handleChange} name='houseCost' value={this.state.houseCost} />
          </div>
          <div className='inputGroup'>
            <label htmlFor='downPayment'>Down Payment (%)</label>
            <input onChange={this.handleChange} name='downPayment' value={this.state.downPayment} />
          </div>
          <div className='inputGroup'>
            <label htmlFor='interestRate'>Interest Rate (%)</label>
            <input onChange={this.handleChange} name='interestRate' value={this.state.interestRate} />
          </div>
          <div className='inputGroup'>
            <label htmlFor='loanTerm'>Loan Term (Years)</label>
            <input onChange={this.handleChange} name='loanTerm' value={this.state.loanTerm} />
          </div>
        </main>
        <footer>
          <div className='mortgageAmounts'>
            <span >Monthly Mortgage Amount: <span className='top-spacer'></span>{this.state.monthlyMortgage}</span>
            <span >Total Loan Amount: <span className='bottom-spacer'></span> {this.state.totalAmount}</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default MortgageCalc