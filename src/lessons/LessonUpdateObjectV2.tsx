import React, { useState } from 'react'

function LessonUpdateObjectV2 () {
  
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  //To add new toppings
  const handleClick = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Banana']})
  }

    return (
    <div>LessonUpdateObjectV2</div>
  )
}

export default LessonUpdateObjectV2