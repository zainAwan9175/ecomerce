import React from 'react'
import "./Collection.css"
import collection from "../Asets/new_collections"
import "../Popler/Popler.css"
import Card from '../Card/Card'
function Collection() {
  return (
    <div className='colmain'>

     <div className='line-popler'>
  <div className='size'>
   <h1>NEW COLLECTION</h1>
   <hr className='line'></hr>

  </div>

    </div>


        
        <div className='popmain'>
            {
                collection.map((item)=>{

                    return(<Card  image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} id={item.id}/>)
                    
                })
            }
        </div>
     
      
    </div>
  )
}

export default Collection
