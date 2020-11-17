import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutHobbies.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';
import FadeInText from '../../FadeInText/FadeInText';

interface IAboutHobbiesProps {
    aboutRef : HTMLDivElement | null;
}

const AboutHobbies : React.FC<IAboutHobbiesProps> = props => {
    return(
        <div className="about-hobbies">
            <FadeInText aboutRef={props.aboutRef}>
                <AboutTitle title={<Text english="Hobbies" french="Hobbies"/>} aboutRef={props.aboutRef}/>
            </FadeInText>
            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Nomad. I like to see how people live around the world." french="Nomade. J'aime découvrir comment les gens vivent à travers le monde."/>
                <br></br>
            </FadeInText>
            
            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="City girl. I've lived in Paris, Tokyo and London." french="Citadine. J'ai vécu à Paris, Tokyo et Londres."/>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Foodie. With an obsession for sushi and pizza." french="Foodie. Avec une obsession pour le bon pain, les sushis et les pizzas."/>
                <br></br>
            </FadeInText>
            
            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Musician since age 7. My favourite composers are Chopin and Schumann. Yes I am a romantic." french="Je joue du piano depuis l'âge de 7 ans. Mes compositeurs préférés sont Chopin et Schumann. J'aime à penser que les romantiques étaient les rock stars de leur époque."/>
                <br></br>
            </FadeInText>
            
            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Explorer. Be it a famous hike or a new restaurant in town, I like to try new things." french="Exploratrice. Que ce soit une randonnée connue ou un nouveau restaurant dans le quartier, j'aime expérimenter de nouvelles choses."/>
                <br></br>
            </FadeInText>
            
            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Minimalist. With the goal of owning a tiny house one day." french="Minimaliste. Avec pour objectif de faire construire ma propre tiny house un jour."/>
                <br></br>
            </FadeInText>
            
            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Sportive. Fitness, yoga, ski, tennis" french="Sportive. Fitness, yoga, ski, tennis"/>
            </FadeInText>
        </div>
    );
}

export default AboutHobbies;