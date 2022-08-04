import './App.scss';
import './partials/_global.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import Details from './pages/Details/Details';
import NewDestination from './pages/NewDestination/NewDestination';

function App() {
  return (
    <div className="App">
        <NavBar />
        <HomePage />
    </div>
  );
}

export default App;
