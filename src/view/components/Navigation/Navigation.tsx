import React from 'react';
import Languages from '../Languages/Languages';
import './Navigation.scss';
import NavigationLink from './NavigationLink';

interface INavigationProps {
  isFooter ?: boolean;
  isWhite ?: boolean;
  isHome ?: boolean;
  isAbout ?: boolean;
  isContact ?: boolean;
  isWork ?: boolean;
  isServices ?: boolean;
}

const Navigation : React.FC<INavigationProps> = props => {
  const isFooter = props.isFooter ? "is-footer" : "";
  const isHome = props.isHome ? "is-home" : "";
  const isAbout = props.isAbout ? "is-about" : "";
  const isContact = props.isContact ? "is-contact" : "";
  const isWork = props.isWork ? "is-work" : "";
  const isServices = props.isServices ? "is-services" : "";

  return (
    <div className={`navigation ${isFooter} ${isHome} ${isAbout} ${isContact} ${isWork} ${isServices}`}>
      <div className={`navigation-links`}>
        <NavigationLink titleFrench="À propos" titleEnglish="About" link="about" active={false} isWhite={props.isWhite}/>
        <NavigationLink titleFrench="Contact" titleEnglish="Contact" link="contact" active={false} isWhite={props.isWhite}/>
        {/* <NavigationLink titleFrench="Projets" titleEnglish="Work" link="work" active={false} isWhite={props.isWhite}/>  */}
        {/* <NavigationLink titleFrench="Services" titleEnglish="Services" link="services" active={false} isWhite={props.isWhite}/> */}
      </div>
    </div>
  )
}
export default Navigation;
