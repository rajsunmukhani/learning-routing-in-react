import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-center gap-8'>
      <NavLink style={(e) => ({fontWeight :  e.isActive ? 700 : 400})} className={(e) => e.isActive ? "text-red-600" : ""} to="/">Home</NavLink>
      <NavLink style={(e) => ({fontWeight :  e.isActive ? 700 : 400})} className={(e) => e.isActive ? "text-red-600" : ""} to="/about">About</NavLink>
      <NavLink style={(e) => ({fontWeight :  e.isActive ? 700 : 400})} className={(e) => e.isActive ? "text-red-600" : ""} to="/users">Users</NavLink>
    </nav>
  )
}

export default Nav