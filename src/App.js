import React from 'react';
import BagelContainer from './components/BagelContainer'
import Form from './components/Form'
import './App.css';

class App extends React.Component {
  
  state = {
    bagels: ['bagel 1', 'bagel 2']
  }
  
  render(){
  
  return (
    <div>
      <h1>Bagels App!</h1>
      <Form />
      <BagelContainer />
    </div>
  )}
}

export default App;
