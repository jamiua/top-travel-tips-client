import './partials/_global.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Details from './pages/Details/Details';
import NewDestination from './pages/NewDestination/NewDestination';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  // Get user information from context
  const {user} = useContext(Context);
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
            {user ? <HomePage/> : <Register/>}
          </Route>
          <Route path="/login">
            {user ? <HomePage/> : <Login/>}
          </Route>
          <Route path="/destination/:id" component = {Details}/>
          <Route path="/newTopTravelTip">
            {user ? <NewDestination/> : <Login/>}
          </Route>
          <Route path="/profile">
            {user ? <Profile/> : <Login/>}
          </Route>
        </Switch>
    </Router>
  );
}

export default App;