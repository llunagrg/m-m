import React from 'react'
import logoo from "./../../Assets/logoo.png";
import "./index.css"

function Header() {
  return (
    <div className='header'>
        <div className='container'>
            <div className='topnav'>
                <div className='search'><i class="bi bi-search"></i></div>
                <div className='logo'><img src={logoo}/></div>
                <div className='shop'><i class="bi bi-cart-check"></i></div>
            </div>
            <div className='navbar'>
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
                <li>Portfolio </li>
              </ul>
            </div>
            <div className='navtext'></div>
        </div>
    </div>
  )
}

export default Header