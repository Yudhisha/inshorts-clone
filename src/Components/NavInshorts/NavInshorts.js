import React,{useState} from 'react'
import "./NavInshorts.css"
import HamburgerDrawer from "./HamburgerDrawer.js";

const NavInshorts = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className='icon'>
            <HamburgerDrawer setCategory={setCategory}/>
        </div>
        <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" height='80%'/>
    </div>
  )
}

export default NavInshorts