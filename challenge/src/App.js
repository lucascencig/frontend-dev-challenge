import logo from './logo.svg';
import Menu from './components/menu/Menu'
import Landing from './components/Landing/Landing';
import './App.css';

function App() {
  return (
    <div className="App">

      <Menu />

      <div>
        <Landing />
      </div>

    </div>
  );
}

export default App;
