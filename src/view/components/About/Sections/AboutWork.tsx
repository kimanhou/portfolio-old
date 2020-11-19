import React, { useState } from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutWork.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';
import FadeInText from '../../FadeInText/FadeInText';

interface IAboutWorkProps {
    aboutRef : HTMLDivElement | null;
}

const AboutWork : React.FC<IAboutWorkProps> = props => {
    return(
        <div className="about-work">
            <FadeInText aboutRef={props.aboutRef}>
                <AboutTitle title={<Text english="Work" french="Expérience"/>} aboutRef={props.aboutRef}/>
            </FadeInText>
            <FadeInText aboutRef={props.aboutRef}>
                <div className={`border`}>
                    <Text english="2015 - 2019 Full-stack developer with 4 years of experience in finance in London" 
                        french="2015 - 2019 Développeure full-stack avec 4 ans d'expérience en finance à Londres"/>
                    <br></br>
                    <div className={`border-keywords-container`}>
                        <div className={`border-keywords`}>
                            &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Language : &nbsp;&nbsp;" french="Langage: &nbsp;&nbsp;"/><AboutKeyword text={<Text english="C#" french="C#"/>}/>
                            <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Database : &nbsp;&nbsp;" french="Base de données: &nbsp;&nbsp;"/>
                            <AboutKeyword text={<Text english="SQL Server" french="SQL Server"/>}/>
                            <Text english=",&nbsp;&nbsp; " french=",&nbsp;&nbsp; "/>
                            <AboutKeyword text={<Text english="Sybase" french="Sybase"/>}/>
                            <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<Text english="Version control : &nbsp;&nbsp;" french="Gestion de versions: &nbsp;&nbsp;"/><AboutKeyword text={<Text english="Git, TFS" french="Git, TFS"/>}/>
                        </div>
                    </div>
                </div>
            </FadeInText>
            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="I worked on an internal application used by the traders and sales of the Commodities department to enter their trades and manage their orders." 
                    french="J'ai travaillé sur une application interne utilisée par les traders et les sales du département Commodités pour rentrer leurs trades et suivre leurs ordres."/>
                <AboutKeyword text={<Text english="" french=""/>}/>
                    <Text english="" french="" />
            </FadeInText>
            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="The team - organised within an " 
                    french="L'équipe - organisée selon une "/>
                    <AboutKeyword text={<Text english="Agile" french="méthode Agile"/>}/>
                    <Text english=" methodology -  followed a weekly release schedule, our goal was to reach " 
                    french=" - suivait un planning d'une release par semaine, avec pour objectif d'atteindre la "/>
                    <AboutKeyword text={<Text english="continuous delivery" french="livraison continue"/>}/>
                    <Text english=". To this end, I took part in improving the release process, reaching no downtime for part of the services. Our software delivery was user-centric with extensive support provided." 
                          french=". À ces fins, j'ai activement conttribué à améliorer le processus de mise en production, une partie des services pouvant ainsi être délivrés sans coupure. Nous veillions également à apporter aux utilisateurs un support soigné." />
            </FadeInText>
            <FadeInText aboutRef={props.aboutRef}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text english="As a side project, I developed a " 
                    french="Sur le côté, j'ai développé un "/>
                    <AboutKeyword text={<Text english="bot" french="bot"/>}/>
                    <Text english=" to allow users to check the status of their operations. I also took part in the CTY " 
                    french=" pour permettre aux utilisateurs de vérifier le status de leurs opérations. J'ai également participé au "/>
                    <AboutKeyword text={<Text english="Hackathon" french="Hackathon"/>}/>
                    <Text english=", organised in Paris in December 2018, where I won first prize." 
                    french=" de CTY, organisé à Paris en décembre 2018, où j'ai décroché la première place."/>
            </FadeInText>
        </div>
    );
}

export default AboutWork;