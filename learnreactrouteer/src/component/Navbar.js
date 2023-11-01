import React from 'react'
import { NavLink } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import { useAuth } from './auth'
// import './Navbar.css'
export const Navbar = () => {
    const navLinkStyle=({isActive})=>{
        return {
            fontWeight:isActive?'bold':'normal',
            textDecoration:isActive ? 'none': 'underline'
        }
    }
const auth=useAuth();

  return (
    <nav>
    <NavLink style={navLinkStyle} to="/Home">Home</NavLink>
    <NavLink style={navLinkStyle} to="/about">About</NavLink>
    <NavLink style={navLinkStyle} to="/product">Product</NavLink>
    <NavLink style={navLinkStyle} to='/profile'> Profile</NavLink>
    {
      !auth.user &&(
        <NavLink style={navLinkStyle} to='/login'>Login</NavLink>
      )
    }
    
    </nav>
  )
}
