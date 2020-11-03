import React from 'react';
import Text from '../LocalisationContext/Text';
import './NavigationLink.scss';

interface INavigationLinkProps {
    titleFrench : string;
    titleEnglish : string;
    link : string;
    active : boolean;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    return (
        <div className={`navigation-link`}>
            <div className={`navigation-link-border-top`}></div>
            <a href={props.link}><Text english={props.titleEnglish} french={props.titleFrench}/></a>
        </div>
    );
}
export default NavigationLink;