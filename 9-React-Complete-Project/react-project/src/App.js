import './App.css';
import ContactList from './convert-element-to-component';

function App() {
  return (
    <div className="App">
      <ContactList contacts={[
            {
                id: 0,
                name: 'Valerio',
                role: 'Programmer'
            },
            {
                id: 1,
                name: 'Lefemas',
                role: 'Marketing Manager'
            }
        ]} />

      <ContactList contacts={[
            {
                id: 2,
                name: 'Stallman',
                role: 'Gnu-Linux Guru'
            },
            {
                id: 3,
                name: 'Jobs',
                role: 'Marketing Manager'
            }
        ]} />
    </div>
  );
}

export default App;
