import React from 'react'
import Cards from './Card'

function Home() {
  let cards = ['Calculator', 'Stopwatch']
  return (
    <div>
      <h2>Welcome to UtilWeb.io</h2>
      <p>This is a site to provide simple Utilities for the Web</p>
      <Cards cards={cards} />
    </div>
  );
}

export default Home