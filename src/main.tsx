import * as React from 'react';
import { render } from 'react-dom';

import './styles.css';
import { routes } from './routes';

type ShellAPI = {
  system: {
    mountPoint: string
  }
}

// noinspection JSUnusedGlobalSymbols
export function main( API: ShellAPI ) {

  render( routes, document.getElementById( API.system.mountPoint ) );

}
