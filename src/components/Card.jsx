import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ recipe,index}) => {

  const navigate=useNavigate()
    console.log(recipe)
  return (
      
       <div className="bg-slate-700 px-10 py-10 flex justify-center flex-col items-center w-30 h-[20rem] gap-4 shadow-xl shadow-slate-300 rounded-xl"
                  key={index}
                >
                  <p className="w-[340px] text-center font-semibold text-slate-200 ">
                    {recipe?.label}
                  </p>
                  <img
                    src={recipe?.image}
                    className="w-40 rounded-lg shadow-md shadow-slate-300"
                    alt=""
                  ></img>
                  <button
                    onClick={(e) => {
                      navigate("/details", { state: recipe });
                    }}
                    className=" bg-slate-800 text-slate-200 py-1 px-3 rounded-lg active:scale-95 mt-2 font-bold"
                  >
                    View More
                  </button>
                </div>
    
  )
}

export default Card