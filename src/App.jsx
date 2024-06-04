import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Users from './Components/Users'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='p-10'>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      
    </div>
  )
}

export default App