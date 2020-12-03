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

  // FROM HERE....
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
    // Inline styles with JS
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
            <Person key={p.id} id={p.id} name={ p.name } age={ p.age } changeName={ this.nameChangedHandler.bind(this) } deletePerson={ this.deletePersonHandler.bind(this, index) } style={ personStyle } />
        );
      });

      // Create a JSX with the array of people in the state
      people = (
        <div>
            { listOfPeople }
        </div>
      )
    }
    

    return (
      <div className="App">
        <button style={style} onClick={ this.togglePersonHandler }>Show People</button>

        {/* Calling the method to to return JSX based on the state condition */}
        { people }

      </div>
    );
  }
}

export default App;
