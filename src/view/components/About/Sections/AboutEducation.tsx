import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutEducation.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';
import FadeInText from '../../FadeInText/FadeInText';

interface IAboutEducationProps {
    aboutRef : HTMLDivElement | null;
}

const AboutEducation : React.FC<IAboutEducationProps> = props => {
    return(
        <div className="about-education">
            <FadeInText aboutRef={props.aboutRef}>
                <AboutTitle title={<Text english="Education" french="Éducation"/>} aboutRef={props.aboutRef}/>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                <div className={`border`}>
                    <Text english="Double degree Keio University and Centrale Marseille" 
                        french="Double diplôme Keio University et Centrale Marseille"/>
                    <br></br>
                </div>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Master in Fundamental Science and Technology at Keio University, Tokyo with MEXT scholarship" french="Master à l'université de Keio, Tokyo avec la bourse MEXT"/>
                <br></br>
                <a href="https://im-lab.net/" target='_blank'>
                    <Text english="Research at Interactive Media Laboratory under Maki Sugimoto" french="Recherche au laboratoire "/>
                    <i><Text english="" french="Interactive Media"/></i>
                    <Text english="" french=" du professeur Maki Sugimoto"/>
                </a>
                <br></br>
                <a href="http://jesto.co.jp/" target='_blank'>
                    <Text english="2 month summer internship at Jesto, a web design agency" french="Stage de deux mois à Jesto, une agence de web design"/>
                </a>
                <br></br>
                <br></br>
                <a href="https://www.st.keio.ac.jp/en/tprofile/chem/suenaga.html" target='_blank'>
                    <Text english="Research at Natural Product Chemistry Laboratory under Kiyotake Suenaga" french="Recherche au laboratoire "/>
                    <i><Text english="" french="Natural Product Chemistry"/></i>
                    <Text english="" french=" du professeur Kiyotake Suenaga"/>
                </a>
                <br></br>
                <Text english="Paper published by Organic Letters" french="Article scientifique publié par Organic Letters "/>
                <a href="https://pubs.acs.org/doi/pdf/10.1021/ol5036722" target='_blank'>
                    <i><Text english="Jahanyne, an Apoptosis-Inducing Lipopeptide from the Marine Cyanobacterium Lyngbya sp." french="Jahanyne, an Apoptosis-Inducing Lipopeptide from the Marine Cyanobacterium Lyngbya sp."/></i>
                </a>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Master in Engineering at Centrale Marseille, Marseille" french="Diplôme de grande école d'ingénieur à Centrale Marseille, Marseille"/>
                <br></br>
                <a href="https://www.a-star.edu.sg/imcb" target='_blank'>
                    <Text english="Internship at Institute of Molecular and Cell Biology, A*STAR, Singapore avec SIGPA scholarship" french="Stage à "/>
                    <i><Text english="" french="Institute of Molecular and Cell Biology"/></i>
                    <Text english="" french=", un département de A*STAR à Singapour, avec la bourse SIGPA"/>
                </a>
                <br></br>
                <Text english="School project Mesh4fusion in collaboration with CEA Cadarache (creation of a software meshing tokamaks in a nuclear fusion reactor in Java)" french="Projet scolaire Mesh4fusion en collaboration avec le CEA de Cadarache (création d'un logiciel quadrillant les tokamaks dans un réacteur de fusion nucléaire en Java)"/>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Preparatory classes for selective entrance to French Engineering School at Saint Louis, Paris" french="Classes préparatoires PCSI et PC* au lycée Saint Louis, Paris"/>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="High school diploma with honors at Petit Val, Sucy en Brie" french="Baccalauréat S avec mention très bien en option Europe à Petit Val, Sucy en Brie"/>
            </FadeInText>
        </div>
    );
}

export default AboutEducation;