import React from 'react';
import { useRouteMatch } from "react-router-dom";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Work from '../Work/Work';
import './App.scss';
import './AppContent.scss';

const App : React.FunctionComponent = props => {
  var matchAbout = useRouteMatch("/about");
  var aboutClassname = matchAbout !== null ? "is-route-about" : "";

  var matchContact = useRouteMatch("/contact");
  var contactClassname = matchContact !== null ? "is-route-contact" : "";

  var matchWork = useRouteMatch("/work");
  var workClassname = matchWork !== null ? "is-route-work" : "";

  var matchServices = useRouteMatch("/services");
  var servicesClassname = matchServices !== null ? "is-route-services" : "";

  var footerIsDark = (matchAbout !== null || matchWork !== null) ? true : false;

  return (
    <div className={`App`}>
      <div className={`App-content ${aboutClassname} ${contactClassname} ${workClassname} ${servicesClassname}`}>
        <Home />
        <About isVisible={matchAbout !== null}/>
        <Contact isVisible={matchContact !== null}/>
        <Work/>
        <Services/>
      </div>
      <Footer isDark={footerIsDark}/>
    </div>
  )
}
export default App;
