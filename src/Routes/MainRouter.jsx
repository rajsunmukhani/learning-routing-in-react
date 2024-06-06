import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Users from '../Components/Users'
import NotFound from '../Components/NotFound'

const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default MainRouter