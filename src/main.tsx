import 'app-shell-toolbox/init';

import * as React from 'react';
import { render } from 'react-dom';

import './styles.css';
import { routes } from './routes';

// noinspection JSUnusedGlobalSymbols
export function main( API: AppShellAPI ) {

  render( routes, document.getElementById( API.system.mountPoint ) );

}
