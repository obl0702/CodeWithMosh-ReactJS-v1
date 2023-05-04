import React, { useState } from 'react'
import LessonListItem from './lessons/LessonListItem'
import LessonAlert from './lessons/LessonAlert'
import LessonButton from './lessons/LessonButton'
import LessonSharingState from './lessons/LessonSharingState'
import LessonExpandableText from './lessons/LessonExpandableText'
import LessonForm01 from './lessons/LessonForm01'
import "./index.css"
import ExpenseList from './expense-tracker/components/ExpenseList'


const App = () => {

  const [expenses, setExpenses] = useState([
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 2, description: 'bbb', amount: 10, category: 'Utilities'},
    {id: 3, description: 'ccc', amount: 10, category: 'Utilities'}
  ]);

  return (
    <>
      <div>
        <ExpenseList expenses={expenses} 
        onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
      </div>
      
      
      {/*<LessonListItem/>*/}
      {/*<LessonAlert/>*/}
      {/**<LessonButton/> */}
      {/**<LessonSharingState/> */}
      {/**<LessonExpandableText/> */}
      {/**<LessonForm01/> */}
    </>
  )
}

export default App