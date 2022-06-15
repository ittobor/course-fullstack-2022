import React from 'react'
import { useState } from 'react'
import Entry from './components/Entry'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsOfInterest from './components/PersonsOfInterest'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '+358401231244' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameFilter, setNewNameFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNewNameFilter(event.target.value)
  }

  const addEntry = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
      setNewName('')
      setNewNumber('')
    }
  }

  const personsOfInterest = (newNameFilter === '') 
                          ? persons
                          : persons.filter(person => 
                              person.name.toLocaleLowerCase().startsWith(
                                newNameFilter.toLocaleLowerCase())) 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter label='Filter names starts with :' value={newNameFilter} onChangeHandler={handleNameFilterChange} />
      <h3>Add new phonebook entry</h3>
      <PersonForm
          nameValue={newName}
          numberValue={newNumber}
          onChangeNameHandler={handleNameChange}
          onChangeNumberHandler={handleNumberChange}
          onSubmitHandler={addEntry} />
      <h3>Numbers</h3>
      <PersonsOfInterest personsOfInterest={personsOfInterest} />
    </div>
  );
}

export default App;
