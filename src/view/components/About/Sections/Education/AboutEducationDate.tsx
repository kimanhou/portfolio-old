import React from 'react';
import FadeInText from '../../../FadeInText/FadeInText';
import './AboutEducationDate.scss';

interface IAboutEducationDateProps {
    aboutRef : HTMLDivElement | null;
}

const AboutEducationDate : React.FC<IAboutEducationDateProps> = props => {
    
    return(
        <div className={`about-education-date`}>
            <FadeInText aboutRef={props.aboutRef}>
                {props.children}
                <div className={`underline`}></div>
            </FadeInText>
        </div>
    );
}

export default AboutEducationDate;