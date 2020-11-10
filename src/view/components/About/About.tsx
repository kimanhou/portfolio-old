import React from 'react';
import SquareName from '../Home/SquareName';
import Text from '../LocalisationContext/Text';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './About.scss';

interface IAboutProps {
  isVisible : boolean;
}

const About : React.FC<IAboutProps> = props => {
  var isVisibleClassname = props.isVisible ? "is-visible" : "";
  return (
    <div className={`about ${isVisibleClassname}`} style={{ backgroundImage: "url('noise/noise-black.png')"}}>
      <Navigation isWhite={true} isAbout={true}/>
      <Logo isWhite={true} isAbout={true}/>
      <SquareName isWhite={true} isLeft={true}/>
      <div className={`about-portrait`}>
        <img src="photos/portrait-blur.png" />
        <div className={`photo-credits`}>
          <a href="https://sorensolkaer.com/" target='_blank' ><Text english="Photo credits : Søren Solkær" french="Crédits photo : Søren Solkær"/></a>
        </div>
      </div>
      <div className={`about-intro`}>
        Hello world,
        <br></br>
        my name is Kim Anh, I was born in 1991.
      </div>
      <div className={`about-text`}>
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
