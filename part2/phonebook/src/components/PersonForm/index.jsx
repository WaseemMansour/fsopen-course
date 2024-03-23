const PersonForm = ({ values, handlers }) => {
  const { newName, newPhoneNum } = values;
  const { handleInputChange, handlePhoneNumChange, handleSubmit } = handlers;
  
  return (
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
  );
}

export { PersonForm };
