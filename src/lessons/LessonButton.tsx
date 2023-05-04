import React, { useState } from 'react'
import Button from '../components/Button'
import Alert from '../components/Alert'


function LessonButton(){
  
    const [alertVisible, setAlertVisibility] = useState(false);

    return (
    <>
    {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>BB</Alert>}
    <Button onClick={()=> setAlertVisibility(true)}>Click Here</Button>
    </>
  )
}

export default LessonButton