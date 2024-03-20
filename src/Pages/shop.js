import React from 'react'
import Hero from '../Component/Hero/Hero'
import Poplr from '../Component/Popler/Poplr'
import Collection from '../Component/Newcollection/Collection'
import Offers from '../Component/Offers/Offers'
import News from '../Component/News/News'
import "./Shop.css"
function shop() {
  return (
    <div className='shopmain'>
        
    <Hero />  
    <Poplr />
    <Offers />
    <Collection />
    <News />
    </div>
  )
}

export default shop
