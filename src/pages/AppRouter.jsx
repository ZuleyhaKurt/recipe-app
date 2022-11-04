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
            
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
            <Route path="/about" element={<PrivateRouter/>} >
              <Route path="" element={<About />}/>
            </Route>
            <Route path="/details" element={<PrivateRouter/>} >
             <Route path="" element={<Detail/>}/>
            </Route>
                
         </Routes>
           
    </BrowserRouter>
  )
}

export default Router