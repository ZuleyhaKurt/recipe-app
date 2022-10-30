import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home dataApp={dataApp} setDataApp={setDataApp} citys={citys} setCitys={setCitys} />} />
            <Route path="/about" element={<About />}/>
            <Route path="/github" element={<Github/>} />
        
            <Route path="/github" element={<Github/>} />
            </Routes>
           
    </BrowserRouter>
  )
}

export default Router