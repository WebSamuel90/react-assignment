import React, { Component } from 'react';
import './App.css';
import JokeContainer from './Components/JokeContainer';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1 className='title'>Joke Generator</h1>
        <JokeContainer className='jokes'/>
      </div>
    );
  }
}

export default App;
