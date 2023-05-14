import React, { useState } from 'react'
import ExpenseList from './ExpenseList';

type Expense = {
    id: number;
    description: string;
    amount: number;
    category: string;
  };

const MainApp = () => {
  
    const [expenses, setExpenses] = useState<Expense[]>([
        {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
        {id: 2, description: 'bbb', amount: 10, category: 'Adminstration'},
        {id: 3, description: 'ccc', amount: 10, category: 'Utilities'}
      ]);
  
    return (
        <div>
        <ExpenseList expenses={expenses} 
        onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
      </div>
  )
}

export default MainApp