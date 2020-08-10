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
    boxShadow: '0px 0px 10px #cfcfcf',
    textDecoration: 'none'
  }
  let linkStyles = {
    color: '#7510F6',
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