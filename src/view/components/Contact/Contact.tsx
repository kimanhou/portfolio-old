import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Text from '../LocalisationContext/Text';
import './Contact.scss';

const Contact : React.FunctionComponent = props => {
  return (
    <div className={`contact`} style={{ backgroundImage: "url('noise/noise-white.png')"}}>
      <Navigation isContact={true}/>
      <Logo isContact={true}/>
      <div className={`contact-content`}>
        <div className={`contact-intro`}>
          <div className={`contact-intro-line`}>
            <div className={`contact-intro-line-content`}>
              <Text english="If you have a website project" french="Si vous avez un projet de site web"/>
            </div>
          </div>
          
          <div className={`contact-intro-line`}>
            <div className={`contact-intro-line-content`}>
              <Text english="feel free to contact me" french="n'hésitez pas à me contacter"/>
            </div>
          </div>
        </div>
        <div className={`contact-email`}>
            <div className={`contact-email-content`}>
              <a href="mailto:kimanhou@gmail.com">kimanhou@gmail.com</a>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;
