import './App.css';
import './MyStyle.css'
import Week from './Week';
import Choice from './Choice';

import { useState } from 'react';
import { Route } from 'react-router-dom';



function App() {

 
  


  return (
    <div className="App">
     

      <Route path="/" exact>
      <Week />
      </Route>

      <Route path="/choice/:get_day">
      <Choice />
      </Route>
     

   

      
    </div>
  );

 
}

function Line() {
  return (
    <div className="circleBox">
      <div id="day">월</div>
      <div id="circle"></div>
      <div id="circle"></div>
      <div id="circle"></div>
      <div id="circle"></div>
      <div id="circle"></div>
      <div id="sm"></div>
    </div>
  )
}

export default App;
