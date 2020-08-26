import React from 'react'
import {
  Link
} from "react-router-dom";

function Card({cards}) {
  let wrapperStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
  let cardStyles = {
    width: '200px',
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '10px',
    textDecoration: 'none',
    backgroundColor: '#242626',
    border: 'solid 1px #3D4042'
    
  }
  let linkStyles = {
    color: '#B0B3B8',
    fontSize: '1.5em'
  }
  let card = cards.map((card,ind) => (
    <Link to={'/' + card} key={ind} style={cardStyles}><p style={linkStyles}>{card}</p></Link>
  ))
  return (
    <div style={wrapperStyles}>
      {card}
    </div>
  )
}

export default Card