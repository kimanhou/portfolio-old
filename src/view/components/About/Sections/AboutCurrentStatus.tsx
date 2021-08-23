import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutCurrentStatus.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';
import FadeInText from '../../FadeInText/FadeInText';

interface IAboutCurrentStatusProps {
    aboutRef : HTMLDivElement | null;
}

const AboutCurrentStatus : React.FC<IAboutCurrentStatusProps> = props => {
    return(
        <div className="about-current-status">
            <FadeInText aboutRef={props.aboutRef}>
                  <AboutTitle title={<Text english="Current status" french="Situation actuelle"/>} aboutRef={props.aboutRef}/>
            </FadeInText>
            <FadeInText aboutRef={props.aboutRef}>
                  &nbsp;&nbsp;&nbsp;&nbsp;<Text english="I left London in Septembre 2019 to " 
                                                french="J'ai quitté Londres en septembre 2019 pour "/>
                  <AboutKeyword text={<Text english="travel around the world" french="un tour du monde"/>} />
                  <Text english=". I started in Europe before making my way to South East Asia. I was in Thailand when the COVID-19 pandemic hit the world and had to return to France at the end of March 2020." 
                        french=". J'ai commencé par l'Europe avant de continuer mon chemin vers l'Asie du Sud-Est. J'étais en Thaïlande lorsque la pandémie de la COVID-19 a frappé le monde, ce qui m'a contrainte à rentrer en France fin mars 2020."/>
                  <br></br>
            </FadeInText>
            <FadeInText aboutRef={props.aboutRef}>
                  &nbsp;&nbsp;&nbsp;&nbsp;<Text english="During lockdown, I was asked by relatives to create websites, in order to support local businesses and an "
                        french="Pendant le confinement, j'ai été sollicitée par des proches pour créer des sites web et ainsi aider des petits commerces et une " />
                  <a href="http://lescovideastes.fr/" target='_blank'><Text english="association" french ="association"/></a>
                  <Text english=". This allowed me to expand my skills on both " 
                        french =". Ces expériences m'ont permis de développer mes compétences en "/>
                  <AboutKeyword text={<Text english="React" french="React"/>} />
                  <Text english=" and Typescript. I also took an online 4 course specialization with Calarts on Coursera to learn more about " 
                        french=" et Typescript en autonomie. J'ai également suivi une spécialisation en ligne à Calarts sur Coursera pour en apprendre davantage sur le "/>
                  <AboutKeyword text={<Text english="UX and UI design" french="design UX et UI"/>} />
                  <Text english="." french="."/>
                  <br></br>
            </FadeInText>
            <FadeInText aboutRef={props.aboutRef}>
                  &nbsp;&nbsp;&nbsp;&nbsp;<Text english="I am currently looking for "
                        french="Je suis actuellement à la recherche d'" />
                  <AboutKeyword text={<Text english="opportunities to return to Tokyo to work." french="opportunités pour retourner à Tokyo travailler"/>} />
                  <Text english="." french="."/>
            </FadeInText>
        </div>
    );
}

export default AboutCurrentStatus;