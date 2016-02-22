import React from 'react';
import Main from './components/main/main';
import Portfolio from './components/portfolio';
import Case from './components/case/case';
import Company from './components/company';
import Layout from './components/layout';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute} from 'react-router'

window.React = React;
const mountNode = document.getElementById('app');

React.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="portfolio" component={Portfolio}/>
      <Route path="portfolio/:name" component={Case}/>
      <Route path="agency" component={Company}/>
      <Route path="*" component={Main}/>
    </Route>
  </Router>
), mountNode)
