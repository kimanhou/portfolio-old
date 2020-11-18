import React from 'react';
import Text from '../../../LocalisationContext/Text';
import './AboutLanguages.scss';
import AboutKeyword from '../../AboutKeyword';
import AboutTitle from '../../AboutTitle';
import FadeInText from '../../../FadeInText/FadeInText';
import Language from './Language';

interface IAboutLanguagesProps {
    aboutRef : HTMLDivElement | null;
}

const AboutLanguages : React.FC<IAboutLanguagesProps> = props => {
    return(
        <div className="about-languages">
            <FadeInText aboutRef={props.aboutRef}>
                <AboutTitle title={<Text english="Languages" french="Langues"/>} aboutRef={props.aboutRef}/>
            </FadeInText>

            <Language aboutRef={props.aboutRef} imgSrc='icons/french-flag.png'>
                <AboutKeyword text={<Text english="French." french="Français."/>}/>
                <Text english="&nbsp;&nbsp; My bain mainly functions in French." french="&nbsp;&nbsp; Mon cerveau fonctionne principalement en français."/>
            </Language>

            <Language aboutRef={props.aboutRef} imgSrc='icons/uk-flag.png'>
                <AboutKeyword text={<Text english="English." french="Anglais."/>}/>
                <Text english="&nbsp;&nbsp; I used to live and work in London." french="&nbsp;&nbsp; Je vivais et travaillais à Londres."/>
            </Language>

            <Language aboutRef={props.aboutRef} imgSrc='icons/german-flag.png'>
                <AboutKeyword text={<Text english="German." french="Allemand."/>}/>
                <Text english="&nbsp;&nbsp; I used to be fluent in German." french="&nbsp;&nbsp; Je parlais allemand couramment à une époque."/>
            </Language>

            <Language aboutRef={props.aboutRef} imgSrc='icons/vietnamese-flag.png'>
                <AboutKeyword text={<Text english="Vietnamese." french="Vietnamien."/>}/>
                <Text english="&nbsp;&nbsp; I know when I'm being scammed in a market in Hà Nội." french="&nbsp;&nbsp; Je sais quand on essaye de m'embobiner au marché à Hà Nội."/>
            </Language>

            <Language aboutRef={props.aboutRef} imgSrc='icons/japanese-flag.png'>
                <AboutKeyword text={<Text english="Japanese." french="Japonais."/>}/>
                <Text english="&nbsp;&nbsp; I can ask my way when I'm lost in Tokyo." french="&nbsp;&nbsp; Je peux demander mon chemin quand je suis perdue à Tokyo."/>
            </Language>

            <Language aboutRef={props.aboutRef} imgSrc='icons/spanish-flag.png'>
                <AboutKeyword text={<Text english="Spanish." french="Espagnol."/>}/>
                <Text english="&nbsp;&nbsp; I can order tapas in Barcelona." french="&nbsp;&nbsp; Je suis capable de commander des tapas à Barcelone."/>
            </Language>
        </div>
    );
}

export default AboutLanguages;