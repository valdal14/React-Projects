import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // React state
  state = {
    person: [
      {
        id: 0,
        name: 'Valerio',
        age: 42
      },
      {
        id: 1,
        name: 'Lefemas',
        age: 45
      },
    ]
  }

  switchNameHandler = ()=> {
    if (this.state.person[0].name === 'Valerio') {
      this.setState({
        // updating just person state
        person: [
          {
            id: 0,
            name: 'Lefemas',
            age: 45
          },
          {
            id: 1,
            name: 'Valerio',
            age: 42
          },
        ]
      })
    } else {
      this.setState({
        person: [
          {
            id: 0,
            name: 'Valerio',
            age: 42
          },
          {
            id: 1,
            name: 'Lefemas',
            age: 45
          },
        ]
      })
    }
  }

  render(){
    return (
      <div className="App">
        {/* Change the state value using setState method */}
        {/* Never ever add () to the handler otherwise it will be called immediatly */}
        <button onClick={this.switchNameHandler}>Switch Users</button>

        {/* Using state inside Components */}
       <Person name={this.state.person[0].name} age={this.state.person[0].age} />
       {/* Using Children props inside Components */}
       <Person name={this.state.person[1].name} age={this.state.person[1].age} > My Hobby is: Reading</Person>
      </div>
    );
  }
}

export default App;
