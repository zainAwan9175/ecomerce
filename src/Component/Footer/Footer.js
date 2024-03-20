import React from 'react'
import footerLogo from "../Asets/logo.png"
import instagram from "../Asets/instagram_icon.png"
import pinterest from "../Asets/pintester_icon.png"
import wattsapp from "../Asets/whatsapp_icon.png"
import "./Footer.css"

function Footer() {
  return (
    <div className='mainfooter'>
      <div className='logofooter'>
        <img src={footerLogo}></img>
        <h1>SHOPPER</h1>
      </div>
      <div className='company'>
        <p>Company</p>
        <p>Products</p>
        <p>Offices</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <div className='app'>
       <div className='box'><img src={wattsapp}></img></div>
       <div className='box'><img src={pinterest}></img></div>
       <div className='box'><img src={instagram}></img></div>

      </div>

      <div className='copy'>
        <hr className='copyline'></hr>
        <p>Copyright @ 2024 - All Right Reserved</p>

      </div>
    </div>
  )
}

export default Footer
