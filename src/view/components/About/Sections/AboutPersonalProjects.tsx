import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutPersonalProjects.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';

interface IAboutPersonalProjectsProps {
    aboutRef : HTMLDivElement | null;
}

const AboutPersonalProjects : React.FC<IAboutPersonalProjectsProps> = props => {
    return(
        <div className="about-hobbies">
            <AboutTitle title={<Text english="Personal projects" french="Projets personnels"/>} aboutRef={props.aboutRef}/>
            &nbsp;&nbsp;&nbsp;&nbsp;<AboutKeyword text={<Text english="Portfolio" french="Portfolio"/>}/>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;<AboutKeyword text={<Text english="Coffee" french="Coffee"/>}/>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;<AboutKeyword text={<Text english="Corsica" french="Corse"/>}/>
        </div>
    );
}

export default AboutPersonalProjects;