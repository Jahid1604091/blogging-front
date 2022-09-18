import React from 'react'
import styled from 'styled-components'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
const Navbar = () => {
  let isAuthenticated = false
  return (
    <Wrapper>

      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""><HiMenu size={25} /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="menu navbar-nav mb-2 mb-lg-0 ">
              <li><a href="/" className="menu-link">Home</a></li>
              <li className="has-dropdown">
                <a href="#" className="menu-link"
                >Categories
                  <span className="arrow"></span>
                </a>
                <ul className="submenu">
                  <li className="has-dropdown">
                    <a href="#" className="menu-link"
                    >IoT Sensors & Data Acquisition Devices
                      <span className="arrow"></span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="products.html" className="menu-link">RPM Beacon</a>
                      </li>
                      <li>
                        <a href="products.html" className="menu-link">Weather Beacon</a>
                      </li>
                      <li>
                        <a href="products.html" className="menu-link">Multi Channel Temperature DAQ</a>
                      </li>
                      <li>
                        <a href="products.html" className="menu-link">Custom Data Acquisition Devices & Beacons</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#" className="menu-link">RPM Beacon</a></li>
                  <li><a href="#" className="menu-link">Weather Beacon</a></li>
                  <li className="has-dropdown">
                    <a href="#" className="menu-link"
                    >Full Stack Development
                      <span className="arrow"></span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="#" className="menu-link">Wordpress Development</a>
                      </li>
                      <li>
                        <a href="#" className="menu-link">Front End Development</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="#" className="menu-link"
                        >MEAN Stack Development
                          <span className="arrow"></span>
                        </a>
                        <ul className="submenu">
                          <li><a href="#" className="menu-link">MongoDb</a></li>
                          <li><a href="#" className="menu-link">ExpressJS</a></li>
                          <li><a href="#" className="menu-link">AngularJS</a></li>
                          <li><a href="#" className="menu-link">NodeJS</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" className="menu-link">Back End Development</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#" className="menu-link">UI/UX Design</a></li>
                </ul>
              </li>
              <li className="has-dropdown">
                {isAuthenticated ? <>
                  <a href="#" className="menu-link"
                  >My Profile
                    <span className="arrow"></span>
                  </a>
                  <ul className="submenu">
                    <li><a href="#" className="menu-link">Machine Monitoring</a></li>
                    <li><a href="#" className="menu-link">Environment Monitoring</a></li>
                    <li><a href="#" className="menu-link">Energy & Utility Monitoring</a></li>
                    <li><a href="#" className="menu-link">Plant Control & Monitoring Systems</a></li>

                  </ul>
                </> :
                  <>
                    <a href="#" className="menu-link"
                    >Account
                      <span className="arrow"></span>
                    </a>
                    <ul className="submenu">
                      <li><Link to="/login" className="menu-link">Login</Link></li>
                      <li><Link to="/register" className="menu-link">Register</Link></li>
                    </ul>
                  </>
                }
              </li>

              <li className="has-dropdown">
                <a href="#" className="menu-link"
                >Blogs
                  <span className="arrow"></span>
                </a>
                <ul className="submenu">
                  <li><a href="#" className="menu-link">All Blogs</a></li>
                  {isAuthenticated && <li><a href="#" className="menu-link">My Blogs</a></li>}
                </ul>
              </li>

            </ul>

          </div>
        </div>
      </nav>


    </Wrapper>
  )
}

const Wrapper = styled.nav`

header {
  background-color: #fff !important;
  z-index: 999;
  padding-left: 1.5em;
  position: sticky;
  top: 0;
  box-shadow: 0 3px 5px -6px black; 
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  z-index: 999;
}

.navbar-toggler{
  border:0 ;
}

.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
  outline: none;
  box-shadow: none; 
}

.menu li {
  list-style: none; 
 
}

.menu li a {
  transition:var(--transition) ;
  display: block;
  text-decoration: none;
  padding: 1em 1.5em;
  font-size: 1rem;
  color: #000; 

}

/* Styling submenu */
.has-dropdown {
  position: relative; 
}

.submenu {
  position: absolute;
  left: 0;
  background-color: #fff;
  white-space: nowrap;
  padding: 1.5em 0;
  min-width: 16em;
  border-left: 2px solid var(--clr-red-light);
  /* hide submenus */
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top center;
  transition: all 0.4s ease; 
}
.menu,.navbar-toggler{
    margin-left: auto;
    margin-right: auto;
}

.submenu > li > a {
  padding: 0.8em 1.5em; 
}

.submenu .submenu {
  left: 100%;
  top: 0; 
}

.submenu .submenu .submenu {
  left: 100%;
  top: 0; 
}

.menu > li:hover > a {
  color: var(--clr-red-light) ;
  background-color:var(--clr-grey-9) ;
  
}

.menu > li:hover > a,
.submenu > li:hover > a {
  color: var(--clr-red-light) ;
  background-color:var(--clr-grey-9) ;
}

/* Arrows */
.arrow {
  width: 0.5em;
  height: 0.5em;
  display: inline-block;
  vertical-align: middle;
  border-left: 0.15em solid currentColor;
  border-bottom: 0.15em solid currentColor;
  transform: rotate(-45deg);
  margin-top: -0.25em;
  margin-left:5px ;
  transition: transform 100ms ease-in-out; 
}

/* Reveal  */
.menu > li:hover > a + .submenu,
.submenu > li:hover > a + .submenu {
  opacity: 1;
  transform: scaleY(1); 
}

/* ANIMATE aRROWS */
.menu > li:hover > a > .arrow,
.submenu > li:hover > a > .arrow {
  transform: rotate(225deg); 
}

@media screen and (min-width: 992px) {
  .navbar{
    box-shadow: 0 3px 8px -6px black; 
  }
 } 
  

@media screen and (max-width: 78.75em) {
  .submenu .submenu .submenu {
    left: -100%;
    top: 0.5em; }
  .submenu {
    min-width: 16em; } 
  }

@media screen and (max-width: 991px) {
  .menu>li{
    border-bottom:2px solid var(--clr-grey-9) ;
    &:last-child{
      border-bottom:0 ;
  }
  }
  .menu > li > a {
    font-size: 1rem;
    color: var(--dark); }
  .submenu > li > a {
    font-size: 1rem; }
  .submenu {
    top: 0;
    padding-left: 1.5em;
    border-left: 2px solid var(--clr-grey-5); }
  .submenu .submenu {
    left: 0;
    top: 0; }
  .submenu .submenu .submenu {
    left: 0;
    top: 0; }
  .menu > li:hover > a + .submenu,
  .submenu > li:hover > a + .submenu {
    position: relative; }
  }

`

export default Navbar