import React from 'react'
import { useState } from 'react'
import Entry from './components/Entry'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addEntry = (event) => {
    event.preventDefault()
    const entry = {
      name: newName
    }
    setPersons(persons.concat(entry))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =>
          <Entry key={person.name} person={person} />
        )}
    </div>
  );
}

export default App;
