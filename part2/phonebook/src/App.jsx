import { useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhoneNum, setNewPhoneNum] = useState('')
  const [filter, setFilter] = useState('');

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
