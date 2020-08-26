import React, {Component} from 'react'
import './Stopwatch.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerStarted: false,
      timerVal: '0s 00',
      timerArray: [0,0,0,0],
      timerInterval: null,
      startStopButtonColor: '#9cf56c',
      startStopButtonVal: 'Start'
    }
    this.startStopTimer = this.startStopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.updateTimerVal = this.updateTimerVal.bind(this)
  }

  startStopTimer(e) {
    if(this.state.timerStarted) {
      clearInterval(this.state.timerInterval)
      this.setState({
        timerInterval: null,
        timerStarted: false,
        startStopButtonColor: '#9cf56c',
        startStopButtonVal: 'Start'
      })
    } else {
      let curTimer = this.state.timerArray.map(val => val)
      let timerInterval = this.updateTimerVal(curTimer)
      this.setState({ 
        timerInterval, 
        timerStarted: true, 
        startStopButtonColor: '#ff6666', 
        startStopButtonVal: 'Stop'
      })
    }
  }

  updateTimerVal(timerArray) {
    let interval = setInterval(() => {
      timerArray[0] += 1
      if (timerArray[0] === 100) {
        timerArray[1] += 1
        timerArray[0] = 0
      }

      if (timerArray[1] === 60) {
        timerArray[2] += 1
        timerArray[1] = 0
      }

      if (timerArray[2] === 60) {
        timerArray[3] += 1
        timerArray[2] = 0
      }
      let hundredthsAsStr = timerArray[0] < 10 ? `0${timerArray[0]}` : `${timerArray[0]}`
      let secondsAsStr = `${timerArray[1]}s`
      let minsAsString = `${timerArray[2]}m`
      let hoursAsString = `${timerArray[3]}h`
      
      if(timerArray[2] === 0) {
        let timerVal = `${secondsAsStr} ${hundredthsAsStr}`
        this.setState({timerVal, timerArray})
      } else if(timerArray[3] === 0) {
        let timerVal = `${minsAsString} ${secondsAsStr} ${hundredthsAsStr}`
        this.setState({ timerVal, timerArray })
      } else {
        let timerVal = `${hoursAsString} ${minsAsString} ${secondsAsStr} ${hundredthsAsStr}`
        this.setState({ timerVal, timerArray })
      }
    }, 10)

    return interval
  }

  resetTimer(e) {
    clearInterval(this.state.timerInterval)
    this.setState({
      timerInterval: null,
      timerArray: [0,0,0,0],
      timerStarted: false,
      startStopButtonColor: '#9cf56c',
      startStopButtonVal: 'Start',
      timerVal: '0s 00'
    })
  }

  render() {
    return (
      <div id="timerBox">
        <header>Stopwatch</header>
        <main onChange={this.updateTimerVal}>{this.state.timerVal}</main>
        <footer>
          <div>
            <button onClick={this.startStopTimer}>{this.state.startStopButtonVal}</button>
            <button onClick={this.resetTimer}>Reset</button>
          </div>
        </footer>
      </div>
    );
  }
}

export default Stopwatch