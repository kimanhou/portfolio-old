import React from 'react';
import FadeInText from '../../../FadeInText/FadeInText';
import './Language.scss';

interface ILanguageProps {
    aboutRef : HTMLDivElement | null;
    imgSrc : string;
}

const Language : React.FC<ILanguageProps> = props => {
    
    return(
        <div className={`language`}>
            <FadeInText aboutRef={props.aboutRef}>
                <img src={props.imgSrc}/>
                {props.children}
            </FadeInText>
        </div>
    );
}

export default Language;