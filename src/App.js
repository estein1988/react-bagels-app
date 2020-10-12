import React from 'react';
import BagelContainer from './components/BagelContainer'
import Form from './components/Form'
import './App.css';

class App extends React.Component {

  state = {
    bagels: []
  }
  
  componentDidMount(){
    fetch('https://bagel-api-fis.herokuapp.com/bagels')
      .then(response => response.json())
      .then(data => this.setState({bagels: data}))
  }

  render(){
  
  return (
    <div>
      <h1>Bagels App!</h1>
      <Form />
      <BagelContainer bagels={this.state.bagels}/>
    </div>
  )}
}

export default App;

//took a snapshot of state, sent it down to the container through props