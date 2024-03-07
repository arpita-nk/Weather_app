import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Highlights from './components/Highlights';
import WeatherResult from './components/WeatherResult';
  import { toFahrenheit } from './util/unitConvertion';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [city, setCity] = useState('Bengaluru')
  const [ currentReport, setCurrentReport ] = useState(null)
  const [ unit, setUnit ] = useState('degree_c')

  const weatherReport = async () => {
    if (city) {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      const response = await fetch(url)
      const resJson = await response.json()
      setCurrentReport(resJson)
    }
  }

  const current = currentReport?.main?.temp
  const current_temp = unit === 'degree_f' ? toFahrenheit(current) : current

  return (
    <div className="App">
      <div className='weather_result'>
        <WeatherResult
          setCityName={setCity}
          fetchReportApi={weatherReport}
          currentReport={currentReport}
          currentTemp={current_temp}
          unit={unit}
        />
      </div>
      <div className='top-section'>
        <div className='unit_convertion'>
          <Button 
            className='degree_c'
            name='degree_c'
            onClick={(e) => setUnit(e.target.name)}
            active={unit === 'degree_c' || false}
            variant='none'>
              &#8451;
            </Button>
          <Button
            className='degree_f'
            name='degree_f'
            onClick={(e) => setUnit(e.target.name)}
            active={unit === 'degree_f' || false}
            variant='none'>
              &#x2109;
            </Button>
        </div>
        <h2 className="heading">Today's Highlights</h2>
        <div className='highlights_div'>
          <Highlights 
            currentReport={currentReport}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
