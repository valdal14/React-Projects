import './App.css';
import Menu from './components/MenuComponent';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* NavBar Component */}
      <NavBar />
      {/* Menu Component */}
      <Menu />
    </div>
  );
}

export default App;
