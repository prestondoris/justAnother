import React, {Component} from 'react'
import './Calculator.css'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calculatedValue: '0'
      
    }
  }

  render() {
    let values = ['headher', 'C', '()', '%', '*',
                        '7', '8', '9', '/',
                        '4', '5', '6', '+',
                        '1', '2', '3', '-',
                        '0', '.', '=']

    let calcSections = values.map((val, ind) => {
      if(ind === 0){
        return <div className="header area" key={ind}>{val}</div>
      } else if (ind === 17) {
        return <div className="b17 area" key={ind}>{val}</div>
      } else {
        return <div className="area" key={ind}>{val}</div>
      }
    })

    return (
      <main>
        {calcSections}
      </main>
    )
  }
}

export default Calculator