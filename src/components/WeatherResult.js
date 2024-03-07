import React, { useEffect } from "react"
import PropTypes from 'prop-types'
import '../stylesheet/weather_result.css'
import { currentDay, currentTime } from '../util/DateTimeFormat'
import { toFahrenheit } from "../util/unitConvertion"

function WeatherResult({ setCityName, fetchReportApi, currentReport, currentTemp, unit }) {
  var date = currentReport?.dt

  useEffect(() => {
    // eslint-disable-next-line
    fetchReportApi()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchReportApi()
  }

  const onHandleChange = (event) => {
    const city_name = event.target.value
    setCityName(city_name)
  }

  const searchPlace = () => {
    return (
      <div className="search_item_div">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Search For Places ..." onChange={onHandleChange} />
          <span className="glyphicon glyphicon-search" aria-hidden="true" id="g-search-button"></span>
        </form>
      </div>
    )
  }

  const displayUnit = (className) => {
    return (
      unit === 'degree_c' ?
      <span className={className}>&#8451;</span> :
      <span className={className}>&#x2109;</span>
    )
  }

  const searchResult = () => {
    const weather = currentReport?.weather[0]
    const current = currentReport?.main

    return (
      <div className="weather_icon">
        <img className="weather_image" src={`/weather_icons/${weather?.icon}.png`} alt="icon" />
        <div className="weather_search_city_details">
          <div className="current_city_tem">
            <h2 className="current_value">{Math.round(currentTemp)}
              {displayUnit("unit")}
            </h2>
          </div>
          <div className="feels_like">
            Feels like {unit === 'degree_f' ? Math.round(toFahrenheit(current?.feels_like))
              : current?.feels_like}{displayUnit("feels_like")}
          </div>
          <div className="weather_discription">{weather?.description}</div>
        </div>
        <hr className="hr" />
        <div className="current_day_time">
          <span className="current_day">{currentDay(date)},</span>&nbsp;
          <span className="current_time">{currentTime(date)}</span>
        </div>
        <div className="city_name">
          <i className="fa-solid fa-location-dot"></i> {currentReport?.name}, {currentReport?.sys?.country}
        </div>
      </div>
    )
  }

  return (
    <div className="nav_div">
      <div className="weather_div">
        <div className="search_item">
          {searchPlace()}
          {searchResult()}
        </div>
      </div>
    </div>
  )
}

WeatherResult.propTypes = {
  setCityName: PropTypes.func.isRequired,
  fetchReportApi: PropTypes.func,
  currentReport: PropTypes.object
}

export default WeatherResult  