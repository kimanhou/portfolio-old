import React, { useState } from 'react';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './AboutTitle.scss';

interface IAboutTitleProps {
    aboutRef : HTMLDivElement | null;
    title : React.ReactNode;
}

const AboutTitle : React.FC<IAboutTitleProps> = props => {
    var [onActiveClassname, setOnActiveClassname] = useState("");
    const onActive = () => {
        setOnActiveClassname("active");
    }

    const onUnactive = () => {
        setOnActiveClassname("");
    }
    
    return(
        <div className={`about-text-title ${onActiveClassname}`}>
            <div className={`about-text-title-line-before`}></div>
            <div className={`about-text-title-text`}>{props.title}</div>
            <div className={`about-text-title-line`}>
              <div className={`about-text-title-line-inside`}></div>
            </div>
            <ScreenDetector scrollRef={props.aboutRef} onActive={onActive} onUnactive={onUnactive} className={'screen-detector-about-title'}/>
        </div>
    );
}

export default AboutTitle;