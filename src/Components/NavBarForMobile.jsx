import React from 'react'
import './style.css'
import  {FaSearch, FaCartPlus} from 'react-icons/fa';
import { IconBase } from 'react-icons';
const NavBarForMobile = () => {
  return (
    <div className='row mobile-navbar mx-auto' id = 'mob-nav'>
        <div className='col-3 mobile-nav-logo'>
            <h1>Salehub</h1>
        </div>
        <div className='col-6 mobile-nav-search Fa FaSearch icon'>
            <input 
            className='mobile-searchbar'
            placeholder=" Search "  
            
            />
            <FaSearch id='mobile-nav-search-icon'/>
        </div>
        <div className='col-2 mobile-nav-btn'>
            <button className='btn btn-light'>&#9776;</button>
        </div>
    </div>
  )
}

export default NavBarForMobile