import React from 'react';
import './App.css';
import Content from './Content';
import Sidebar from './Sidebar.js';
function App() {
  return (
    <div className="main">
      <Sidebar />
      <Content />
    </div>

  );
}

export default App;
