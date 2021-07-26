import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Dashboard from '../dashboard';
import Login from '../login';
import Register from '../register';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
