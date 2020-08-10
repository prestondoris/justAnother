import React, {Component} from 'react'
import './Stopwatch.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerStarted: false,
      timerVal: '0s 00'
    }
    this.startStopTimer = this.startStopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }

  startStopTimer(e) {
    alert('Start/Stop timer')
  }

  resetTimer(e) {
    alert('Reset Timer')
  }

  render() {
    return (
      <div id="timerBox">
        <header>Stopwatch</header>
        <main>{this.state.timerVal}</main>
        <footer>
          <div>
            <button style={{backgroundColor: '#9cf56c'}} onClick={this.startStopTimer}>Start</button>
            <button style={{backgroundColor: '#cfcfcf'}} onClick={this.resetTimer}>Reset</button>
          </div>
        </footer>
      </div>
    );
  }
}

export default Stopwatch