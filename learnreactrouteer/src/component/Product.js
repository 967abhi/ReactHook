import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import '../index.css'

export const Product = () => {
  return (
    <div>
    <div>
    
    <input type="Search" placeholder='Search Products' />
    </div>
    <nav>
    <NavLink to='Featured'>Featured</NavLink>
    <NavLink to='New'>New </NavLink>
    
    </nav>
    <Outlet/>
    </div>
  )
}
