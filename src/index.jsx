import React from 'react';
import { render } from 'react-dom';
import { location, forecasts } from './data/forcast.json';
import App from './components/app';

render(<App location={location} forecasts={forecasts} />, global.document.getElementById('root'));
