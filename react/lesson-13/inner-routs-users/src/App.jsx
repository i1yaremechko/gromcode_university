import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
React.version;

const App = () => {
  return (
    <div className='page'>
      <Router>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to='/'>Home</Link>
          </li>
          <li className="navigation__item">
            <Link to='/users'>Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/users' component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;