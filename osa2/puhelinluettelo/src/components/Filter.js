const Filter = ({label, value, onChangeHandler}) => {
    return (
        <div>
        {label} <input value={value} onChange={onChangeHandler}/>
        </div>
    )
}

export default Filter