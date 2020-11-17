

import React from 'react';
import FadeInText from '../../../FadeInText/FadeInText';
import './Hobby.scss';

interface IHobbyProps {
    aboutRef : HTMLDivElement | null;
    imgSrc : string;
}

const Hobby : React.FC<IHobbyProps> = props => {
    
    return(
        <div className={`hobby`}>
            <FadeInText aboutRef={props.aboutRef}>
                <img src={props.imgSrc}/>
                {props.children}
            </FadeInText>
        </div>
    );
}

export default Hobby;