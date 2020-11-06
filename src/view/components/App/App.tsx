import React from 'react';
import { HashRouter, useRouteMatch } from "react-router-dom";
import Footer from '../Footer/Footer';
import './App.scss';
import AppContent from './AppContent';

const App : React.FunctionComponent = props => {

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className={`App`}>
        <AppContent/>
        <Footer/>
      </div>
    </HashRouter>
  )
}
export default App;
