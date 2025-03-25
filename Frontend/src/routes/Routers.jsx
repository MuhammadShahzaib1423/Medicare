import React from 'react'
import {Routes, Route} from 'react-router-dom'
import DoctorDetail from '../pages/dOCTORdETAIL.JSX'
import Doctors from '../pages/Doctor.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Service from '../pages/Service.jsx'
import Signup from '../pages/Signup.jsx'
import Contact from '../pages/Contact.jsx'
 
const Routers = () => {
  return (
<Routes>
<Route path="/home" element={<Home/>}/>
<Route path='/doctors' element={<Doctors/>}/>
<Route path='/services' element={<Service/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/doctordetail' element={<DoctorDetail/>}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>
  )
}

export default Routers
   