import React from 'react'
import {
  Link
} from "react-router-dom";

function Card({cards}) {
  let wrapperStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
  let cardStyles = {
    width: '200px',
    height: '200px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '10px',
    border: 'solid black 1px'
  }
  let linkStyles = {
    textDecoration: 'none',
    color: '#7510F6',
    fontSize: '1.5em'
  }
  let card = cards.map((card,ind) => (
    <div key={ind} style={cardStyles}><Link style={linkStyles} to={'/' + card}>{card}</Link></div>
  ))
  return (
    <div style={wrapperStyles}>
      {card}
    </div>
  )
}

export default Card