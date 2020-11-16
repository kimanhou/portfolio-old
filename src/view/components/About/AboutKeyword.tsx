import React, { useState } from 'react';
import './AboutKeyword.scss';

interface IAboutKeywordProps {
    text : React.ReactNode;
}

const AboutKeyword : React.FC<IAboutKeywordProps> = props => {
    return(
        <span className="about-keyword">
            <span className="about-keyword-background"></span>
            {props.text}
        </span>
    );
}

export default AboutKeyword;