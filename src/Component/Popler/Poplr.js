import React from 'react'
import data_product from '../Asets/data'
import Card from '../Card/Card'
import "./Popler.css"
function Poplr() {
  return (

    <div className='poplermain'>

<div className='line-popler'>
  <div className='size'>
   <h1>POPLUAR FOR WOMENS</h1>
   <hr className='line'></hr>

  </div>

</div>
     
      <div className='popmain'>
      {
        data_product.map((item)=>{
          return(<Card image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} id={item.id}/>)
        })
      }
      </div>
     
    </div>
  )
}

export default Poplr
