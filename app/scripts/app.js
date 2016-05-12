import React from 'react';
import Main from './components/main/main';
import Portfolio from './components/portfolio';
import Case from './components/case/case';
import Company from './components/company';
import Layout from './components/layout';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute, RouteHandler} from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './redux/store'

console.log('building the app')

window.React = React;
const mountNode = document.getElementById('app');
const store = configureStore()

var ComponentWrapper = React.createClass({
  render: function(){
    return(
      <Layout store={store} children={this.props.children} location={this.props.location}></Layout>
    )
  }
})

React.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ComponentWrapper}>
        <IndexRoute component={Main} />
        <Route path="portfolio" component={Portfolio}/>
        <Route path="portfolio/:name" component={Case}/>
        <Route path="agency" component={Company}/>
        <Route path="*" component={Main}/>
      </Route>
    </Router>
  </Provider>
), mountNode)
