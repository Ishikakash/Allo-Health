import React from 'react'
import './series.css';

const Series = () => {

  return (
    <div className='series'>
      <div className='product'>     
        <div className='productImage'>
          <img className='img'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_Mu9W2kHDhAAOLy797lgb2ZiO2UPbT3Hrg&usqp=CAU'
            alt='Product'
            style={{ borderRadius: '10px' }}// Apply border radius to the product image
          />
        </div>
        <div className='productDescription'>
          <p style={{fontSize: "15px"}}>3 course meals + drinks</p>
          <p><b>Naan roti, Daal, Paneer, salad, raita</b></p>
          <p><b>Starter : </b>Salted salmon with fresh cucumber</p>
          <p><b>Desert : </b>Chocolate cake</p>
          <p><b>Selected Drink : </b>Juice</p>
          <div className='drinkSelection'>
            <div className='drink'>
            <img
                className='drinkImg'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLAiAgJ2dDYmXeN3f0ns5M6iiSyA5TwUFBg&usqp=CAU'
                alt='Drink 1'
                style={{ borderRadius: '10px' }} // Apply border radius to drink images
            />
          <button>Select</button>
        </div>
        <div className='drink'>
          <img className='drinkImg'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKlEXJN8A8bzDuc1IEUtrjp5JGr8LioTAExQ&usqp=CAU'
            alt='Drink 2'
            style={{ borderRadius: '10px' }} // Apply border radius to drink images
          />
          <button>Select</button>
        </div>
        <div className='drink'>
          <img className='drinkImg
          '
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKb_jL6r4GsIfFk8r8ZLYKp3DiUBKNAIFpw&usqp=CAU'
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

export default Series