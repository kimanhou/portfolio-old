import React from 'react';
import './FooterSocial.scss';

interface IFooterSocialProps {
    iconUrl : string;
    link : string;
}

const FooterSocial : React.FC<IFooterSocialProps> = props => {
    return (
        <div className={`footer-social`}>
            <a href={props.link} target="_blank"><img src={props.iconUrl}/></a>
        </div>
    )
}
export default FooterSocial;

