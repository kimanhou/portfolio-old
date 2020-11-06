import React from 'react';
import { HashRouter, Route, Link, Switch, useRouteMatch } from "react-router-dom";
import './AppContent.scss';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Work from '../Work/Work';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const AppContent : React.FunctionComponent = props => {
  var matchAbout = useRouteMatch("/about");
  var aboutClassname = matchAbout !== null ? "is-route-about" : "";

  var matchContact = useRouteMatch("/contact");
  var contactClassname = matchContact !== null ? "is-route-contact" : "";

  var matchWork = useRouteMatch("/work");
  var workClassname = matchWork !== null ? "is-route-work" : "";

  var matchServices = useRouteMatch("/services");
  var servicesClassname = matchServices !== null ? "is-route-services" : "";

  return (
      <div className={`App-content ${aboutClassname} ${contactClassname} ${workClassname} ${servicesClassname}`}>
        {/* <Switch>
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
          <Route>
            <NoMatch />
          </Route> 
        </Switch> */}
        <Home />
        <About/>
        <Contact/>
        <Work/>
        <Services/>
      </div>
  )
}
export default AppContent;
