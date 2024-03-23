import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNum, setNewPhoneNum] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneNumChange = (event) => {
    setNewPhoneNum(event.target.value);
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          number: <input value={newPhoneNum} onChange={handlePhoneNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <div key={person.name}>
          {person.name}: {person.number}
        </div>
      )}
    </div>
  )
}

export default App
