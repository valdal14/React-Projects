import './App.css';
import Menu from './components/MenuComponent';

// Importing react-bootstrap
import { Navbar, NavbarBrand } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
      {/* react-bootstrap NavBar */}
      <Navbar bg="primary" expand="lg">
          <div className="container">
            <NavbarBrand href="/" className="logoName">Ristorante Con Fusion</NavbarBrand>
          </div>
      </Navbar>
      {/* Menu Component */}
      <Menu />
    </div>
  );
}

export default App;
