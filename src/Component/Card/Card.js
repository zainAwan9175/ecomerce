import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
function Card({image,name,new_price,old_price ,id}) {
  return (
    <div className='mainc'>
        <div>
       <Link to={`/product/${id}`} ><img src={image} className='p-img'></img></Link> 

        </div>
     
        <div className='data'>
        <p>{name}</p>
        <div className='price'>
        <p className='oldprice'>${old_price}</p>
        <p>${new_price}</p>
        </div>
     
      
        </div>
     
    </div>
  )
}

export default Card
