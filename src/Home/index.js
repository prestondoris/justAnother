import React from 'react'
import Cards from './Card'
import './styles.css'
import landingLogo from '../code drawing.svg'

function Index() {
  let cards = ['Calculator', 'Stopwatch']
  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1>Utilities on the Web</h1>
        <img src={landingLogo} alt='code stencil' />
      </div>
      <div className='card-list'>
        <Cards cards={cards} />
      </div>
      
    </div>
  );
}

export default Index