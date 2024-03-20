import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css"
import logo from "../Asets/logo.png"
import cart from "../Asets/cart_icon.png"
import dropdown from "../Asets/nav-dropdown.png"
import cross from "../Asets/cancle.webp"

function Nav() {
  let [manu, setmanu] = useState("shop")
  const [manuDropDown, setmanuDropDown] = useState(false)


  const toggleMenu=function(){
    setmanuDropDown(!manuDropDown);
  }
  return (
    <div className='nav'>
      <div className='logo'>
        <img src={logo} alt="" className='log'></img>
        <p>SHOPPER</p>
      </div>
      <div>
      <ul className={`list ${manuDropDown ? 'activee' : ''}`}>

          <li onClick={() => { setmanu("shop") }}><Link to='/' className='links'>SHOP</Link> {manu === "shop" ? <hr className='active'></hr> : <></>}</li>
          <li onClick={() => { setmanu("men") }}> <Link to="/men" className='links'>MEN</Link>  {manu === "men" ? <hr className='active'></hr> : <></>}</li>
          <li onClick={() => { setmanu("women") }}> <Link to="/women" className='links'>WOMEN </Link>   {manu === "women" ? <hr className='active'></hr> : <></>}</li>
          <li onClick={() => { setmanu("kids") }}> <Link to="/kids" className='links'>KIDS</Link>{manu === "kids" ? <hr className='active'></hr> : <></>}</li>
        </ul>
        <img onClick={toggleMenu} src={dropdown} className={`dropdownIcon ${manuDropDown ? 'arow' : ''}`} alt="na"></img>
        <img src={cross}  onClick={toggleMenu} className={`cross ${manuDropDown  ? "cut" : ""}`}></img>

      </div>

      <div className='login'>
        <Link to="/login">  <button className='btnlogin'>login</button></Link>
        <Link to="/cart"><img src={cart} className='cart'></img></Link>
        <div className='cart-count'>0</div>

      </div>

    </div>
  )
}

export default Nav
