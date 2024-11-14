import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Signin from '../components/auth/Signin';
import Signup from '../components/auth/Signup';
import Product from '../pages/Product';
import AddProducts from '../pages/AddProducts';


const Router = () => {
  return (
    <>
    <Routes>
        
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Products' element={<Product/>}/>
        <Route path='/AddProducts' element={<AddProducts/>}/>

    </Routes>
    </>
  )
}

export default Router