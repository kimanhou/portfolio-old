import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutPersonalProjects.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';
import FadeInText from '../../FadeInText/FadeInText';

interface IAboutPersonalProjectsProps {
    aboutRef : HTMLDivElement | null;
}

const AboutPersonalProjects : React.FC<IAboutPersonalProjectsProps> = props => {
    return(
        <div className="about-personal-projects">
            <FadeInText aboutRef={props.aboutRef} noDelay>
                <AboutTitle title={<Text english="Personal projects &amp; freelance" french="Projets personnels &amp; freelance"/>} aboutRef={props.aboutRef}/>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef} noDelay>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://kimanhou.github.io/mirbat/" target='_blank'>
                    <AboutKeyword text={<Text english="Mirbat" french="Mirbat"/>}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Text english="Work in progress - freelance project for a construction company" 
                        french="Projet en cours - Site vitrine pour une entreprise du bâtiment" />
                </a>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef} noDelay>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://d1ox9oc0wr7i8k.cloudfront.net/" target='_blank'>
                    <AboutKeyword text={<Text english="Coffee" french="Coffee"/>}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Text english="Demonstration website for a restaurant, entirely customisable" 
                        french="Démonstration de faisabilité d'un site internet pour restaurateur entièrement éditable" />
                </a>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef} noDelay>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://kimanhou.github.io/maki-blog/" target='_blank'>
                    <AboutKeyword text={<Text english="Blog" french="Blog"/>}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Text english="Personal blog about web design" 
                        french="Blog personnel sur le web design" />
                </a>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef} noDelay>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://d27t1kd47xpamf.cloudfront.net/" target='_blank'>
                    <AboutKeyword text={<Text english="To&amp;Cie" french="To&amp;Cie"/>}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Text english="Website of a local Vietnamese restaurant in Montrouge" 
                        french="Site internet d'un restaurant vietnamien à Montrouge" />
                </a>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef} noDelay>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="http://correctoptic.fr/" target='_blank'>
                    <AboutKeyword text={<Text english="Correct Optic" french="Correct Optic"/>}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Text english="Website of a local optician in Villejuif" 
                        french="Site internet d'un opticien à Villejuif" />
                </a>
                <br></br>
            </FadeInText>

            <FadeInText aboutRef={props.aboutRef} noDelay>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://kimanhou.github.io/corsica/" target='_blank'>
                    <AboutKeyword text={<Text english="Corsica" french="Corse"/>}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Text english="Website about a roadtrip in Corsica" 
                        french="Site internet sur un voyage en Corse" />
                </a>
                <br></br>
            </FadeInText>
            
            
        </div>
    );
}

export default AboutPersonalProjects;