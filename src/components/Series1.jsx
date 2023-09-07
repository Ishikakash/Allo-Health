import React from 'react'
import './series.css';

const Series1 = () => {

  return (
    <div className='series'>
      <div className='product'>     
        <div className='productImage'>
          <img className='img'
            src='https://img.etimg.com/thumb/width-1200,height-900,imgsize-94389,resizemode-75,msid-49810125/industry/services/hotels-/-restaurants/indian-food-scene-catches-restaurant-group-le-cirques-fancy.jpg'
            alt='Product'
            style={{ borderRadius: '10px' }}// Apply border radius to the product image
          />
        </div>
        <div className='productDescription'>
          <p style={{fontSize: "15px"}}>3 course meals + drinks</p>
          <p><b>Naan roti, Daal, Paneer, salad, raita</b></p>
          <p><b>Starter : </b>Salted salmon with fresh cucumber</p>
          <p><b>Desert : </b>Brownie</p>
          <p><b>Selected Drink : </b>Juice</p>
          <div className='drinkSelection'>
            <div className='drink'>
            <img
                className='drinkImg'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANKFBu4W8PfMevF4eCaYc3MU3W9Pn3I3LAQ&usqp=CAU'
                alt='Drink 1'
                style={{ borderRadius: '10px' }} // Apply border radius to drink images
            />
          <button>Select</button>
        </div>
        <div className='drink'>
          <img className='drinkImg'
            src='https://img.freepik.com/free-photo/blue-liquid-pouring-into-glass_144627-18408.jpg?w=360'
            alt='Drink 2'
            style={{ borderRadius: '10px' }} // Apply border radius to drink images
          />
          <button>Select</button>
        </div>
        <div className='drink'>
          <img className='drinkImg
          '
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwElulQkVaPHU8Rpbpm4w4PekSx7XoWupwvrmKGZ1mMZ-isAcuxkNxszeqT53GT5Xbdk&usqp=CAU'
            alt='Drink 3'
            style={{ borderRadius: '10px' }} // Apply border radius to drink images
          />
          <button>Select</button>
        </div>
      </div>
    </div>
        
    </div>
    
    </div>
    
  )
}

export default Series1