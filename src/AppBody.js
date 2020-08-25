import React from 'react'
import StopwatchPage from './Stopwatch'
import CalculatorPage from './Calculator'
import Home from './Home'
import {
  Switch,
  Route
} from "react-router-dom";
import './AppBody.css'


/*
  A <Switch> looks through all its children <Route>
  elements and renders the first one whose path
  matches the current URL. Use a <Switch> any time
  you have multiple routes, but you want only one
  of them to render at a time
*/
function AppBody() {
  return (
    <div style={{backgroundColor: '#18191A'}}>
      <div  className='pageContents'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Calculator">
            <CalculatorPage />
          </Route>
          <Route path="/Stopwatch">
            <StopwatchPage />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default AppBody