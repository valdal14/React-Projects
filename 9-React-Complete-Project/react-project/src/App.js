// imported the useState Hook from React
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


function App(props) {
  // React hook for functional components
  const [ personState, setPersonState ] = useState({
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

  const [ secondState, setSecondState ] = useState({
    otherState: 'This is another state'
  })


  const switchNameHandler = ()=> {
    // loggin the state
    console.log(personState);
    console.log(secondState);

    // get to the Hook state
    if (personState.person[0].name === 'Valerio'){
      // setting the new state
      setPersonState({
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
        ],
        // Additional state
        secondState: personState.secondState
      })
    } else {
      // setting the new state
      setPersonState({
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

  return(
    <div className="App">
        {/* Change the state value using setState method */}
        {/* Never ever add () to the handler otherwise it will be called immediatly */}
        <button onClick={switchNameHandler}>Switch Users</button>

        {/* Using state inside Components */}
       <Person name={personState.person[0].name} age={personState.person[0].age} />
       {/* Using Children props inside Components */}
       <Person name={personState.person[1].name} age={personState.person[1].age} > My Hobby is: Reading</Person>
      </div>
  )
}

export default App;


// class App extends Component {
//   // React state
//   state = {
//     person: [
//       {
//         id: 0,
//         name: 'Valerio',
//         age: 42
//       },
//       {
//         id: 1,
//         name: 'Lefemas',
//         age: 45
//       },
//     ]
//   }

//   switchNameHandler = ()=> {
//     if (this.state.person[0].name === 'Valerio') {
//       this.setState({
//         // updating just person state
//         person: [
//           {
//             id: 0,
//             name: 'Lefemas',
//             age: 45
//           },
//           {
//             id: 1,
//             name: 'Valerio',
//             age: 42
//           },
//         ]
//       })
//     } else {
//       this.setState({
//         person: [
//           {
//             id: 0,
//             name: 'Valerio',
//             age: 42
//           },
//           {
//             id: 1,
//             name: 'Lefemas',
//             age: 45
//           },
//         ]
//       })
//     }
//   }

//   render(){
//     return (
//       <div className="App">
//         {/* Change the state value using setState method */}
//         {/* Never ever add () to the handler otherwise it will be called immediatly */}
//         <button onClick={this.switchNameHandler}>Switch Users</button>

//         {/* Using state inside Components */}
//        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
//        {/* Using Children props inside Components */}
//        <Person name={this.state.person[1].name} age={this.state.person[1].age} > My Hobby is: Reading</Person>
//       </div>
//     );
//   }
// }