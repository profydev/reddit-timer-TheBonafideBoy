import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search">
          <div>This is search page.</div>
        </Route>
        <Route path="/">
          <div>This is your home page.</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
