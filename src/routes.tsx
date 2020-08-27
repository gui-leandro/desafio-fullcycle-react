import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import UsersList from './pages/UsersList';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/users" component={UsersList} />
    </BrowserRouter>
  );
}

export default Routes;