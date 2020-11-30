// imported the useState Hook from React
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
      {
        id: 2,
        name: 'missilotta',
        age: 0
      },
    ],
    // new state variable
    showPerson: false
  }

  switchNameHandler = (newName)=> {
    if (this.state.person[0].name === newName) {
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

  nameChangedHandler = (event)=>{
    console.log(event.target.value);
    this.setState({
      // updating just person state
      person: [
        {
          id: 0,
          // we then access the event.target.value of the input
          name: event.target.value,
          age: 45
        },
        {
          id: 1,
          name: 'Valerio',
          age: 42
        },
      ]
    })
  }

  togglePersonHandler = () => {
    if (this.state.showPerson) {
      this.setState({
        showPerson: false
      })
    } else {
      this.setState({
        showPerson: true
      })
    }
  }

  render(){
    // Inline styles with JS
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // Using pure JS to render JSX or React.createElement based on conditions
    const person = ()=>{
      if (this.state.showPerson) {
        return(
          <div>
          <Person 
            name={this.state.person[0].name} 
            age={this.state.person[0].age} 
            click={(event)=> { this.switchNameHandler('Valerio') }} 
            />

          {/* Using Children props inside Components */}
          <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age} 
            changeName={this.nameChangedHandler.bind(this)}
            > My Hobby is: Reading</Person>

            <Person
              name={this.state.person[2].name}
              age={this.state.person[2].age} />
          </div>
        )
      }
    }

    return (
      <div className="App">
        <button style={style} onClick={ this.togglePersonHandler }>Show People</button>

        {/* Calling the method to to return JSX based on the state condition */}
        { person() }

      </div>
    );
  }
}

export default App;
