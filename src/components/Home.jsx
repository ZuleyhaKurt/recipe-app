import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';

const Home = () => {


    const [query, setQuery] = useState("Pizza")
    const [meal, setMeal] = useState("Lunch")
    const [recipe, setRecipe] = useState("")
    
    const APP_ID = "e0550b67";
    const APP_KEY = "b9fce4db63d154f4247d4d944c3fba8f";
  
    const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
    
    
    const getData = async () => {
      try {
        const app = await axios(url)
        const { data: { hits } } = app
        console.log(hits)
        setRecipe(hits)
      } catch (error) {
        console.log(error)
      }
  
    }

  console.log(recipe)
  
  useEffect(() => {
  getData()
  
    },[])
    


  return (
      <div>
          <Navbar/>
    </div>
  )
}

export default Home