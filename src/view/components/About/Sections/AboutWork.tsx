import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutWork.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';
import FadeInText from '../../FadeInText/FadeInText';

interface IAboutWorkProps {
    aboutRef : HTMLDivElement | null;
}

const AboutWork : React.FC<IAboutWorkProps> = props => {
    return(
        <div className="about-work">
            <FadeInText aboutRef={props.aboutRef}>
                <AboutTitle title={<Text english="Work" french="Expérience"/>} aboutRef={props.aboutRef}/>
            </FadeInText>
            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="4 years in London at Société Générale as a developer. I worked for the front office team of the Commodities department." 
                    french="4 ans à Londres à la Société Générale en tant que développeuse."/>
              </FadeInText>
        </div>
    );
}

export default AboutWork;