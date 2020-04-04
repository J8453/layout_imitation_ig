import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './css/App.css';

import { Responsive } from 'semantic-ui-react';
import Nav from './components/Nav';
import TopRow from './components/TopRow';
import RightColumn from './components/RightColumn';
import PostCard from './components/PostCard';

function App() {
  return (
    <div className="App">
      <div className="row nav">
        <Nav />  
      </div>
      <div className="row nav__placeholder" style={{height: '60px'}}></div>

      <Responsive as={TopRow} maxWidth={999} />

      <div className="row body">
        <div className="column left">
          <div className="post">
            <PostCard />
            <PostCard />
          </div>
        </div>
        <Responsive as={RightColumn} minWidth={1000} />
      </div>
    </div>
  );
}

export default App;
