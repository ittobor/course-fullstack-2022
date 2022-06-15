const PersonForm = ({nameValue, numberValue, onChangeNameHandler, onChangeNumberHandler, onSubmitHandler}) => {
    return (
        <form onSubmit={onSubmitHandler}>
        <div>
          Name: <input value={nameValue} onChange={onChangeNameHandler}/>
        </div>
        <div>
          Number: <input value={numberValue} onChange={onChangeNumberHandler}/>
        </div>
        <div>
          <button type="submit">Add entry</button>
        </div>
      </form>
    )
}

export default PersonForm