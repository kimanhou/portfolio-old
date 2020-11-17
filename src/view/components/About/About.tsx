import React, { useState } from 'react';
import Text from '../LocalisationContext/Text';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SquareName from '../SquareName/SquareName';
import { SquareNameText } from '../SquareName/SquareNameText';
import './About.scss';
import AboutCurrentStatus from './Sections/AboutCurrentStatus';
import AboutTitle from './AboutTitle';
import AboutWork from './Sections/AboutWork';
import AboutLanguages from './Sections/AboutLanguages';
import AboutHobbies from './Sections/Hobbies/AboutHobbies';
import AboutEducation from './Sections/AboutEducation';
import AboutPersonalProjects from './Sections/AboutPersonalProjects';
import Languages from '../Languages/Languages';

interface IAboutProps {
  isVisible : boolean;
  displayedSquareNameText : SquareNameText;
  setDisplayedSquareNameText : (displayedText : SquareNameText) => void;
}

const About : React.FC<IAboutProps> = props => {
  var isVisibleClassname = props.isVisible ? "is-visible" : "";
  const [aboutRef, setAboutRef] = useState<HTMLDivElement | null>(null);

  return (
    <div className={`about ${isVisibleClassname}`} ref={setAboutRef} style={{ backgroundImage: "url('noise/noise-black.png')"}}>
      <Navigation isWhite={true} isAbout={true}/>
      <Logo isWhite={true} isAbout={true}/>
      <SquareName isWhite={true} isLeft={props.isVisible} displayedText={props.displayedSquareNameText} setDisplayedText={props.setDisplayedSquareNameText}/>
      <div className={`about-portrait`}>
        <img src="photos/portrait-blur.png" />
        <div className={`photo-credits`}>
          <a href="https://sorensolkaer.com/" target='_blank' ><Text english="Photo credits : Søren Solkær" french="Crédits photo : Søren Solkær"/></a>
        </div>
      </div>
      <div className={`about-intro`}>
        {/* <Text english="I don't like the question " french="Je n'aime pas la question "/>
        <i><Text english="&ldquo; Where do you come from ? &rdquo;" french="&ldquo; D'où viens-tu ? &rdquo;"/></i>
        <Text english=". It could have so many meanings depending who is asking and when : Where do you live ? Where did you grow up ? Where were you born ? Where did your parents grow up ? To all of these questions, I have a different answer." 
              french=". "/> */}
      </div>
      <div className={`about-text`}>
          
          <AboutCurrentStatus aboutRef={aboutRef}/>
          <AboutWork aboutRef={aboutRef}/>
          <AboutEducation aboutRef={aboutRef}/>
          <AboutLanguages aboutRef={aboutRef}/>
          <AboutHobbies aboutRef={aboutRef}/>
          <AboutPersonalProjects aboutRef={aboutRef}/>
        
      </div>
    </div>
  )
}
export default About;
