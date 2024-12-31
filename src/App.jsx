import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Service from './components/Service'
const App = () => {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App 
