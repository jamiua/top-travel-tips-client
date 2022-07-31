import './App.scss';
import './partials/_global.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
        <NavBar />
        <HomePage />
        <p>Top Travel Tips</p>
    </div>
  );
}

export default App;
