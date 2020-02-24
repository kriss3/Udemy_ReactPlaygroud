import React from 'react';
import PropTypes from 'prop-types';
import HWorld from './components/hWorld/HWorld';
import ChallengeOne from './components/challengeOne/ChallengeOne';
import BtnHello from './components/challengeTwo/BtnHello';  
import Hello from './components/challengeThree/Hello';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>This is my header.</div>
        <HWorld/>
        <ChallengeOne/>
        <BtnHello country='Canada'/>
        <BtnHello country='Poland'/>
        <Hello contryName='Canada' population={400}/>
      </header>
    </div>
  );
}

Hello.propTypes = {
  population: PropTypes.number,
  countryName: function(props, propName, componentName){
    if (!(propName in props)) {
      throw new Error('Contry name is not set.');
    }
    let minChar = 5;
    if (props[propName].length < minChar ) {
      throw new Error('Country name must greater than 5 characters.');
    }
  }
  
};
export default App;
