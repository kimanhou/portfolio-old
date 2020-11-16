import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutEducation.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';

interface IAboutEducationProps {
    aboutRef : HTMLDivElement | null;
}

const AboutEducation : React.FC<IAboutEducationProps> = props => {
    return(
        <div className="about-hobbies">
            <AboutTitle title={<Text english="Education" french="Éducation"/>} aboutRef={props.aboutRef}/>
            &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Master at Keio University, Tokyo" french="Master à l'université de Keio, Tokyo"/>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Master at Centrale Marseille, Marseille" french="Diplôme de grand école d'ingénieur à Centrale Marseille, Marseille"/>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Undergraduate at Saint Louis, Paris" french="PCSI, PC* au lycée Saint Louis, Paris"/>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;<Text english="High school graduation with honors at Petit Val, Sucy en Brie" french="Baccalauréat S avec mention très bien en option Europe à Petit Val, Sucy en Brie"/>
        </div>
    );
}

export default AboutEducation;