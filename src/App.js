import React from 'react';
import './style.css';
import Content from './Content';
import Sidebar from './Sidebar.js';
import {Helmet} from "react-helmet";


function App() {

  return (
    <div className="main clearfix">
      <Helmet>
                <title>Vihar's Personal Portfolio</title>
            </Helmet>
      <Sidebar />
      <Content />
    </div>

  );
}

export default App;
