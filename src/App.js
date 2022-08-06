import './partials/_global.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Details from './pages/Details/Details';
import NewDestination from './pages/NewDestination/NewDestination';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/destinations">
            <HomePage/>
          </Route>
          <Route path="/register">
            {currentUser ? <HomePage/> : <Register/>}
          </Route>
          <Route path="/login">
            {currentUser ? <HomePage/> : <Login/>}
          </Route>
          <Route path="/destination/:id" component = {Details}/>
          <Route path="/newDestination">
            {currentUser ? <NewDestination/> : <Login/>}
          </Route>
          <Route path="/profile">
            {currentUser ? <Profile/> : <Login/>}
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

// <Route path="/" exact component = {HomePage}/>
// <Route path="/destinations" component = {HomePage}/>
// <Route path="/register" component = {user ? {HomePage} : {Register}}/>
// <Route path="/login" component = {user ? {HomePage} : {Login}}/>
// <Route path="/destination/:id" component = {Details}/>
// <Route path="/newDestination" component = {user ? {NewDestination} : {Login}}/>
// <Route path="/profile" component = {user ? {Profile} : {Login}} />