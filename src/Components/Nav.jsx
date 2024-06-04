import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-center gap-8'>
      <a className= "hover:text-red-600" href="/">Home</a>
      <a className="hover:text-red-600" href="/about">About</a>
      <a className="hover:text-red-600" href="/users">Users</a>
    </div>
  )
}

export default Nav