import React from 'react';
import FadeInText from '../../../FadeInText/FadeInText';
import './AboutEducationListItem.scss';

interface IAboutEducationListItemProps {
    link : string;
    imgSrc : string;
    aboutRef : HTMLDivElement | null;
}

const AboutEducationListItem : React.FC<IAboutEducationListItemProps> = props => {
    return(
        <div className={`about-education-list-item`}>
            <FadeInText aboutRef={props.aboutRef}>
                <a href={props.link} target='_blank'>
                        <img src={props.imgSrc}/>
                        {props.children}
                </a>
            </FadeInText>
        </div>
    );
}

export default AboutEducationListItem;