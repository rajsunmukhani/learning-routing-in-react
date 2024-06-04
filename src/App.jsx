import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Users from './Components/Users'

const App = () => {
  return (
    <div className='p-10'>
      <Nav/>
      <Home/>
      <About/>
      <Users/>
    </div>
  )
}

export default App