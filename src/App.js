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
                <meta name="google-site-verification" content="EdyOg6R0c5fNtfswlQ4z1JajtKWvgRwEmkJstj_wXEg" />
                <meta name="description" content="Vihar Devalla's Personal Portfolio" />
            </Helmet>
      <Sidebar />
      <Content />
    </div>

  );
}

export default App;
