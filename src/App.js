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
      .then(data => this.setState( {bagels: data} ))
  }

  submitBagel = (bagel) => {
    fetch('http://bagel-api-fis.herokuapp.com/bagels', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({type: bagel})
    })
    .then(response => response.json())
    .then(bagel => this.setState({bagels: [...this.state.bagels, bagel]}))
  }

  //const newBagels is setting state to all the values of bagels EXCEPT newly deleted one
  //filtering through all bagels in state, if it's NOT the bagel we clicked on, putting it into an array and setting state as that new array
  deleteBagel = (bagel) =>{
    const newBagels = this.state.bagels.filter(newBagel => newBagel !== bagel)
    this.setState({bagels: newBagels})
    fetch(`http://bagel-api-fis.herokuapp.com/bagels/${bagel.id}`, {method: 'DELETE'})
  }

  render(){
  
  return (
    <div>
      {/* !!!!!!!! DO NOT INVOKE HANDLERS HERE!!!!!!! */}
      <h1>Bagels App!</h1>
      <Form submitBagel={this.submitBagel}/>
      <BagelContainer bagels={this.state.bagels} deleteBagel={this.deleteBagel}/>
    </div>
  )}
}

export default App;

//took a snapshot of state, sent it down to the container through props
//passed the submitBagel function down as a prop to the Form component
//^^^ dont need this.state.submitBagel because it's a class method, not a state method