import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutSkills.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';
import FadeInText from '../../FadeInText/FadeInText';

interface IAboutSkillsProps {
    aboutRef : HTMLDivElement | null;
}

const AboutSkills : React.FC<IAboutSkillsProps> = props => {
    return(
        <div className="about-skills">
            <FadeInText aboutRef={props.aboutRef}>
                <AboutTitle title={<Text english="Skills" french="Compétences"/>} aboutRef={props.aboutRef}/>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Languages : C#, Javascript, Typescript" french="Langage: C#, Javascript, Typescript"/>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Frameworks : .NET, React" french="Frameworks: .NET, React"/>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Database : SQL Server, MySQL, Sybase" french="Base de données: SQL Server, MySQL, Sybase"/>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Version control : Git, TFS" french="Gestion de versions: Git, TFS"/>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Software development life cycle : Agile methodology, continuous delivery, Kanban process, test pyramid" french="Cycle de vie du développement logiciel: méthode Agile, livraison continue, méthode Kanban, pyramide des tests"/>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="UX/UI design : site map, moodboard, wireframing, mockup, prototype" french="UX/UI design: plan de site, planche d'inspiration, maquette, prototype"/>
            </FadeInText>
        </div>
    );
}

export default AboutSkills;