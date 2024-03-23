const Persons = ({ list }) => {
  return (
    <>
      {list.map(person => 
        <div key={person.name}>
          {person.name}: {person.number}
        </div>
      )}
    </>
  );
}

export { Persons };
