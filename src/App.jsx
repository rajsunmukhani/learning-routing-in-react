import React from 'react'
import Nav from './Components/Nav'
import MainRouter from './Routes/MainRouter'

const App = () => {
  return (
    <div className='p-10'>
      <Nav/>

      <MainRouter/>
      
    </div>
  )
}

export default App