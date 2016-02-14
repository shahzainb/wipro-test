import React from 'react';
import moment from 'moment';

export const Table = React.createClass({

  render () {
    
    let headings = ['', 'Weather', 'Temperature', 'Humidity', 'Pressure'];
    
    return (
      <table className="pure-table">
        <Thead headings={headings} />
        <Tbody weatherList={this.props.weather.list} />
      </table>
    );
  }
});

export const Thead = React.createClass({

  render () {

    let headings = [];

    this.props.headings.forEach((heading, index) => {
      headings.push(<th key={index}>{heading}</th>);
    });

    return (
      <thead>
        <tr>{headings}</tr>
      </thead>
    );
  }

});

export const Tbody = React.createClass({

  render () {

    let weatherList = this.props.weatherList;
    let rows = [];

    if (weatherList.length > 0) {

      weatherList.forEach((weather, index) => {
        rows.push(<Tcell key={index} row={weather} />);
      });
    }
    else {
      rows = <Tcell key={0} row={''} />
    }

    return (
      <tbody>{rows}</tbody>
    );
  }
});

export const Tcell = React.createClass({

  render () {

    const row = this.props.row;
    const date = moment(new Date(row.dt_txt)).format('ddd, hA');
    const weather = row.weather[0];
    const mainWeather = row.main;
    const weatherDescription = weather.description;
    const weatherIcon = `http://openweathermap.org/img/w/${weather.icon}.png`;
    const temp = mainWeather.temp;
    const tempC = Math.floor(temp - 273.15);
    const humidity = mainWeather.humidity;
    const pressure = mainWeather.pressure;

    return (
      <tr>
        <td key="date">{date}</td>
        <td key="weather"><img src={weatherIcon} /> {weatherDescription}</td>
        <td key="temperature">{temp} K ({tempC} Celsius)</td>
        <td key="humidity">{humidity}</td>
        <td key="pressure">{pressure}</td>
      </tr>
    );
  }
});