import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/boy.png'
import { Link } from "react-router-dom";

const Menu = () => (
  <>

  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [user, setUser] = useState(true)


  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          <Link to="/">
            <h1>Albashi</h1>
          </Link>
        </div>
      </div>
      <div className="navbar-sign">
        <>
          <Link to="/"><p>History</p> </Link>
          <Link to="/"><p>Invoices</p></Link>
          <Link to="/"><p>Employees</p></Link>
          <Link to="/"><p>Funds</p></Link>
          <Link to="/create">
            <button type='button' className='primary-btn' >Create</button>
          </Link>
          <button type='button' className='primary-btn' onClick={""}>Connect</button>
        </>
      </div>


      <div className="navbar-menu">
        {toggleMenu ?
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center" >
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
            <div className="navbar-menu_container-links-sign">
              <>
                <Link to="/"><p>History</p> </Link>
                <Link to="/"><p>Invoices</p></Link>
                <Link to="/"><p>Employees</p></Link>
                <Link to="/"><p>Funds</p></Link>

                <Link to="/create">
                  <button type='button' className='primary-btn' >Create</button>
                </Link>
                <Link to="/">
                  {console.log("Wakili ")}
                  <button type='button' className='secondary-btn' onClick={""}>Disconnect</button>
                </Link>
                <button type='button' className='primary-btn' onClick={""}>Connect</button>
              </>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar
