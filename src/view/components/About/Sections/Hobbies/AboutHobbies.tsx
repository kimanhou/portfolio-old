import React from 'react';
import Text from '../../../LocalisationContext/Text';
import './AboutHobbies.scss';
import AboutKeyword from '../../AboutKeyword';
import AboutTitle from '../../AboutTitle';
import FadeInText from '../../../FadeInText/FadeInText';
import Hobby from './Hobby';

interface IAboutHobbiesProps {
    aboutRef : HTMLDivElement | null;
}

const AboutHobbies : React.FC<IAboutHobbiesProps> = props => {
    return(
        <div className="about-hobbies">
            <FadeInText aboutRef={props.aboutRef}>
                <AboutTitle title={<Text english="Hobbies" french="Loisirs"/>} aboutRef={props.aboutRef}/>
            </FadeInText>
            <Hobby aboutRef={props.aboutRef} imgSrc='icons/travel.png' >
                <AboutKeyword text={<Text english="Nomad." french="Nomade."/>}/>
                <Text english="&nbsp;&nbsp; I like to experience different cultures." french="&nbsp;&nbsp; J'aime partir à la découverte des cultures du monde."/>
            </Hobby>
            <Hobby aboutRef={props.aboutRef} imgSrc='icons/pizza.png'>
                <AboutKeyword text={<Text english="Foodie." french="Foodie."/>}/>
                <Text english="&nbsp;&nbsp; With an obsession for bread, sushi and pizza." french="&nbsp;&nbsp; Avec une obsession pour le bon pain, les sushis et les pizzas."/>
            </Hobby>
            <Hobby aboutRef={props.aboutRef} imgSrc='icons/piano.png'>
                <AboutKeyword text={<Text english="Musician" french="Musicienne."/>}/>
                <Text english="&nbsp;&nbsp; since age 7. My favourite composers are Chopin and Schumann. Yes I am a romantic." french="&nbsp;&nbsp; Je joue du piano depuis l'âge de 7 ans. Mes compositeurs préférés sont Chopin et Schumann. J'aime à penser que les romantiques étaient les rock stars de leur époque."/>
            </Hobby>
            <Hobby aboutRef={props.aboutRef} imgSrc='icons/sport.png'>
                <AboutKeyword text={<Text english="Sporty." french="Sportive."/>}/>
                <Text english="&nbsp;&nbsp; Fitness, yoga, ski, tennis" french="&nbsp;&nbsp; Fitness, yoga, ski, tennis"/>
            </Hobby>
            <Hobby aboutRef={props.aboutRef} imgSrc='icons/tiny-house.png'>
                <AboutKeyword text={<Text english="Minimalist." french="Minimaliste."/>}/>
                <Text english="&nbsp;&nbsp; With the goal of owning a tiny house one day." french="&nbsp;&nbsp; Avec pour objectif d'un jour faire construire ma propre tiny house."/>
            </Hobby>
        </div>
    );
}

export default AboutHobbies;