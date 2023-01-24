import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MenMegaMenu from './MenMegaMenu';
import  {FaSearch, FaCartPlus} from 'react-icons/fa';
import './style.css'
 
const NavigationBar = ({showmendropmenu,  closemendropmenu}) => {
  return (
    <div>
      {/* -----------------------My navbar-----------------------------*/}
      
      <div className='row navbar sticky-top mx-auto' id='navbar-web'>
        <div className='col menu '>
          <div className='row menu-row text-center'>
            <div className='col left-part home'>Home</div>
            <div className='col laft-part pages'>Pages</div>
            <div className='col laft-part women dropdown has-megamenu'>Women</div>
            <div className='col laft-part men'>Men</div>
            <div className='col laft-part blog'>Blog</div>
          </div>
        </div>
        <div className='col logo'>
          <h4 className='text-center h1'>Salehub</h4>
        </div>

          <div className='col options'>
            <div className='row option-row'>
              <div className='col right-part search text-center'>< FaSearch id='search-icon'/><span className='p-3'>Search</span></div>
              <div className='col right-part account text-center'>Account</div>
              <div className='col right-part cart text-center'><FaCartPlus id = 'cart-icon'/><span className='p-3'>Cart</span><div className='items-in-cart'>0</div></div>
            </div>
          </div>
      </div> 

    
      {/* <nav className="navbar navbar-expand-lg bg-white color-black">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item active"> <a className="nav-link" href="#">Home </a> </li>
              <li className="nav-item"><a className="nav-link" href="#"> About </a></li>
              <li className="nav-item"><a className="nav-link" href="#"> Services </a></li>
              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link" href="#" data-bs-toggle="dropdown"> Mega menu  </a>
                <div className="dropdown-menu drop-toggle megamenu w-100" data-toggle="dropdown" role="menu">
                  <MenMegaMenu />
                </div>
              </li>
            </ul>
            <a className="navbar-brand align-item-center" href="#">Brand</a>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Dropdown right </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                  <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

    </div>

  )
}

export default NavigationBar