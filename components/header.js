import React from 'react';

export const Header = React.createClass({
  render () {
    return (
      <header className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <a className="pure-menu-heading" href="">Wipro Test</a>

          <ul className="pure-menu-list">
            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
          </ul>
        </div>
      </header>
    );
  }
});