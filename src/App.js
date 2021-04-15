import React from 'react';
//import './App.css';
import HomePage from './pages/HomePage.js';

import {Switch,Route} from 'react-router-dom';

const HatsPage = (props)=> {
  console.log(props.match.url)
  return (

    <div>
      <h1>HATS PAGE</h1>
    </div>
    );
}





function App() {
  return (
    <div className="">
    
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop/hats' component={HatsPage}/>
     
      {/* <HomePage/>*/}
    
      
    </div>
  );
}

export default App;
