import React from 'react';
import FadeInImage from '../../../FadeInImage/FadeInImage';
import FadeInText from '../../../FadeInText/FadeInText';
import Text from '../../../LocalisationContext/Text';
import AboutTitle from '../../AboutTitle';
import './AboutEducation.scss';
import AboutEducationDate from './AboutEducationDate';
import AboutEducationListItem from './AboutEducationListItem';
import ListItemTitle from './ListItemTitle';

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

            
            <div className={`one-line`}>
            <FadeInImage aboutRef={props.aboutRef} imgSrc='photos/keio.png'/>
                <div className={`column-left`}>
                    <AboutEducationDate aboutRef={props.aboutRef}>
                        <Text english="Sep&nbsp;2013 - Sep&nbsp;2015" french="Sep&nbsp;2013 - Sep&nbsp;2015"/>
                    </AboutEducationDate>
                </div>
                <div className={`column-right`}>
                    <ListItemTitle aboutRef={props.aboutRef}>
                        <span className={`kiona`}><Text english="Master in Fundamental Science and Technology at Keio University" 
                                                    french="Master en Sciences Fondamentales et Technologie à Keio University"/>
                        </span>
                        <Text english=", Tokyo with MEXT scholarship" 
                        french=", Tokyo avec la bourse MEXT"/>
                    </ListItemTitle>
                    <AboutEducationListItem aboutRef={props.aboutRef} imgSrc='icons/video-games.png' link='https://im-lab.net/'>
                        <Text english="Research at Interactive Media Laboratory under Maki Sugimoto" french="Recherche au laboratoire "/>
                        <i><Text english="" french="Interactive Media"/></i>
                        <Text english="" french=" du professeur Maki Sugimoto"/>
                    </AboutEducationListItem>

                    <AboutEducationListItem aboutRef={props.aboutRef} imgSrc='icons/web-design.png' link='http://jesto.co.jp/'>
                        <Text english="Internship at Jesto, a web design agency" french="Stage à Jesto, une agence de web design"/>
                    </AboutEducationListItem>

                    <AboutEducationListItem aboutRef={props.aboutRef} imgSrc='icons/chemistry.png' link='https://www.st.keio.ac.jp/en/tprofile/chem/suenaga.html'>
                        <Text english="Research at Natural Product Chemistry Laboratory under Kiyotake Suenaga" french="Recherche au laboratoire "/>
                        <i><Text english="" french="Natural Product Chemistry"/></i>
                        <Text english="" french=" du professeur Kiyotake Suenaga"/>
                    </AboutEducationListItem>

                    <AboutEducationListItem aboutRef={props.aboutRef} imgSrc='icons/paper.png' link='https://pubs.acs.org/doi/pdf/10.1021/ol5036722'>
                    <Text english="Paper published by Organic Letters named " french="Article scientifique publié par Organic Letters intitulé "/>
                        <i><Text english="Jahanyne, an Apoptosis-Inducing Lipopeptide from the Marine Cyanobacterium Lyngbya sp." french="Jahanyne, an Apoptosis-Inducing Lipopeptide from the Marine Cyanobacterium Lyngbya sp."/></i>
                    </AboutEducationListItem>
                </div>
            </div>

            <div className={`one-line`}>
            <FadeInImage aboutRef={props.aboutRef} imgSrc='photos/centralemarseille.png'/>
                <div className={`column-left`}>
                    <AboutEducationDate aboutRef={props.aboutRef}>
                        <Text english="Sep&nbsp;2009 - Sep&nbsp;2011" french="Sep&nbsp;2009 - Sep&nbsp;2011"/>
                    </AboutEducationDate>
                </div>
                <div className={`column-right`}>
                    <ListItemTitle aboutRef={props.aboutRef}>
                        <span className={`kiona`}><Text english="Master in Engineering at Centrale Marseille" 
                                                    french="Diplôme de grande école d'ingénieur à Centrale Marseille"/>
                        </span>
                    </ListItemTitle>
                    <AboutEducationListItem aboutRef={props.aboutRef} imgSrc='icons/dna.png' link='https://www.a-star.edu.sg/imcb'>
                        <Text english="Internship at Institute of Molecular and Cell Biology, A*STAR, Singapore avec SIGPA scholarship" french="Stage à "/>
                        <i><Text english="" french="Institute of Molecular and Cell Biology"/></i>
                        <Text english="" french=", un département de A*STAR à Singapour, avec la bourse SIGPA"/>
                    </AboutEducationListItem>

                    <AboutEducationListItem aboutRef={props.aboutRef} imgSrc='icons/code.png' link='https://www.cea.fr/Pages/le-cea/les-centres-cea/cadarache.aspx'>
                        <Text english="School project Mesh4fusion in collaboration with CEA Cadarache (creation of a software meshing tokamaks in a nuclear fusion reactor in Java)" french="Projet scolaire Mesh4fusion en collaboration avec le CEA de Cadarache (création d'un logiciel quadrillant les tokamaks dans un réacteur de fusion nucléaire en Java)"/>
                    </AboutEducationListItem>
                </div>
            </div>

            <div className={`one-line`}>
                <div className={`column-left`}>
                    <AboutEducationDate aboutRef={props.aboutRef}>
                        <Text english="Sep&nbsp;2011 - Sep&nbsp;2013" french="Sep&nbsp;2011 - Sep&nbsp;2013"/>
                    </AboutEducationDate>
                </div>
                <div className={`column-right`}>
                    <ListItemTitle aboutRef={props.aboutRef}>
                        <span className={`kiona`}><Text english="Preparatory classes for selective entrance to French Engineering School at Saint Louis, Paris" 
                                                french="Classes préparatoires PCSI et PC* au lycée Saint Louis, Paris"/>
                        </span>
                    </ListItemTitle>
                </div>
            </div>

            <div className={`one-line`}>
                <div className={`column-left`}>
                    <AboutEducationDate aboutRef={props.aboutRef}>
                        <Text english="Jun&nbsp;2009" french="Jun&nbsp;2009"/>
                    </AboutEducationDate>
                </div>
                <div className={`column-right`}>
                    <ListItemTitle aboutRef={props.aboutRef}>
                        <span className={`kiona`}><Text english="High school diploma with honors at Petit Val, Sucy en Brie" 
                                                french="Baccalauréat S avec mention très bien en option Europe à Petit Val, Sucy en Brie"/>
                        </span>
                    </ListItemTitle>
                </div>
            </div>
        </div>
    );
}

export default AboutEducation;