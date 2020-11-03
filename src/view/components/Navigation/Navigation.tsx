import React from 'react';
import './Navigation.scss';
import NavigationLink from './NavigationLink';

interface INavigationProps {

}

const Navigation : React.FC<INavigationProps> = props => {
  return (
    <div className={`navigation`}>
      <NavigationLink titleFrench="À propos" titleEnglish="About" link="" active={false} />
      <NavigationLink titleFrench="Contact" titleEnglish="Contact" link="" active={false} />
      <NavigationLink titleFrench="Projets" titleEnglish="Work" link="" active={false} />
      <NavigationLink titleFrench="Services" titleEnglish="Services" link="" active={false} />
    </div>
  )
}
export default Navigation;
