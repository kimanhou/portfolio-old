import React, { useEffect, useRef, useState } from 'react';
import { useOnScreenResize } from '../../hooks/UseOnScreenResize';
import Languages from '../Languages/Languages';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './Footer.scss';
import FooterSocial from './FooterSocial';

interface IFooterProps {
    isDark ?: boolean;
}

const Footer : React.FC<IFooterProps> = props => {
    var isDarkClassname = props.isDark === true ? "is-dark" : "";

    var backgroundImage = props.isDark === true ? "url('noise/noise-black.png')" : "url('noise/noise-white.png')";

    var instagram = props.isDark === true ? "social/instagram-white.png" : "social/instagram.png";
    var github = props.isDark === true ? "social/github-white.png" : "social/github.png";
    var linkedin = props.isDark === true ? "social/linkedin-white.png" : "social/linkedin.png";

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
        <footer className={`footer ${isDarkClassname}`}>
            <div className={`footer-fixed-background`} style={{ backgroundImage }}></div>
            <div className={`footer-fixed ${onActiveClassname}`} ref={fixedRef} >
                <div className={`footer-name-and-logo`}>
                    <Logo isFooter isWhite={props.isDark} />
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
                <Navigation isFooter={true} isWhite={props.isDark} />
                <div className={`footer-social-container`}>
                    <FooterSocial iconUrl={instagram} link="https://www.instagram.com/kimanhou/" />
                    <FooterSocial iconUrl={github} link="https://github.com/kimanhou" />
                    <FooterSocial iconUrl={linkedin} link="https://www.linkedin.com/in/kanguyenlu/" />
                    <div className={`footer-email-container`}>
                        <a href="mailto:kanguyenlu@gmail.com" className={`footer-email`}>kanguyenlu@gmail.com</a>
                        <a href="mailto:kanguyenlu@gmail.com" className={`footer-email pink`}>kanguyenlu@gmail.com</a>
                    </div>
                </div>
                <Languages isWhite={props.isDark} />
                <div className={`footer-copyright`}>
                    &copy;2021
                </div>
            </div>
            <div className={`footer-padding`} style={{height}}>
                <ScreenDetector onActive={onActive} onUnactive={onUnactive} className={`screen-detector`}/>
            </div>
        </footer>
    )
}
export default Footer;

