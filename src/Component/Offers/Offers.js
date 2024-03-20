import React from 'react'
import "./Offers.css"
import offerimg from "../Asets/exclusive_image.png"
function Offers() {
  return (
    <div className='offermain'>
        <div className='offerleft'>
           <h1>Exclusive<br></br>
            Offers For You</h1>
            <h4>ONLY ON BEST SELLER PRODUCTS</h4>
            <button className='check'>CHECK NOW</button>
        </div>

        <div className='offerright'>
         <img src={offerimg} className='offerimg'></img>
        </div>

      
    </div>
  )
}

export default Offers
