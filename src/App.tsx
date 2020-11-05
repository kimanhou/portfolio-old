import React from 'react';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import './App.scss';
import About from './view/components/About/About';
import Contact from './view/components/Contact/Contact';
import Footer from './view/components/Footer/Footer';
import Home from './view/components/Home/Home';
import Services from './view/components/Services/Services';
import Work from './view/components/Work/Work';

const App : React.FunctionComponent = props => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className={`App`}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>

        <Footer/>
      </div>
    </HashRouter>
  )
}
export default App;
