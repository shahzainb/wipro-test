import React from 'react';
import { Article } from './article';

export const Section = React.createClass({
  render () {
    return (
      <section className="splash-container">
        <Article getWeatherData={this.props.getWeatherData} />
      </section>
    );
  }
});