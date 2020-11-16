import React, { HtmlHTMLAttributes, useRef, useState } from 'react';
import SquareName from '../SquareName/SquareName';
import Text from '../LocalisationContext/Text';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './About.scss';
import { SquareNameText } from '../SquareName/SquareNameText';
import ScreenDetector from '../ScreenDetector/screenDetector';

interface IAboutProps {
  isVisible : boolean;
  displayedSquareNameText : SquareNameText;
  setDisplayedSquareNameText : (displayedText : SquareNameText) => void;
}

const About : React.FC<IAboutProps> = props => {
  var isVisibleClassname = props.isVisible ? "is-visible" : "";

  var [onActiveCurrentStatusClassname, setOnActiveCurrentStatusClassname] = useState("");
  const onActiveCurrentStatus = () => {
    setOnActiveCurrentStatusClassname("active");
  }

  const onUnactiveCurrentStatus = () => {
    setOnActiveCurrentStatusClassname("");
  }

  var [onActiveWorkClassname, setOnActiveWorkClassname] = useState("");
  const onActiveWork = () => {
    setOnActiveWorkClassname("active");
  }

  const onUnactiveWork = () => {
    setOnActiveWorkClassname("");
  }

  var [onActiveLifeClassname, setOnActiveLifeClassname] = useState("");
  const onActiveLife = () => {
    setOnActiveLifeClassname("active");
  }

  const onUnactiveLife = () => {
    setOnActiveLifeClassname("");
  }

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
        <Text english="I don't like the question " french="Je n'aime pas la question "/>
        <i><Text english="&ldquo; Where do you come from ? &rdquo;" french="&ldquo; D'où viens-tu ? &rdquo;"/></i>
        <Text english=". It could have so many meanings depending who is asking and when : Where do you live ? Where did you grow up ? Where were you born ? Where did your parents grow up ? To all of these questions, I have a different answer." 
              french=". "/>
      </div>
      <div className={`about-text`}>
        <div className={`about-text-title ${onActiveCurrentStatusClassname}`}>
            <div className={`about-text-title-line-before`}></div>
            <div className={`about-text-title-text`}><Text english="Current status" french=""/></div>
            <div className={`about-text-title-line`}>
              <div className={`about-text-title-line-inside`}></div>
            </div>
            <ScreenDetector scrollRef={aboutRef} onActive={onActiveCurrentStatus} onUnactive={onUnactiveCurrentStatus} className={`screen-detector-work`}/>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;<Text english="I left London in Septembre 2019 to " 
                french="J'ai quitté Londres en septembre 2019 pour "/>
          <span className="kiona"><span className="kiona-background"></span><Text english="travel around the world" french="un tour du monde"/></span>
          <Text english=". I started with Europe before making my way to South East Asia. I was in Thailand when the COVID-19 pandemic hit the world and had to return to France at the end of March 2020." 
                french=". J'ai commencé par l'Europe avant de continuer mon chemin vers l'Asie du Sud-Est. J'étais en Thaïlande lorsque la pandémie de la COVID-19 a frappé le monde et j'ai ainsi dû rentrer en France fin mars 2020."/>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;<Text english="During lockdown, I was asked by relatives to give a hand on a "
                french="Pendant le confinement, j'ai été sollicitée par des proches pour donner un coup de main sur un " />
          <a href="http://lescovideastes.fr/" target='_blank'><Text english="Wordpress website" french ="site Wordpress"/></a>
          <Text english=" and to help two local businesses create their website. To do so, I learned " 
                french =" et aider deux petits commerces à créer leur site web. Pour cela, j'ai appris "/>
          <span className="kiona"><span className="kiona-background"></span><Text english="React" french="React"/></span>
          <Text english=" and Typescript on my own. I also took an online 4 course specialization at Calarts on Coursera to learn more about " 
                french=" et Typescript en autonomie. J'ai également suivi une spécialisation en ligne à Calarts sur Coursera pour en apprendre davantage sur le "/>
          <span className="kiona"><span className="kiona-background"></span><Text english="UX and UI design" french="design UX et UI"/></span>
          <Text english="." french="."/>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;<Text english="I am looking for "
                french="Je suis à la recherche d'" />
          <span className="kiona"><span className="kiona-background"></span><Text english="short opportunities" french="opportunités courtes"/></span>
          <Text english=" while waiting for the sanitary situation to improve enough to allow me to keep travelling." french=" en attendant que la situation sanitaire ne s'améliore et de pouvoir reprendre les voyages."/>
          <br></br>
          <br></br>
        <div className={`about-text-title ${onActiveWorkClassname}`}>
          <div className={`about-text-title-line-before`}></div>
          <div className={`about-text-title-text`}>Work</div>
          <div className={`about-text-title-line`}>
            <div className={`about-text-title-line-inside`}></div>
          </div>
          <ScreenDetector scrollRef={aboutRef} onActive={onActiveWork} onUnactive={onUnactiveWork} className={`screen-detector-work`}/>
        </div>
        <Text english="4 years in London at Société Générale as a developer. I worked for the front office team of the Commodities department." 
              french="4 ans à Londres à la Société Générale en tant que développeuse."/>
        <br></br>
        <br></br>
        <div className={`about-text-title ${onActiveLifeClassname}`}>
          <div className={`about-text-title-line-before`}></div>
          <div className={`about-text-title-text`}>Life</div>
            <div className={`about-text-title-line`}>
              <div className={`about-text-title-line-inside`}></div>
            </div>
          <ScreenDetector scrollRef={aboutRef} onActive={onActiveLife} onUnactive={onUnactiveLife} className={`screen-detector-life`}/>
        </div>
        <br></br>
        <Text english="My brain mainly functions in French, my dreams and work are usually in English, I used to speak fluently German, my parents speak to me in Vietnamese, I can order food in Spanish, I can ask my way in Japanese." 
              french="Mon cerveau fonctionne principalement en français, je rêve et travaille généralement en anglais, je parlais couramment allemand à une époque, mes parents me parlent en vietnamien, je peux commander au restaurant en espagnol et demander mon chemin en japonais."/>
        <br></br>
        <br></br>
        <Text english="Nomad. I like to see how people live around the world." french="Nomade. J'aime découvrir comment les gens vivent à travers le monde."/>
        <br></br>
        <Text english="City girl. I've lived in Paris, Tokyo and London." french="Citadine. J'ai vécu à Paris, Tokyo et Londres."/>
        <br></br>
        <Text english="Foodie. With an obsession for sushi and pizza." french="Foodie. Avec une obsession pour le bon pain, les sushis et les pizzas."/>
        <br></br>
        <Text english="Musician since age 7. My favourite composers are Chopin and Schumann. Yes I am a romantic." french="Je joue du piano depuis l'âge de 7 ans. Mes compositeurs préférés sont Chopin et Schumann. J'aime à penser que les romantiques étaient les rock stars de leur époque."/>
        <br></br>
        <Text english="Explorer. Be it a famous hike or a new restaurant in town, I like to try new things." french="Exploratrice. Que ce soit une randonnée connue ou un nouveau restaurant dans le quartier, j'aime expérimenter de nouvelles choses."/>
        <br></br>
        <Text english="0 patience but I'm working on it. I started an impossible 1000 piece jigsaw." french="Aucune patience mais j'y travaille. J'ai commencé un puzzle impossible de 1000 pièces."/>
        <br></br>
        <Text english="Honest. Some people would say too honest." french="Honnête. Certains diront trop honnête."/>
        <br></br>
        <br></br>
        
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero quis sapien ultrices lacinia in vitae elit. Phasellus sollicitudin tortor non augue suscipit ullamcorper. Donec scelerisque neque nunc, nec ornare nulla placerat blandit. Integer eget consectetur magna. Phasellus sed magna velit. Duis non sapien eget nibh dictum placerat at scelerisque velit. Etiam sed pellentesque turpis. Morbi condimentum mi ac lobortis auctor. Vestibulum sagittis nulla ac risus pretium tristique. Donec aliquet quis mauris vitae sagittis.
      <br></br>
      <br></br>
      Duis faucibus tincidunt dui, in posuere urna rhoncus vel. Aenean egestas, leo a placerat hendrerit, tellus ante hendrerit ante, nec rutrum sem dolor vel turpis. Nam sollicitudin arcu et venenatis fermentum. Nullam aliquam ex turpis, vitae eleifend libero consectetur ac. Curabitur ultrices cursus pharetra. Cras pulvinar convallis ullamcorper. Praesent nec arcu justo. Etiam mollis semper aliquet. Nam eget augue ut nunc lobortis vulputate non at magna.
      <br></br>
      <br></br>
      Cras mollis aliquet neque, tincidunt varius leo posuere at. Sed aliquet enim ac rhoncus pulvinar. Donec ut ex quam. Nam ultrices risus ut odio facilisis rhoncus. Quisque odio arcu, lobortis non lectus ut, fringilla fermentum sapien. Vivamus accumsan dolor arcu, gravida pellentesque lorem dignissim a. Integer semper congue gravida. Nam a dictum ex. Praesent varius risus sed nibh semper, sed malesuada quam laoreet. In eleifend porta turpis, id luctus leo.
      <br></br>
      <br></br>
      Praesent dolor odio, rutrum quis volutpat quis, consequat nec elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum aliquet dui nec tellus interdum, a tempus ex lobortis. Donec sit amet hendrerit sem, in bibendum ipsum. Ut quis augue tincidunt, interdum metus id, sollicitudin dolor. Cras sagittis faucibus laoreet. Maecenas tempor velit fringilla mattis consectetur. Aliquam finibus enim porta massa luctus, vitae volutpat tellus mollis. Praesent faucibus in sapien quis rutrum.
      <br></br>
      <br></br>
      Phasellus efficitur leo nisi, ac semper nulla ullamcorper ut. Fusce sit amet cursus sapien. Ut rhoncus elementum est, in blandit tortor ullamcorper at. Etiam ac enim et felis mollis maximus ac a magna. Pellentesque nulla tellus, suscipit non scelerisque vitae, gravida vel ipsum. Proin auctor tellus id quam aliquet aliquam non at odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quis odio vitae felis pretium consectetur nec ut erat. Nulla rutrum elit erat, ac laoreet ante ultricies quis. Mauris suscipit imperdiet felis, a pellentesque odio pellentesque ac. In hac habitasse platea dictumst. Proin fringilla magna quam, eget sagittis lectus vestibulum nec. Maecenas id libero et leo ultrices vulputate. Vivamus placerat ullamcorper auctor. Quisque ornare ex ac mauris auctor semper. Nulla pretium, ante id commodo ultricies, ante felis commodo odio, quis rhoncus libero sem ultrices dolor.
      </div>
    </div>
  )
}
export default About;
