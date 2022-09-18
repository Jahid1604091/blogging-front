import React from 'react'
import { useLocation } from 'react-router-dom'
import Body from './Body'
import Navbar from './Navbar'
import TopNav from './TopNav'

const Header = () => {
  const { pathname } = useLocation()
  
  return (
    <>
    <TopNav />
      {pathname === '/' &&
        <>
          <Body />
        </>
      }

      <Navbar />
    </>
  )
}

export default Header