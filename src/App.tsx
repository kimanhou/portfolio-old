import React from 'react';
import './App.scss';
import Footer from './view/components/Footer/Footer';
import Home from './view/components/Home/Home';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <Home/>
      <Footer/>
    </div>
  )
}
export default App;
