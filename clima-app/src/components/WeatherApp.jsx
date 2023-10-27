import React, { useEffect, useState } from 'react'
import { WeatherForm } from './WeatherForm'
import { WeatherMainInfo } from './WeatherMainInfo'

export const WeatherApp = () => {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title=`wheather|${weather?.location.name ?? ""}`
  }, [weather])
  

  const loadInfo = async (city="medellin") => {
    try {
      const request=await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)

      const json=await request.json()

      setWeather(json)

      console.log(json)

    } catch (error) {}
  }
  
  const handleChangeCity = (city) => {
    setWeather(null)
    loadInfo(city)
  }


  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity}/>

      {weather? 
      <WeatherMainInfo weather={weather}/> 
      : 
      <h2>Espera...</h2>
      }
      

    </div>
  )
}
