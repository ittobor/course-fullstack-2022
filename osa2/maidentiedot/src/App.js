import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryFinder from './components/CountryFinder'
import CountryResultSet from './components/CountryResultSet'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryFinder, setCountryFinder] = useState('')
  
  const handleCountryFinderChange = (event) => {
    setCountryFinder(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })  
  }, [])

  const foundCountries = (countryFinder === '') 
  ? countries
  : countries.filter(country => 
    country.name.common.toLocaleLowerCase().includes(
      countryFinder.toLocaleLowerCase())) 

  return (
    <div className="App">
      <CountryFinder
        value={countryFinder}
        onChangeHandler={handleCountryFinderChange} />
      <CountryResultSet foundCountries={foundCountries} countryFinder={countryFinder} />
    </div>
  )
}

export default App;
