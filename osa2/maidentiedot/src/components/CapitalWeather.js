import { useState } from 'react'
import axios from "axios"

const CapitalWeather = ({countrySpecs}) => {
    const [capitaltemp, setCapitaltemp] = useState('')
    const [capitalwind, setCapitalwind] = useState('')
    const [capitalwpng, setCapitalwpng] = useState('')

    const api_key = process.env.REACT_APP_API_KEY
    const weather_url = [
        'http://api.openweathermap.org/data/2.5/weather?',
        'q=',       countrySpecs.capital[0], ',', countrySpecs.cca2,
        '&units=metric',
        '&APPID=',  api_key,
        ].join('')

    axios
        .get(weather_url)
        .then(response => {
            setCapitaltemp(response.data.main.temp)
            setCapitalwind(response.data.wind.speed)
            setCapitalwpng(['https://openweathermap.org/img/wn/',
                            response.data.weather[0].icon,
                            '@2x.png']
                            .join(''))
        })

    return (
        <div>
            <h3>Weather in {countrySpecs.capital[0]}</h3>
            <div>temperature {capitaltemp} Celcius</div>
            <img src={capitalwpng} alt='png'  />
            <div>wind {capitalwind} m/s</div>
        </div>
    )
}

export default CapitalWeather