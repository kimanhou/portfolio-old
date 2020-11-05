import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

interface ILogoProps {
    isFooter ?: boolean;
    isWhite ?: boolean;
}

const Logo : React.FC<ILogoProps> = props => {
    const isFooter = props.isFooter ? "is-footer" : "";
    const isWhite = props.isWhite ? "is-white" : "";
    return(
        <Link to="/">
            <div className={`logo ${isFooter} ${isWhite}`}>
                <div className={`logo-inside-square`}></div>
            </div>
        </Link>
    );
}

export default Logo;