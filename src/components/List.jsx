import React from 'react'
import './list.css'
//import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div className='header'>
        <div className='headerContainer'>
            <div className='headerList'>
                <div className='headerListItem '>
                    <span><b>All</b></span>
                </div>
                <div className='headerListItem '>
                    <span><b>Pizza</b></span>
                </div>
                <div className='headerListItem'>
                    <span><b>Burgers</b></span>
                </div>
                <div className='headerListItem'>
                    <span><b>Drinks</b></span>
                </div>
                <div className='headerListItem'>
                    <span><b>Cookies</b></span>
                </div>
                <div className='headerListItem'>
                    <span><b>Breakfast</b></span>
                </div>
                <div className='headerListItem'>
                    <span><b>Lunch</b></span>
                </div>
                <div className='headerListItem'>
                    <span><b>Brownies</b></span>
                </div>
                <div className='headerListItem'>
                    <span><b>Cakes</b></span>
                </div>
            </div>
            <hr/>
          <h1 style={{color:"Black"}}><center>Menu</center></h1>
            <br/>
        </div>
    </div>
  )
}

export default List