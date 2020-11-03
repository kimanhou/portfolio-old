import React from 'react';
import './Logo.scss';

interface ILogoProps {

}

const Logo : React.FC<ILogoProps> = props => {
    return(
        <div className={`logo`}>
            <div className={`logo-inside-square`}></div>
        </div>
    );
}

export default Logo;