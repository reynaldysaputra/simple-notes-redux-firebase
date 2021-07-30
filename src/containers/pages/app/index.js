import './App.css';
import {Route, Switch} from 'react-router-dom';
import Dashboard from '../dashboard';
import Login from '../login';
import Register from '../register';
import PrivateRoute from '../../../components/atoms/privateRoute';
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { getUsers } from '../../../config/redux/login/loginActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  return (
    <>
      <Switch>
          <PrivateRoute path='/' exact component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
      </Switch>
    </>
  );
}

export default App;
