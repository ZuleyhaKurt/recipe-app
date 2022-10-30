import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Detail from '../components/Detail'

import About from '../components/About'
import Home from '../components/Home'
import Login from '../components/Login'
import PrivateRouter from './PrivateRouter'
const Router = () => {
    return (
        <BrowserRouter>
            
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateRouter />}>
                <Route path="" element={<Home />} />
            </Route>
            <Route path="/about" element={<About />}/>
            <Route path="/details" element={<Detail />} />
        </Routes>
           
    </BrowserRouter>
  )
}

export default Router