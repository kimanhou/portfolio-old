import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Home.scss';
import IAm from './IAm';
import SquareName from './SquareName';

const Home : React.FunctionComponent = props => {
  return (
    <div className={`home`}>
      <Navigation />
      <Logo />
      <SquareName />
      <IAm />
    </div>
  )
}
export default Home;
