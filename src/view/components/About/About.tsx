import React, { useState } from 'react';
import Text from '../LocalisationContext/Text';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ScreenDetector from '../ScreenDetector/screenDetector';
import SquareName from '../SquareName/SquareName';
import { SquareNameText } from '../SquareName/SquareNameText';
import './About.scss';
import AboutCurrentStatus from './Sections/AboutCurrentStatus';
import AboutPersonalProjects from './Sections/AboutPersonalProjects';
import AboutSkills from './Sections/AboutSkills';
import AboutWork from './Sections/AboutWork';
import AboutEducation from './Sections/Education/AboutEducation';
import AboutHobbies from './Sections/Hobbies/AboutHobbies';
import AboutLanguages from './Sections/Languages/AboutLanguages';

interface IAboutProps {
  isVisible : boolean;
  displayedSquareNameText : SquareNameText;
  setDisplayedSquareNameText : (displayedText : SquareNameText) => void;
}

const About : React.FC<IAboutProps> = props => {
  var isVisibleClassname = props.isVisible ? "is-visible" : "";
  const [aboutRef, setAboutRef] = useState<HTMLDivElement | null>(null);
  const [portraitVisible, setPortraitVisible] = useState(true);
  const isPortraitVisible = portraitVisible ? "is-portrait-visible" : "";
  return (
    <div className={`about ${isVisibleClassname}`} ref={setAboutRef} style={{ backgroundImage: "url('noise/noise-black.png')"}}>
      <Navigation isWhite={true} isAbout={true}/>
      <Logo isWhite={true} isAbout={true}/>
      <SquareName isWhite={true} isLeft={props.isVisible} displayedText={props.displayedSquareNameText} setDisplayedText={props.setDisplayedSquareNameText}/>
      <div className={`about-portrait ${isPortraitVisible}`}>
        <img src="photos/portrait.png" />
        <div className={`photo-credits`}>
          <a href="https://sorensolkaer.com/" target='_blank' ><Text english="Photo credits : Søren Solkær" french="Crédits photo : Søren Solkær"/></a>
        </div>
        <ScreenDetector className={`portrait-detector`} scrollRef={aboutRef} onActive={() => setPortraitVisible(true)} onUnactive={() => setPortraitVisible(false)}/>
      </div>
      <div className={`about-intro`}>
      </div>
      <div className={`about-text`}>
          <AboutCurrentStatus aboutRef={aboutRef}/>
          <AboutSkills aboutRef={aboutRef}/>
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
