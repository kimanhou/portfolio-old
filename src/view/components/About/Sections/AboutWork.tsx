import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutWork.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';

interface IAboutWorkProps {
    aboutRef : HTMLDivElement | null;
}

const AboutWork : React.FC<IAboutWorkProps> = props => {
    return(
        <div className="about-work">
            <AboutTitle title={<Text english="Work" french="Expérience"/>} aboutRef={props.aboutRef}/>
          &nbsp;&nbsp;&nbsp;&nbsp;<Text english="4 years in London at Société Générale as a developer. I worked for the front office team of the Commodities department." 
              french="4 ans à Londres à la Société Générale en tant que développeuse."/>
        </div>
    );
}

export default AboutWork;