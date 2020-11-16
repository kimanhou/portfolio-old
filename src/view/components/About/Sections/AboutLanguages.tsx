import React from 'react';
import Text from '../../LocalisationContext/Text';
import './AboutLanguages.scss';
import AboutKeyword from '../AboutKeyword';
import AboutTitle from '../AboutTitle';

interface IAboutLanguagesProps {
    aboutRef : HTMLDivElement | null;
}

const AboutLanguages : React.FC<IAboutLanguagesProps> = props => {
    return(
        <div className="about-languages">
            <AboutTitle title={<Text english="Languages" french="Langues"/>} aboutRef={props.aboutRef}/>
          &nbsp;&nbsp;&nbsp;&nbsp;<Text english="My brain mainly functions in French, my dreams and work are usually in English, I used to speak fluently German, my parents speak to me in Vietnamese, I can order food in Spanish, I can ask my way in Japanese." 
              french="Mon cerveau fonctionne principalement en français, je rêve et travaille généralement en anglais, je parlais couramment allemand à une époque, mes parents me parlent en vietnamien, je peux commander au restaurant en espagnol et demander mon chemin en japonais."/>
        
        </div>
    );
}

export default AboutLanguages;