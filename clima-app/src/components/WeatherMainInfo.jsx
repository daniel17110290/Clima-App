import React from 'react'

export const WeatherMainInfo = ({weather}) => {
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <div>
          <img 
          src={`http:${weather?.current.condition.icon}`} 
          width="128" 
          alt={weather?.current.condition.text}/>
        </div>
        <div>
          <div>
            {weather?.current.condition.text}
          </div>
          <div>
            {weather?.current.temp_c}°C
          </div>
        </div>
      </div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126916.69980807435!2d${weather.location.lon}!3d${weather.location.lat}8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1698340005731!5m2!1ses!2sco`}
        title='Mapa'
        width="600" 
        height="450" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}
