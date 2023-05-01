import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/stemlogo.png'
import { Link } from "react-router-dom";
import { isLogging, logout, login } from "./../../near/utils";

const Menu = () => (
  <>
    <Link to="/"><p>Explore</p> </Link>

  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [user, setUser] = useState(true)

  const handleLogout = () => {
    logout()
  }
  const handleLogin = () => {
    login()
  }

  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          <Link to="/">
            <h1>StemTas</h1>
          </Link>
        </div>
        <div className="navbar-links_container">
          <input type="text" placeholder='Search Item Here' autoFocus={true} />
          <Menu />
          {/* {"Wakili" && <Link to="/"><p onClick={handleLogout}>Logout</p></Link> }
         */}
        </div>
      </div>
      <div className="navbar-sign">
        {isLogging() ? (
          <>
            {"Wakili" && <Link to="/myArchiNfts/Wakili"><p>My StemNFTS</p></Link>}
            {"Wakili" && <Link to="myListing/wakili"><p>My Auctions</p></Link>}
            <Link to="/create">
              <button type='button' className='primary-btn' >Create</button>
            </Link>
            <Link to="/">
              {console.log("Wakili ", isLogging)}
              <button type='button' className='secondary-btn' onClick={handleLogout}>Disconnect</button>
            </Link>
          </>
        ) : (
          <>
            <button type='button' className='primary-btn' onClick={handleLogin}>Connect</button>
          </>
        )}
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
              {isLogging() ? (
                <>
                  {"Wakili" && <Link to="/myArchiNfts/Wakili"><p>ArchiNFTs</p></Link>}
                  {"Wakili" && <Link to="myListing/wakili"><p>Listing</p></Link>}
                  <Link to="/create">
                    <button type='button' className='primary-btn' >Create</button>
                  </Link>
                  <Link to="/">
                    {console.log("Wakili ", isLogging)}
                    <button type='button' className='secondary-btn' onClick={handleLogout}>Disconnect</button>
                  </Link>
                </>
              ) : (
                <>
                  <button type='button' className='primary-btn' onClick={handleLogin}>Connect</button>
                </>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
