import React, { useState } from 'react';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './FadeInImage.scss';

interface IFadeInImageProps {
    aboutRef : HTMLDivElement | null;
    noDelay ?: boolean;
    imgSrc : string;
}

const FadeInImage : React.FC<IFadeInImageProps> = props => {
    var [onActiveClassname, setOnActiveClassname] = useState("");
    const onActive = () => {
        setOnActiveClassname("active");
    }

    const onUnactive = () => {
        setOnActiveClassname("");
    }
    
    const noDelay = props.noDelay ? "no-delay" : "";

    return(
        <div className={`fade-in-image ${onActiveClassname} ${noDelay}`}>
            <img src={props.imgSrc}/>
            <ScreenDetector scrollRef={props.aboutRef} onActive={onActive} onUnactive={onUnactive} className={'screen-detector-fade-in-image'}/>
        </div>
    );
}

export default FadeInImage;