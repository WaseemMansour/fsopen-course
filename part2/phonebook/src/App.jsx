import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { Notification } from './components/Notification'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import phonebookServie from './services/phonebook'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newPhoneNum, setNewPhoneNum] = useState('')
  const [filter, setFilter] = useState('');
  const [notificationMessage, setNotificationMessage] = useState();
  const [notificationType, setNotificationType] = useState('success');

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
      const isConfirmed = confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      
      if (!isConfirmed) return;

      const personToUpdate = [...persons].find(person => person.name === newName);
      personToUpdate.number = newPhoneNum
      
      
      phonebookServie
        .update(personToUpdate.id, personToUpdate)
        .then(updatedPerson => {
          setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson));
          setNewName('');
          setNewPhoneNum('');

          setNotificationType('success');
          setNotificationMessage(
            `Updated '${personToUpdate.name}'`
          )
          
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        })
    } else {
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

          setNotificationType('success');
          setNotificationMessage(
            `Added '${createdPerson.name}'`
          )
          
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        })
      
    }

    
  }

  const handleDeletePerson = ({name, id}) => {
    window.confirm(`Are you sure you want to delete ${name}?`);

    const updatedPersons = persons.filter(person => person.id !== id);
    phonebookServie
      .remove(id)
      .then(() => setPersons(updatedPersons))
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType} />
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm 
        values={{ newName, newPhoneNum }} 
        handlers={{ handleInputChange, handlePhoneNumChange, handleSubmit }}
      />
      <h2>Numbers</h2>
      <Persons 
        list={personsToShow} 
        onDeletePerson={handleDeletePerson}
      />
    </div>
  )
}

export default App
