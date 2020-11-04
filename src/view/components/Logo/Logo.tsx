import React from 'react';
import './Logo.scss';

interface ILogoProps {
    isFooter ?: boolean;
}

const Logo : React.FC<ILogoProps> = props => {
    const isFooter = props.isFooter ? "is-footer" : "";
    return(
        <div className={`logo ${isFooter}`}>
            <div className={`logo-inside-square`}></div>
        </div>
    );
}

export default Logo;