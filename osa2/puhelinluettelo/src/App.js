import React, { useState, useEffect } from 'react'
import personsService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsOfInterest from './components/PersonsOfInterest'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameFilter, setNewNameFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => 
        setPersons(initialPersons))
  }, [])

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
      personsService
        .addPerson({name: newName, number: newNumber})
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson))
          setNewName('')
          setNewNumber('')
        })
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
