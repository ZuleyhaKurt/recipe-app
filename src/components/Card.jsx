import React from 'react'

const Card = ({ recipe }) => {
    console.log(recipe)
  return (
      <div>
          <p>{recipe?.label}</p>
          <p>{recipe?.image}</p>
    </div>
  )
}

export default Card