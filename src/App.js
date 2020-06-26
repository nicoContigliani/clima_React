import React, { Component, Fragment } from 'react'
import './App.css';
import Weatherinfo from './Components/Weatherinfo'
import WeatherForms from './Components/WeatherForm.js'
import { WEATHER_KEY } from './keys';



class App extends Component {

  state = {
    temperature: '',
    description: '',
    humidity: '',
    wind_speed: '',
    city: '',
    country: '',
    error: null
  }


  getWeather = async e => {
    e.preventDefault();

    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;


    if (city.value && country.value) {

      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();

      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null
      });

    }else{
      this.setState({error:'Please Enter city and country'})
    }

  }




  render() {
    return (
      <Fragment>

        <div className="container p-4">
          <h1>Weather</h1>
          <div className="row">
            <div className="col-mod-6 mx-auto">
              <WeatherForms getWeather={this.getWeather} />
              <Weatherinfo {...this.state} />
            </div>
          </div>
        </div>


      </Fragment>
    );
  }
}
export default App;
