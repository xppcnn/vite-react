import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../App';

function loadRoutes() {
  const context = import.meta.globEager('../pages/*/index.tsx');
  const routes: any[] = [<Route exact path="/" component={App} key="router-App"></Route>];
  const pages = Object.keys(context);
  for (let key of pages) {
    const page = context[key].default;
    const name = key.replace(/(\.\.\/pages\/|\/index.tsx)/g, '');
    routes.push(<Route exact path={'/' + name} component={page} key={'router-' + name}></Route>);
  }
  return routes;
}

export default function AppRouter() {
  return (
    <Router>
      <Switch>{loadRoutes()}</Switch>
    </Router>
  );
}
