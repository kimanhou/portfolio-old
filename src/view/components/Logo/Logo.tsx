import React from 'react';
import './Logo.scss';

interface ILogoProps {
    isFooter ?: boolean;
    isWhite ?: boolean;
}

const Logo : React.FC<ILogoProps> = props => {
    const isFooter = props.isFooter ? "is-footer" : "";
    const isWhite = props.isWhite ? "is-white" : "";
    return(
        <div className={`logo ${isFooter} ${isWhite}`}>
            <div className={`logo-inside-square`}></div>
        </div>
    );
}

export default Logo;