import React from 'react'
import './buttons.css'

const Buttons = () => {
  return (
    <div className='buttonsContainer'>
      <center>
        <button className='buttons' style={{color:"red"}}><b>1</b></button>
        <button className='buttons'><b>2</b></button>
        <button className='buttons'><b>3</b></button>
        <button className='buttons'><b>4</b></button> 
        <p><b>Page</b></p>
      </center>
    </div>
  )
}

export default Buttons