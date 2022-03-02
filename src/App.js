import React from 'react';
import PropTypes from 'prop-types';
import HWorld from './components/hWorld/HWorld';
import ChallengeOne from './components/challengeOne/ChallengeOne';
import BtnHello from './components/challengeTwo/BtnHello';  
import Hello from './components/challengeThree/Hello';

import TopLevel from './components/challengeFour/TopLevel';
import AntTbl from './components/antTable/AntTbl';
import Parent from './components/parent/index';
import Clock from './components/clock/Clock';


import MyTComp from './components/myTComp/MyTComp';
import ViewLook from './components/viewLook/ViewLook';
import {Link} from  'react-router-dom';


function App() {
  return (
/*     <div className="App">
      <header className="App-header">

      </header>
    </div> */
    <div>
      <ViewLook />
    </div>
    
  );
}

export default App;
