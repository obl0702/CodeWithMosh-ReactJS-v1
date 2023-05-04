import React from 'react'
import ListGroup from "../components/ListGroup";

function LessonListItem(){
    let items = ["New York", "San Francisco", "Tokyo", "London"];
  
    const handleSelectItem = (item: string) => {
      console.log(item);
    }
  
    return <><ListGroup items={items} heading="Cities" onSelectedItem={handleSelectItem}/></>
  }

export default LessonListItem