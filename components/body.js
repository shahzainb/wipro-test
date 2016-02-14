import React from 'react';
import { Observable } from 'rx/dist/rx.lite';
import { getWeatherData } from '../utils/utils';
import { Section } from './section.js';
import { Header } from './header.js';
import { Content } from './content.js';

export const Body = React.createClass({

  getInitialState() {
    return {
      weather: {
        list: []
      },
      isLoading: false
    }
  },
  
  render () {
    return (
      <div>
        <Header />
        <Section getWeatherData={this.getWeatherData} />
        <Content weather={this.state.weather} />
      </div>
    );
  },

  getWeatherData (params) {
    Observable
      .fromPromise(getWeatherData(params))
      .subscribe(data => {
        this.setState({
          weather: data
        });
      });
  }
});