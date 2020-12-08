import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    this.state = {
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
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  nameChangedHandler = (event)=>{
    const modifiedPerson = [];
    for (let i = 0; i < this.state.person.length; i++) {
      if(this.state.person[i].id === parseInt(event.target.id)) {
        modifiedPerson.push({
          id: parseInt(event.target.id),
          name: event.target.value,
          age: 0
        })
      } else {
        
        modifiedPerson[i] = this.state.person[i];
      }
    }
    this.setState({
      person: modifiedPerson
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

  deletePersonHandler = (index)=> {
    // using the spread operator to copy the array
    const persons = [...this.state.person];
    persons.splice(index, 1);
    
    this.setState({
      person: persons
    });
  }

  render(){
    console.log('[App.js] render');
    // Inline styles with JS
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // Using Radium pseudo-selectors
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'white'
      }
    };

    const personStyle = {
      cursor: 'pointer'
    }

    // Using pure JS to render JSX or React.createElement based on conditions
    let people = null;

    if (this.state.showPerson) {
      // Use map to generate JSX code li elements with Person Component inside it and event handler
      const listOfPeople = this.state.person.map((p, index) => {
        return(
          <ErrorBoundary key={p.id}>
            <Person id={p.id} name={ p.name } age={ p.age } changeName={ this.nameChangedHandler.bind(this) } deletePerson={ this.deletePersonHandler.bind(this, index) } style={ personStyle } />
          </ErrorBoundary>
        );
      });

      style.backgroundColor = 'red';
      // re-assign the hover pseudo-selector
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'red'
      }
      // Create a JSX with the array of people in the state
      people = (
        <div>
            { listOfPeople }
        </div>
      )
    }
    
    let cssClasses = ['red', 'bold'].join(' ');

    return (
        <div className="App">
          <h1>Welcome to this React Project</h1>
          <p className={this.state.person.length >= 2 ? {cssClasses} : 'blue'}>List of People</p>
          <button style={style} onClick={ this.togglePersonHandler }>Show People</button>

          {/* Calling the method to to return JSX based on the state condition */}
          { people }
        </div>
    );
  }
}

export default App;
