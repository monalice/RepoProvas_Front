import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from './assets/GlobalStyle';

import Home from './pages/Home';
import SendTests from './pages/SendTests';
import SearchTests from './pages/SearchTests';

export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/consultar-provas' exact component={SearchTests} />
        <Route path='/enviar-provas' exact component={SendTests} />
      </Switch>
    </BrowserRouter>
  );
}