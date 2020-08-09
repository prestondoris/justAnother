import React from 'react'
import Cards from './Card'

function Home() {
  let cards = ['Calculator', 'Stopwatch']
  return (
    <div>
      <h2>Welcome to Just Another...</h2>
      <p>This is a site to provide just another simple to use common... </p>
      <Cards cards={cards} />
    </div>
  );
}

export default Home