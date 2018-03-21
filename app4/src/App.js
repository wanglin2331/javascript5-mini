import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars=()=>{
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    
    .then(res => {
      console.log(res);
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {this.state.cars.map((car)=>{
        return <div key={car.id}>
          {car.make};
          {car.model}
          </div>})}
      </div>
    );
  }
}

export default App;
