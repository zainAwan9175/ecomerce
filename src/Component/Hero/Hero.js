import React from 'react'
import hand from "../Asets/hand_icon.png"
import heroimg from "../Asets/hero_image.png"
import "./Her.css"
function Hero() {
    let a=">"
  return (
    <div className='mainhero'>

        <div className='hero-left'>
        <h1 className='new'>New Arrivals only</h1>
        <div className='handdiv'>
        <h1>new</h1>
        
        <img src={hand} className='hand'></img>
        <br></br>
   
        </div>
        <div className='coll'>  <h1 >collections <br></br> for everyone</h1></div>
      <button className='latest'>Latest Collection -{a}</button>
        </div>
        <div className='hero-right'>
            <img src= {heroimg} className='heroimg'></img>

        </div>
      
        

    </div>
  )
}

export default Hero
