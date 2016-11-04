__webpack_public_path__ = window.__AppShell_publicPath__.react

import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import './styles.css';
import { routes } from './routes';

// noinspection JSUnusedGlobalSymbols
export function main( API: AppShellAPI ) {

  const mountPoint = document.getElementById( API.appMountPoint );

  render( routes, mountPoint );

  return () => unmountComponentAtNode( mountPoint );
}
