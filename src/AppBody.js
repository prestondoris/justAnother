import React from 'react'
import Stopwatch from './Stopwatch'
import CalculatorPage from './CalculatorPage'
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
    <div className='pageContents'>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Calculator">
          <CalculatorPage />
        </Route>
        <Route path="/Stopwatch">
          <Stopwatch />
        </Route>
      </Switch>
    </div>
  )
}

export default AppBody