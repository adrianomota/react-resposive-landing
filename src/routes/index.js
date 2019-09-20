import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Burguer from '../pages/BurguerMenu';

export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/burguer" component={Burguer} />
    </Switch>
  );
}
