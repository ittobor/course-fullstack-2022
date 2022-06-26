import CountrySpecs from "./CountrySpecs"

const CountryResultSet = ({foundCountries, countryFinder, countrySelect}) => {
    if (foundCountries.length > 10 && countryFinder === '') {
        return (
            <div><i>enter parameter to find</i></div>
        )
    } else if (foundCountries.length > 10 && countryFinder !== '') {
        return (
            <div>Too many results, specify another find parameter</div>
        )
    } else if (foundCountries.length > 1 && foundCountries.length < 11) {
        return (
            <form onSubmit={countrySelect}>
            {foundCountries.map(
                country => 
                <div key={country.name.common}>
                    {country.name.common}
                    &nbsp;
                    <button type="submit"
                        id={country.name.common}
                        name={country.name.common}>
                        show
                    </button>
                </div>
            )}
            </form>
        )
    } else if (foundCountries.length === 1) {
        return (
            <CountrySpecs key={foundCountries[0].name.common} countrySpecs={foundCountries[0]}/>
        )
    } else {
        return (
            <div>No matches.</div>
        )
    }
}

export default CountryResultSet