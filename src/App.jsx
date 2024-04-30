import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { useState } from 'react'
import WeatherCard from './components/WeatherCard'


function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [tenp, setTenp] = useState()


  useEffect(() => {

    const succes = pos => {
      
      setCoords({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      })
    }

    navigator.geolocation.getCurrentPosition(succes)
  }, [])

  useEffect(() => {
    if(coords){
      const API_KEY = '8661e752683131c72b9fa737d2355881'
      const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`

     axios.get(url)
        .then(res => {
          setWeather(res.data)
          const celsius =(res.data.main.temp - 273.15).toFixed(1)
          const fahrenheit = (celsius * 9/5 + 32).toFixed(1)
          setTenp({celsius, fahrenheit})
        })

        .catch(err => console.log(err))
    }
  }, [coords])
  

  return (
      <div className='app'>
        < WeatherCard
        weather={weather}
        tenp={tenp}
        />
        <h4 className='credits'>Developed by Jesus Maneiro</h4>
      </div>
      
     )
}

export default App
