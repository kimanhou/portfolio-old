import React, { useEffect, useRef, useState } from 'react';
import { useOnScreenResize } from '../../hooks/UseOnScreenResize';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ScreenDetector from '../ScreenDetector/screenDetector';
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

