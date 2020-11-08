import React from 'react';
import { HashRouter, useRouteMatch } from "react-router-dom";
import App from './App';

const AppRoot : React.FunctionComponent = props => {

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  )
}
export default AppRoot;
