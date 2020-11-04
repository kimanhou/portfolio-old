import React, { useEffect, useRef, useState } from 'react';
import { useOnScreenResize } from '../../hooks/UseOnScreenResize';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './Footer.scss';
import FooterSocial from './FooterSocial';

const Footer : React.FunctionComponent = props => {
    var [onActiveClassname, setOnActiveClassname] = useState("");
    const onActive = () => {
        setOnActiveClassname("active");
    }

    const onUnactive = () => {
        setOnActiveClassname("");
    }

    const [height, setHeight] = useState(0);
    const fixedRef = useRef<HTMLDivElement>(null);
    useOnScreenResize(() => {
        if(fixedRef.current != null){
            setHeight(Math.floor(fixedRef.current.getBoundingClientRect().height));
        }
    });

    return (
        <footer className={`footer`}>
            <div className={`footer-fixed ${onActiveClassname}`} ref={fixedRef}>
                <div className={`footer-name-and-logo`}>
                    <Logo isFooter/>
                    <div className={`footer-name`}>
                        <div className={`footer-name-letter`}><div className={`from-right`}>K</div></div>
                        <div className={`footer-name-letter`}><div className={`from-below`}>i</div></div>
                        <div className={`footer-name-letter`}><div className={`from-above`}>m&nbsp;</div></div>
                        <div className={`footer-name-letter`}><div className={`from-left`}>A</div></div>
                        <div className={`footer-name-letter`}><div className={`from-right`}>n</div></div>
                        <div className={`footer-name-letter`}><div className={`from-below`}>h&nbsp;</div></div>
                        <div className={`footer-name-letter`}><div className={`from-right`}>N</div></div>
                        <div className={`footer-name-letter`}><div className={`from-above`}>g</div></div>
                        <div className={`footer-name-letter`}><div className={`from-left`}>u</div></div>
                        <div className={`footer-name-letter`}><div className={`from-below`}>y</div></div>
                        <div className={`footer-name-letter`}><div className={`from-right`}>e</div></div>
                        <div className={`footer-name-letter`}><div className={`from-left`}>n</div></div>
                    </div>
                </div>
                <Navigation isFooter={true} />
                <div className={`footer-social-container`}>
                    <FooterSocial iconUrl="social/instagram.png" link="https://www.instagram.com/kimanhou/" />
                    <FooterSocial iconUrl="social/github.png" link="https://github.com/kimanhou" />
                    <FooterSocial iconUrl="social/linkedin.png" link="https://www.linkedin.com/in/kanguyenlu/" />
                    <div>
                        <a href="mailto:kimanhou@gmail.com">kimanhou@gmail.com</a>
                    </div>
                </div>
                <div className={`footer-copyright`}>
                    &copy;2020
                </div>
            </div>
            <div className={`footer-padding`} style={{height}}>
                <ScreenDetector onActive={onActive} onUnactive={onUnactive} className={`screen-detector`}/>
            </div>
        </footer>
    )
}
export default Footer;

