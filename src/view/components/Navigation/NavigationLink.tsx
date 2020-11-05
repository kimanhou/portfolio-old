import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../LocalisationContext/Text';
import './NavigationLink.scss';

interface INavigationLinkProps {
    titleFrench : string;
    titleEnglish : string;
    link : string;
    active : boolean;
    isWhite ?: boolean;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    const isWhite = props.isWhite ? "is-white" : "";
    return (
        <div className={`navigation-link ${isWhite}`}>
            <div className={`navigation-link-border-container`}>
                <div className={`navigation-link-border-top`}></div>
            </div>
            <Link to={props.link}><Text english={props.titleEnglish} french={props.titleFrench}/></Link>
        </div>
    );
}
export default NavigationLink;