import React from 'react';
import './Navigation.scss';
import NavigationLink from './NavigationLink';

interface INavigationProps {
  isFooter ?: boolean;
  isWhite ?: boolean;
}

const Navigation : React.FC<INavigationProps> = props => {
  const isFooter = props.isFooter ? "is-footer" : "";
  return (
    <div className={`navigation ${isFooter}`}>
      <NavigationLink titleFrench="À propos" titleEnglish="About" link="" active={false} isWhite={props.isWhite}/>
      <NavigationLink titleFrench="Contact" titleEnglish="Contact" link="" active={false} isWhite={props.isWhite}/>
      <NavigationLink titleFrench="Projets" titleEnglish="Work" link="" active={false} isWhite={props.isWhite}/>
      <NavigationLink titleFrench="Services" titleEnglish="Services" link="" active={false} isWhite={props.isWhite}/>
    </div>
  )
}
export default Navigation;
