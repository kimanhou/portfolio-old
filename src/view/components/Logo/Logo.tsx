import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

interface ILogoProps {
    isFooter ?: boolean;
    isWhite ?: boolean;
    isHome ?: boolean;
    isAbout ?: boolean;
    isContact ?: boolean;
    isWork ?: boolean;
    isServices ?: boolean;
}

const Logo : React.FC<ILogoProps> = props => {
    const isFooter = props.isFooter ? "is-footer" : "";
    const isWhite = props.isWhite ? "is-white" : "";
    const isHome = props.isHome ? "is-home" : "";
    const isAbout = props.isAbout ? "is-about" : "";
    const isContact = props.isContact ? "is-contact" : "";
    const isWork = props.isWork ? "is-work" : "";
    const isServices = props.isServices ? "is-services" : "";

    return(
        <Link to="/">
            <div className={`logo ${isFooter} ${isWhite} ${isHome} ${isAbout} ${isContact} ${isWork} ${isServices}`}>
                <div className={`logo-inside-square`}></div>
            </div>
        </Link>
    );
}

export default Logo;