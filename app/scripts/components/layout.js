import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {RouteHandler} from 'react-router'
import Menu from './common/menu'
import Loader from './common/loader'
import InitialLoader from './common/initialLoader'
import Modal from './common/modal'
import Success from './common/success'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false
    };
  }

  componentWillUpdate() {
    console.log('whooaaa')
    console.log(this.props.store.getState().loading.initiallyLoaded)
  }

  componentDidMount() {
    //if (!this.props.store.getState().loading.initiallyLoaded) {
      //setTimeout(()=>{
      //  this.props.store.dispatch({
      //    type: 'SET_PROGRESS',
      //    progress: 20
      //  })
      //}, 1000)
      //setTimeout(()=>{
      //  this.props.store.dispatch({
      //    type: 'SET_PROGRESS',
      //    progress: 48
      //  })
      //}, 1800)
      //setTimeout(()=>{
      //  this.props.store.dispatch({
      //    type: 'SET_PROGRESS',
      //    progress: 76
      //  })
      //}, 2200)
      //setTimeout(()=>{
      //  this.props.store.dispatch({
      //    type: 'SET_INITIALLY_LOADED'
      //  })
      //}, 2500)
    //}
  }

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="text"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={1000}
          >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
            store: this.props.store
          })}
        </ReactCSSTransitionGroup>
        <Menu store={this.props.store}></Menu>
        <Loader store={this.props.store}></Loader>
        <InitialLoader store={this.props.store}></InitialLoader>
        <Modal></Modal>
        <Success></Success>
      </div>
    )
  }

}
