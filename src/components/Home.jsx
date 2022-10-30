import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
import homesvg from "../img/home.svg"
import Navbar from './Navbar';

const Home = () => {


    const [query, setQuery] = useState("")
    const [meal, setMeal] = useState("Breakfast")
    const [recipes, setRecipes] = useState("")
    
    const APP_ID = "e0550b67";
    const APP_KEY = "b9fce4db63d154f4247d4d944c3fba8f";
  
    const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
    
    
    const getData = async () => {
      try {
        const app = await axios(url)
        const { data: { hits } } = app
          console.log(hits)
          if (!hits) {
              <h1>Loading</h1>
          }
        setRecipes(hits)
      } catch (error) {
        console.log(error)
      }
  
    }


    
    console.log(query)
   

  return (
      <div className='bg-yellow-500'>
          <Navbar/>
          <div className="p-3">
          <h1 className='text-center'>Food App</h1>
            
            <div class="flex my-5 gap-5  justify-center">
                  
                      <input type="text" value={query} name="" id="" className='w-[15rem] rounded-lg' onChange={(e)=>setQuery(e.target.value)} />
                  
                      <button  onClick={()=>getData()} className='bg-red-600 py-1 px-5 font-bold text-md text-slate-300 rounded-md active:scale-95 active:bg-slate-300 active:text-slate-600 duration '>Search</button>
                  
                      <select onChange={(e)=>setMeal(e.target.value)} value="select" id="meal" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                    <option value="Coffee">Coffee</option>
                </select>
            </div>
              
          </div>
          <div className='flex flex-wrap w-[100vw] gap-5 items-center justify-center'>
          {recipes ? (
                  recipes.map((item, index) => {
                      const { recipe } = item;
                      console.log(recipe)
                    return (
                      <div>
                        <Card key={index} recipe={recipe} />
                        </div>
                      )
                    })
              ) : <img src={homesvg} className="w-96 mt-32 mb-8" alt=""></img>
                  
            }
          </div>
         

    </div>
  )
}

export default Home