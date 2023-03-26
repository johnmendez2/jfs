import React from 'react'
import {HashRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom'
import {Home} from './Components/Home'
import {Login} from './Components/Login'
import {Signup} from './Components/Signup'
import  NotFound  from './Components/NotFound'
import { AddProducts } from './Components/AddProducts'
import { Cart } from './Components/Cart'
import { FAQ } from './Components/FAQ'
import Productpage from './Components/Productpage'
import Landingpage from './Components/Landingpage'
import grails from './logo.png'

function App() {
  return (
        <div>
          <Routes>
        <Route exact path="/" element = {<Landingpage></Landingpage>}/>
        <Route exact path="/products" element = {<Home></Home>}/>
        <Route path="/signup" element={<Signup></Signup>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/addproductsXJ455" element={<AddProducts></AddProducts>}/>
        <Route path="/cart" element={<Cart></Cart>}/>
        <Route path="/:productId" element={<Productpage/>} />
        <Route path="/FAQ" element={<FAQ></FAQ>}/>
        <Route component={NotFound}/>
        </Routes>
        </div>

    
  );
}

export default App
