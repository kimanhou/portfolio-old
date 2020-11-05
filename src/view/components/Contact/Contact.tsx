import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Contact.scss';

const Contact : React.FunctionComponent = props => {
  return (
    <div className={`contact`} style={{ backgroundImage: "url('noise/noise-white.png')"}}>
      <Navigation />
      <div className={`contact-content`}>
        <div className={`contact-intro`}>
          If you have a website project
          <br></br>
          feel free to contact me
        </div>
        <div className={`contact-email`}>
          kimanhou@gmail.com
        </div>
      </div>
    </div>
  )
}
export default Contact;
