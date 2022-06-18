const CountryFinder = ({value, onChangeHandler}) => {
    return (
        <div>
        Find countries <input value={value} onChange={onChangeHandler}/>
        </div>
    )
}

export default CountryFinder