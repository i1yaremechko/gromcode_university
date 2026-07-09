import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
React.version;

const App = () => {
  return (
    <div className='page'>
      <BrowserRouter>
        <ul class="navigation">
          <li class="navigation__item">
            <Link to='/'>Home</Link>
          </li>
          <li class="navigation__item">
            <Link to='/products'>Products</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/products'><Products /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;