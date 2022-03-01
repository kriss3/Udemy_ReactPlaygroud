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
      <h1>This my ViewLook</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to='/page1'>Page1</Link> |{' '}
        <Link to='/page2'>Page2</Link>
      </nav>
      <ViewLook />
    </div>
    
  );
}

export default App;
