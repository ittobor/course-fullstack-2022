const CountrySpecs = ({countrySpecs}) => {
    return (
        <div>
            <h1>{countrySpecs.name.common}</h1>
            <div>Capital: {countrySpecs.capital[0]}</div>
            <div>Area: {countrySpecs.area}</div>
            <h3>Languages</h3>
            <ul>
                {
                Object.keys(countrySpecs.languages).map(langKey => 
                    <li key={langKey}>{countrySpecs.languages[langKey]}</li>
                )
                }
            </ul>
            <img src={countrySpecs.flags['png']} alt='png'/>
        </div>
    )
}

export default CountrySpecs