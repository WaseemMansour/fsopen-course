import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import phonebookServie from './services/phonebook'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newPhoneNum, setNewPhoneNum] = useState('')
  const [filter, setFilter] = useState('');

  const [persons, setPersons] = useState([])

  useEffect(() => {
    phonebookServie
      .getAll()
      .then(initialPhonebook => {
        setPersons(initialPhonebook);
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

    phonebookServie
      .create(newPerson)
      .then(createdPerson => {
        setPersons(persons.concat(createdPerson));
        setNewName('');
        setNewPhoneNum('');
      })
    
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
