import react,{useState} from "react"
import './WeatherCard.css'


const WeatherCard = ({ weather, tenp }) => {
  const [isCelsius, setIsCelsius] = useState(true)
  
  const changeTemperature = ()=>{
    setIsCelsius(!isCelsius)
  }

 return (
    <article className="card">
      <h1 className="card__title">Weather App</h1>
      <h2 className="card__country">{weather?.name}, {weather?.sys.country}</h2>
      <section className="card__body">
        <div className="card__image-container">
          <img className="card__image" src={ weather &&`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Icono de Clima" />
        </div>
        <article className="info">
          <h3 className="info__title">{weather?.weather[0].description}</h3>
          <ul className="info__list">
            <div className="info__flex">
              <li className="info__li"><span className="span__title wind__speed">Wind Speed: </span>{weather?.wind.speed}m/s</li>
              <li className="info__li"><span className="span__title clouds">Clouds: </span>{weather?.clouds.all}%</li>
              <li className="info__li"><span
              className="span__title pressure">Pressure: </span>{weather?.main.pressure}hPa</li>
            </div>
          </ul>
         </article>
      </section>
      <h2 className="tenp"> {isCelsius ?`${tenp?.celsius}°C` : `${tenp?.fahrenheit}°F`} </h2>
      <button className="tenp__btn" onClick={changeTemperature}>Change to {isCelsius ? 'ºF' : 'ºC'}</button>
    </article>
  )
}

export default WeatherCard