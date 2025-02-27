import React from 'react'
import './App.css'
const Profilecard = (props) => {
  return (
    <div className='main'>
      <div className='name'>{props.name}</div>
        <img src={props.src} alt="" />
        <div className='short-bio'>{props.shortbio}</div>
    </div>
  )
}

export default Profilecard
