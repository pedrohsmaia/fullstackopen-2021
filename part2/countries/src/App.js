import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './Components/Content'
import Filter from './Components/Filter'

function App() {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all').then(response => {
        console.log('promise fulfilled')
        setAllCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    const regex = new RegExp(newFilter, 'i');
    const filteredCountries = () => allCountries.filter(country => country.name.common.toString().match(regex))
    setCountries(filteredCountries)

  }

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Content countries={countries} setCountries={setCountries} />
    </div>

  )
}

export default App;
