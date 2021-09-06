import logo from './logo.svg';
import './App.css';
import { axiosWithAuth } from './axiosWithAuth';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateFriendForm from './components/CreateFriendForm';

function App() {
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e, setter, value)  => {
    setter({
            ...value,
            [e.target.name]: e.target.value
        }
    );
  }

  useEffect(() => {
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/'> <Link to='/login'> Login </Link> </Route>
        <Route path='/login' render={props => (<Login {...props} handleChange={handleChange} />)} />
        <PrivateRoute path='/dashboard' component={Dashboard}/>
        <PrivateRoute path='/createAfriend' component={CreateFriendForm}/>
      </Switch>
    </Router>
  )
}

export default App;
