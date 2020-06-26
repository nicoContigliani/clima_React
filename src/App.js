import React, { Component, Fragment } from 'react'
import './App.css';
import Weatherinfo from './Components/Weatherinfo'
import WeatherForms from './Components/WeatherForm.js'
import { WEATHER_KEY } from './keys';



class App extends Component {

  getWeather = async e => {
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    e.preventDefault();
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data)

  }




  render() {
    return (
      <Fragment>

        <div className="container p-4">
          <div className="row">
            <div className="col-mod-6 mx-auto">
              <WeatherForms getWeather={this.getWeather} />
              <Weatherinfo />
            </div>
          </div>
        </div>


      </Fragment>
    );
  }
}
export default App;
