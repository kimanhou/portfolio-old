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
                <div className={`column-left`}>
                    <Text english="Languages" french="Langages"/>
                    <div className={`underline`}></div>
                </div>
                <div className={`column-right`}>
                    <Text english="C#, Javascript, Typescript" french="C#, Javascript, Typescript"/>
                </div>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                <div className={`column-left`}>
                    <Text english="Frameworks" french="Frameworks"/>
                    <div className={`underline`}></div>
                </div>
                <div className={`column-right`}>
                    <Text english=".NET, React" french=".NET, React"/>
                </div>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                <div className={`column-left`}>
                    <Text english="Database" french="Base de données"/>
                    <div className={`underline`}></div>
                </div>
                <div className={`column-right`}>
                    <Text english="SQL Server, MySQL, Sybase" french="SQL Server, MySQL, Sybase"/>
                </div>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                <div className={`column-left`}>
                    <Text english="Version control" french="Gestion de versions"/>
                    <div className={`underline`}></div>
                </div>
                <div className={`column-right`}>
                    <Text english="Git, TFS" french="Git, TFS"/>
                </div>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
            <div className={`column-left`}>
                    <Text english="Software development life cycle" french="Cycle de vie du développement logiciel"/>
                    <div className={`underline`}></div>
                </div>
                <div className={`column-right`}>
                    <Text english="Agile methodology, continuous delivery, Kanban process, test pyramid" french="méthode Agile, livraison continue, méthode Kanban, pyramide des tests"/>
                </div>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                <div className={`column-left`}>
                    <Text english="UX/UI design" french="UX/UI design"/>
                    <div className={`underline`}></div>
                </div>
                <div className={`column-right`}>
                    <Text english="site map, moodboard, wireframing, mockup, prototype" french="plan de site, planche d'inspiration, maquette, prototype"/>
                </div>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                <div className={`column-left`}>
                    <Text english="Soft skills" french="Soft skills"/>
                    <div className={`underline`}></div>
                </div>
                <div className={`column-right`}>
                    <Text english="independent, quick learner, analytical mind" french="autonome, apprend vite, esprit de synthèse"/>
                </div>
            </FadeInText>
        </div>
    );
}

export default AboutSkills;