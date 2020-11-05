import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Contact.scss';

const Contact : React.FunctionComponent = props => {
  return (
    <div className={`contact`} style={{ backgroundImage: "url('noise/noise-white.png')"}}>
      <Navigation />
      <Logo />
      <div className={`contact-content`}>
        <div className={`contact-intro`}>
          If you have a website project
          <br></br>
          feel free to contact me
        </div>
        <div className={`contact-email`}>
          <a href="mailto:kimanhou@gmail.com">kimanhou@gmail.com</a>
        </div>
      </div>
    </div>
  )
}
export default Contact;
