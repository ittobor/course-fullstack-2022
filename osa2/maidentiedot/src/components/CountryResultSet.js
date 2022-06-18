import CountrySpecs from "./CountrySpecs"

const CountryResultSet = ({foundCountries, countryFinder}) => {
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
            <>
            {foundCountries.map(
                country => <div key={country.name.common}>{country.name.common}</div>
            )}
            </>
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