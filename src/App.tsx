import React from 'react';
import './App.scss';
import Home from './view/components/Home/Home';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <Home/>
    </div>
  )
}
export default App;
