import React, { useState } from 'react'

export const WeatherForm = ({onChangeCity}) => {

  const [city, setCity] = useState("")


  const handleChange = (e) => {

    const value=e.target.value

    if(value!==""){
      setCity(value)
    }else{
      setCity("")
    }

  }

  const handleSubmit = (e) => {
    if (city==="") return
    e.preventDefault()
    onChangeCity(city)
    setCity("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} placeholder='write your city example: medellin' autoComplete='on' style={{width:"200px"}}/>  
    </form>
  )
}
