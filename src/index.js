import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export function main( API ) {

  ReactDOM.render(
    <App />,
    document.getElementById( API.system.mountPoint )
  );

}
