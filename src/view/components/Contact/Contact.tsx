import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Text from '../LocalisationContext/Text';
import './Contact.scss';
import ContactSocial from './ContactSocial';
import Expand from './Expand';

interface IContactProps {
  isVisible : boolean;
}

const Contact : React.FC<IContactProps> = props => {
  var isVisibleClassname = props.isVisible ? "is-visible" : "";

  var [isSocialVisible, setIsSocialVisible] = useState(false);
  var isSocialVisibleClassname = isSocialVisible ? "is-social-visible" : "";

  const onClickExpand = () => {setIsSocialVisible(!isSocialVisible);}

  return (
    <div className={`contact ${isVisibleClassname}`} style={{ backgroundImage: "url('noise/noise-white.png')"}}>
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
              <a href="mailto:kimanhou@gmail.com" className={`contact-email-content-text outline`}>kimanhou@gmail.com</a>
              <a href="mailto:kimanhou@gmail.com" className={`contact-email-content-text fill`}>kimanhou@gmail.com</a>
            </div>
        </div>
      </div>
      <div className={`contact-social-container`}>
        <Expand onClick={onClickExpand} isExpanded={isSocialVisible}/>
        <div className={`contact-social-container-content`}>
          <div className={`contact-social-container-content-moving ${isSocialVisibleClassname}`}>
            <ContactSocial text="INSTAGRAM" link="https://www.instagram.com/kimanhou/"/>
            <ContactSocial text="GITHUB" link="https://github.com/kimanhou"/>
            <ContactSocial text="LINKEDIN" link="https://www.linkedin.com/in/kanguyenlu/"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;
