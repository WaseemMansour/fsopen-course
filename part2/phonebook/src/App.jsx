import axios from 'axios'
import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newPhoneNum, setNewPhoneNum] = useState('')
  const [filter, setFilter] = useState('');

  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3003/persons')
      .then(response => {
        setPersons(response.data);
      })
  },[])

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneNumChange = (event) => {
    setNewPhoneNum(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const checkNameAlreadyAdded = (input) => {
    return persons.some(person => person.name === input);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(checkNameAlreadyAdded(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newPhoneNum
    }
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewPhoneNum('');
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm 
        values={{ newName, newPhoneNum }} 
        handlers={{ handleInputChange, handlePhoneNumChange, handleSubmit }}
      />
      <h2>Numbers</h2>
      <Persons list={personsToShow} />
    </div>
  )
}

export default App
