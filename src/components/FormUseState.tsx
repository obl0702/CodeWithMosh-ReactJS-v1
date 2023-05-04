import React, { FormEvent, useState } from 'react'

const FormUseState = () => {
  
    const [person, setPerson] = useState({
        name: '',
        age: 0
    });
    
    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        console.log(person);
    }
  
    return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input id="name" onChange={(event) => setPerson({...person, name: event.target.value})} value={person.name} type="text" className="form-control" />
        </div>
        {/**div.mb-3>label.form-label+input[type=number].form-control */}
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input id="age" onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})} value={person.age} type="number" className="form-control" />
        </div>
        {/**button.btn.btn-primary */}
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
        
  )
}

export default FormUseState