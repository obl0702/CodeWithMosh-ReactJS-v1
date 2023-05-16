import React, { useEffect, useState } from 'react'
import LessonListItem from './lessons/LessonListItem'
import LessonAlert from './lessons/LessonAlert'
import LessonButton from './lessons/LessonButton'
import LessonSharingState from './lessons/LessonSharingState'
import LessonExpandableText from './lessons/LessonExpandableText'
import LessonForm01 from './lessons/LessonForm01'
import "./index.css"
import ExpenseTracker from './expense-tracker/components/MainApp'
import TableMultiSelect from './components/TableMultiSelect'




const App = () => {

  return (
    <>
      <div>
        <ExpenseTracker/>
      </div>
      
      {/**<TableMultiSelect/> */}
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