import React, { Component } from 'react';
import './App.css';
import Paths from "./Components/Paths"
 

class App extends Component {
  constructor(){
    super()
  }
  render(){
  return (
    <div className="App">
<Paths/>
    </div>
  );
  
}
}
export default App;
