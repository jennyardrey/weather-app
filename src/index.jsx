import React from 'react';
import { render } from 'react-dom';
import { location } from './data/forcast.json';
import App from './components/app';

render(<App location={location} />, global.document.getElementById('root'));
