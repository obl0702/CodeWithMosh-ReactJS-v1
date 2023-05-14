import React, { useEffect, useState } from 'react'

type Expense = {
    id: number;
    description: string;
    amount: number;
    category: string;
  };

const GenericFunctions = () => {
  
    const [expenses, setExpenses] = useState<Expense[]>([
        {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
        {id: 2, description: 'bbb', amount: 10, category: 'Adminstration'},
        {id: 3, description: 'ccc', amount: 10, category: 'Utilities'}
      ]);

    useEffect(() => {
    
        //handleUpdateProperty("description", "Description111");
        //handleUpdateProperty("category", "Adminstration");
    
        //Remove Other than Utilities
        //const filteredExpenses = filterArrayByPropertyIN(expenses, 'category', 'Utilities');
    
    
        const filteredExpenses = filterArrayByPropertyNotIN(expenses, 'category', 'Utilities');
    
    
        setExpenses(filteredExpenses);
    
      }, []);
    
      useEffect(() => {
        
        console.log(expenses);
    
      }, [expenses]);
    
      const handleUpdateProperty = (field: keyof Expense, value: string) => {
        const updatedExpenses = expenses.map(expense => ({
          ...expense,
          [field]: value
        }));
        setExpenses(updatedExpenses);
      };
      
      //Keep the pass in property
      function filterArrayByPropertyIN<T, K extends keyof T>(array: T[], property: K, value: T[K]): T[] {
        return array.filter(item => item[property] === value);
      }
    
      //Keep other than pass in property
      function filterArrayByPropertyNotIN<T, K extends keyof T>(array: T[], property: K, value: T[K]): T[] {
        return array.filter(item => item[property] !== value);
      }
  
    return (
    <div>GenericFunctions</div>
  )
}

export default GenericFunctions