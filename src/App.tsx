import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/header/Header';

const App = () => {
  return (
    <Router>
      <HashRouter basename="/">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </Router>
  );
};
export default App;
