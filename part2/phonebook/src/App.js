import { useState, useEffect } from 'react';
import axios from 'axios'
import Persons from './components/Persons.js';
import Filter from './components/Filter.js';
import Addnew from './components/Addnew.js';
import React from 'react';


const App = () => {
  const [persons, setPersons] = useState([])
  const [allPersons, setAllPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  let [newId, setNewId] = useState(4)

  const addName = (event) => {
    event.preventDefault()
    setNewId(newId += 1)
    const personObj = {
      name: newName,
      number: newNumber,
      id: newId
    }

    setNewName('');
    if (testperson.length !== 0) {
        alert(newName + ' is already added in the phonebook.')
        setNewId(newId -= 1)
      } else {
        setAllPersons(allPersons.concat(personObj))
      }
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value.toLowerCase())
    const filteredPersons = () => allPersons.filter(person => person.name.toLowerCase().match(newFilter))
    setPersons(filteredPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}></Filter>
      <h2>
        add new
      </h2>
      <Addnew addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} allPersons={allPersons}></Persons>
    </div>
  )
}

export default App
