import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// function App() {
//   return (
//     <div className="App">
//       {/* Using props inside Components */}
//      <Person name="Valerio" age="42" />
//      {/* Using Children props inside Components */}
//      <Person name="Lefemas" age="45" > My Hobby is: Reading</Person>
//     </div>
//   );
// }

class App extends Component {
  
  render(){
    return (
      <div className="App">
        {/* Using props inside Components */}
       <Person name="Valerio" age="42" />
       {/* Using Children props inside Components */}
       <Person name="Lefemas" age="45" > My Hobby is: Reading</Person>
      </div>
    );
  }
}

export default App;
