import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutPersonalProjects.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';
import FadeInText from '../../FadeInText/FadeInText';

interface IAboutPersonalProjectsProps {
    aboutRef : HTMLDivElement | null;
}

const AboutPersonalProjects : React.FC<IAboutPersonalProjectsProps> = props => {
    return(
        <div className="about-personal-projects">
            <FadeInText aboutRef={props.aboutRef} noDelay>
                <AboutTitle title={<Text english="Personal projects" french="Projets personnels"/>} aboutRef={props.aboutRef}/>
            </FadeInText>

            {/* <FadeInText aboutRef={props.aboutRef} noDelay> */}
                &nbsp;&nbsp;&nbsp;&nbsp;<AboutKeyword text={<Text english="Portfolio" french="Portfolio"/>}/>
                <br></br>
            {/* </FadeInText> */}

            {/* <FadeInText aboutRef={props.aboutRef} noDelay> */}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="http://resto-json-editor-testenv.s3-website-eu-west-1.amazonaws.com/" target='_blank'>
                    <AboutKeyword text={<Text english="Coffee" french="Coffee"/>}/>
                </a>
                <br></br>
            {/* </FadeInText> */}

            {/* <FadeInText aboutRef={props.aboutRef} noDelay>
                &nbsp;&nbsp;&nbsp;&nbsp;<AboutKeyword text={<Text english="Corsica" french="Corse"/>}/>
            </FadeInText> */}
        </div>
    );
}

export default AboutPersonalProjects;