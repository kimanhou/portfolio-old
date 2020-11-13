import React from 'react';
import SquareName from '../SquareName/SquareName';
import Text from '../LocalisationContext/Text';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './About.scss';
import { SquareNameText } from '../SquareName/SquareNameText';

interface IAboutProps {
  isVisible : boolean;
  displayedSquareNameText : SquareNameText;
  setDisplayedSquareNameText : (displayedText : SquareNameText) => void;
}

const About : React.FC<IAboutProps> = props => {
  var isVisibleClassname = props.isVisible ? "is-visible" : "";
  return (
    <div className={`about ${isVisibleClassname}`} style={{ backgroundImage: "url('noise/noise-black.png')"}}>
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
        <Text english="Kim Anh, born in 1991" french="Kim Anh, née en 1991" />
        <br></br>
        <Text english="I don't like the question " french="Je n'aime pas la question "/>
        <i><Text english="&ldquo; Where do you come from ? &rdquo;" french="&ldquo; D'où viens-tu ? &rdquo;"/></i>
        <Text english=". It could have so many meanings : Where were you an hour ago ? Where do you live ? Where did you grow up ? Where were you born ? Where did your parents grow up ? To all of these questions, I have a different answer." french=". "/>
      </div>
      <div className={`about-text`}>
        <Text english="I'm a nomad. I like to see how people live around the world." french=""/>
        <br></br>
        <Text english="I'm a city girl. I've lived in Paris, Tokyo and London." french=""/>
        <br></br>
        <Text english="I'm a foodie with an obsession for sushi and pizza." french=""/>
        <br></br>
        <Text english="I'm a musician since age 7. My favourite composers are Chopin and Schumann. Yes I am a romantic." french="Je joue du piano depuis l'âge de 7 ans. Mes compositeurs préférés sont Chopin et Schumann. J'aime à penser que les romantiques étaient les rock stars de leur époque."/>
        <br></br>
        <Text english="I'm an explorer. Be it a famous hike or a new restaurant in town, I like to try new things." french=""/>
        <br></br>
        <Text english="I have 0 patience but I'm working on it. I started an impossible 1000 piece jigsaw." french=""/>
        <br></br>
        <Text english="I'm frank." french=""/>
        <br></br>
        <br></br>
        <Text english="My brain mainly functions in French, dreams and work are usually in English, I used to speak fluently German, my parents speak to me in Vietnamese, I can order food in Spanish, I can ask my way in Japanese." french=""/>
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
