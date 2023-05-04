import React, { useState } from 'react'

function LessonUpdateObject() {
  
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John",
        },
    });

    const handleClick = () => {
        //this is not a good example as player not add ..., in future could have new object inside player.
        //setGame({...game, player: {name: 'Bob'}}); 

        setGame({...game, player: {...game.player, name: 'Bob'}});
    }

    return (
    <div>LessonUpdateObject</div>
  )
}

export default LessonUpdateObject