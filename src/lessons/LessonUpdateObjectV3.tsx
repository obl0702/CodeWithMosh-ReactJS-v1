import React, { useState } from 'react'

function LessonUpdateObjectV3 () {
  
    const [cart, setCart] = useState({
        discount: .1,
        items:[
            {id:1, title:'Product1', quantity:1},
            {id:2, title:'Product2', quantity:1}
        ]
    });

    //When id=1, quantity+1
    const handleClick = () => {
        setCart({...cart, 
                items: cart.items.map(
                    item => item.id===1 ? {...item, quantity: item.quantity+1} : item)})
    }

    return (
    <div>LessonUpdateObjectV3</div>
  )
}

export default LessonUpdateObjectV3