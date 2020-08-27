import React from 'react';
import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return ( 
    <div className="App">
        <Header></Header>
        <Shop></Shop>
    </div>
  );
}

export default App;
