import React from 'react';
import { HashRouter, useRouteMatch } from "react-router-dom";
import LocalContext from '../LocalisationContext/LocalContext';
import App from './App';

const AppRoot : React.FunctionComponent = props => {

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <LocalContext>
        <App />
      </LocalContext>
    </HashRouter>
  )
}
export default AppRoot;
