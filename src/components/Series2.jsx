import React from 'react'

const Series2 = () => {
  return (
    <div className='series'>
      <div className='product'>     
        <div className='productImage'>
          <img className='img'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-L4QNhHXwGv-QLaRvk2CWvmu942Hj_Hnnw&usqp=CAU'
            alt='Product'
            style={{ borderRadius: '10px' }}// Apply border radius to the product image
          />
        </div>
        <div className='productDescription'>
          <p style={{fontSize: "15px"}}>3 course meals + drinks</p>
          <p><b>Naan roti, Daal, Paneer, salad, raita</b></p>
          <p><b>Starter : </b>Salted salmon with fresh cucumber</p>
          <p><b>Desert : </b>Chocolate </p>
          <p><b>Selected Drink : </b>Juice</p>
          <div className='drinkSelection'>
            <div className='drink'>
            <img
                className='drinkImg'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutILygE6-EBBX5lvrbPnwWtV1tIXgmjA9eg&usqp=CAU'
                alt='Drink 1'
                style={{ borderRadius: '10px' }} // Apply border radius to drink images
            />
          <button>Select</button>
        </div>
        <div className='drink'>
          <img className='drinkImg'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrb9u7lBZx8Ts009KZ3sAhbZhvgWXvAyppRA&usqp=CAU'
            alt='Drink 2'
            style={{ borderRadius: '10px' }} // Apply border radius to drink images
          />
          <button>Select</button>
        </div>
        <div className='drink'>
          <img className='drinkImg
          '
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPp5yfTCo6iWYsfMQDL8RaNnboqbcdRms7syyS_LBCRDFoRcV9t8eGojUzAWh4BZL8_Y&usqp=CAU'
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

export default Series2