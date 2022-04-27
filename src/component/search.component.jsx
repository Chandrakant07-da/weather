
import React from 'react'
import WeatherApp from "./weather.component.";

import "./search.styles.css";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      name: "",
      country: "",
      temperature: "",
      maxTemperature: "",
      minTemperature: "",
    };
  }
  inputHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=0e74a70cf993bbf2c3c935510732b18e`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          maxTemperature: data.main.temp_max,
          minTemperature: data.main.temp_min,
        });
      });
  };
  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div className="input-container">
            {/* <img src={searchIcon} alt="search" /> */}
            <input
              type="text"
              placeholder="Enter city name"
              onChange={this.inputHandler}
            />
          </div>
        </form>
        { 
          this.state.name &&
          this.state.country &&
          this.state.temperature &&
          this.state.maxTemperature &&
          this.state.minTemperature &&
            <WeatherApp
              name={this.state.name}
              country={this.state.country}
              temperature={this.state.temperature}
              maxTemperature={this.state.maxTemperature}
              minTemperature={this.state.minTemperature}
            />
          }
      </>
    );
  }
}

export default Search;