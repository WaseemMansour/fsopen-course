const Persons = ({ list, onDeletePerson }) => {
  return (
    <>
      {list.map(person => 
        <div key={person.name}>
          {person.name}: {person.number}
          <button onClick={() => onDeletePerson(person)}>Delete</button>
        </div>
      )}
    </>
  );
}

export { Persons };
