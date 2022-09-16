import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Country = ({ country }) => {
    const countryLanguages = Object.values(country.languages)
    const [weatherInfo, setWeatherInfo] = useState(0)
    const [weatherIcon, setWeatherIcon] = useState('')

    const api_key = process.env.REACT_APP_API_KEY
    const weather_api = `https://api.openweathermap.org/data/2.5/weather?q=${country?.capital}&appid=${api_key}&units=metric`

    useEffect(() => {
        console.log(weather_api)
        console.log('effect 2')
        axios.get(weather_api).then(response => {
            console.log('promise fulfilled 2')
            setWeatherInfo(response.data.main.temp)
            setWeatherIcon(response.data.weather[0].icon)
        })
    }, [])

    const icon = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`

    return (
        <div>
            <h1> {country?.name.common} </h1>
            <p>Capital: {country?.capital} </p>
            <p>Area: {country?.area} </p>

            <h2> Languages </h2>
            <ul>{countryLanguages.map(language => <li key={language}>{language}</li>)}</ul>
            <img src={country?.flags.png} alt="country flag"></img>

            <h1>Weather in {country?.capital}</h1>

            <p>Temperature: {weatherInfo} Cº</p>

            <img src={icon} alt="Weather Icon" width="5%" />

            <div>
                <h4>wind</h4>
                <div>Speed: {weatherInfo.windSpeed} mph</div>
                <div>Direction: {weatherInfo.windDirection}</div>
            </div>

        </div>
    )
}

export default Country