import React, { useState } from 'react';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './FadeInText.scss';

interface IFadeInTextProps {
    aboutRef : HTMLDivElement | null;
    inline ?: boolean;
    noDelay ?: boolean;
}

const FadeInText : React.FC<IFadeInTextProps> = props => {
    var [onActiveClassname, setOnActiveClassname] = useState("");
    const onActive = () => {
        setOnActiveClassname("active");
    }

    const onUnactive = () => {
        setOnActiveClassname("");
    }
    
    const inline = props.inline ? "inline" : "";
    const noDelay = props.noDelay ? "no-delay" : "";

    return(
        <div className={`fade-in-text ${onActiveClassname} ${inline} ${noDelay}`}>
            {props.children}
            <ScreenDetector scrollRef={props.aboutRef} onActive={onActive} onUnactive={onUnactive} className={'screen-detector-fade-in-text'}/>
        </div>
    );
}

export default FadeInText;