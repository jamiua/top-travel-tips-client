import './App.scss';
import './partials/_global.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import Details from './pages/Details/Details';
import NewDestination from './pages/NewDestination/NewDestination';
import Profile from './pages/Profile/Profile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component = {HomePage}/>
          <Route path="/destinations" component = {HomePage}/>
          <Route path="destinationDetails/:id" component = {Details}/>
          <Route path="/newDestination" component = {NewDestination}/>
          <Route path="/profile" component = {Profile} />
        </Switch>
    </Router>
  );
}

export default App;
