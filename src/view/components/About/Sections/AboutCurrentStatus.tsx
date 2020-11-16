import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutCurrentStatus.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';

interface IAboutCurrentStatusProps {
    aboutRef : HTMLDivElement | null;
}

const AboutCurrentStatus : React.FC<IAboutCurrentStatusProps> = props => {
    return(
        <div className="about-current-status">
            <AboutTitle title={<Text english="Current status" french="Situation actuelle"/>} aboutRef={props.aboutRef}/>
          &nbsp;&nbsp;&nbsp;&nbsp;<Text english="I left London in Septembre 2019 to " 
                french="J'ai quitté Londres en septembre 2019 pour "/>
          <AboutKeyword text={<Text english="travel around the world" french="un tour du monde"/>} />
          <Text english=". I started with Europe before making my way to South East Asia. I was in Thailand when the COVID-19 pandemic hit the world and had to return to France at the end of March 2020." 
                french=". J'ai commencé par l'Europe avant de continuer mon chemin vers l'Asie du Sud-Est. J'étais en Thaïlande lorsque la pandémie de la COVID-19 a frappé le monde et j'ai ainsi dû rentrer en France fin mars 2020."/>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;<Text english="During lockdown, I was asked by relatives to give a hand on a "
                french="Pendant le confinement, j'ai été sollicitée par des proches pour donner un coup de main sur un " />
          <a href="http://lescovideastes.fr/" target='_blank'><Text english="Wordpress website" french ="site Wordpress"/></a>
          <Text english=" and to help two local businesses create their website. To do so, I learned " 
                french =" et aider deux petits commerces à créer leur site web. Pour cela, j'ai appris "/>
          <AboutKeyword text={<Text english="React" french="React"/>} />
          <Text english=" and Typescript on my own. I also took an online 4 course specialization at Calarts on Coursera to learn more about " 
                french=" et Typescript en autonomie. J'ai également suivi une spécialisation en ligne à Calarts sur Coursera pour en apprendre davantage sur le "/>
          <AboutKeyword text={<Text english="UX and UI design" french="design UX et UI"/>} />
          <Text english="." french="."/>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;<Text english="I am looking for "
                french="Je suis à la recherche d'" />
          <AboutKeyword text={<Text english="short opportunities" french="opportunités courtes"/>} />
          <Text english=" while waiting for the sanitary situation to improve enough to allow me to keep travelling." french=" en attendant que la situation sanitaire ne s'améliore et de pouvoir reprendre les voyages."/>
        </div>
    );
}

export default AboutCurrentStatus;