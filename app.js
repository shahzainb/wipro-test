'use strict';
require("babel-core/register");
require("babel-polyfill");

import { Body } from './components/body';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(React.createFactory(Body)(), document.getElementById('app'));