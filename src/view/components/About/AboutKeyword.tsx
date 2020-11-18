import React, { useState } from 'react';
import './AboutKeyword.scss';

interface IAboutKeywordProps {
    text : React.ReactNode;
    isPink ?: boolean;
}

const AboutKeyword : React.FC<IAboutKeywordProps> = props => {
    var isPinkClassname = props.isPink ? "is-pink" : "";
    return(
        <div className={`about-keyword ${isPinkClassname}`}>
            <span className="about-keyword-background"></span>
            {props.text}
        </div>
    );
}

export default AboutKeyword;