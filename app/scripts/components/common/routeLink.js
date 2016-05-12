import React from 'react';
import { browserHistory } from 'react-router'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false
    };
    this.store = this.props.store
  }

  routeTo() {

    //if (this.props.to !== document.location.pathname) {
    //  this.store.dispatch({
    //    type: 'START_PRELOAD'
    //  })
    //  setTimeout(()=>{
    //    this.store.dispatch({
    //      type: 'SET_PROGRESS',
    //      progress: 30
    //    })
    //  }, 300)
    //  setTimeout(()=>{
    //    this.store.dispatch({
    //      type: 'SET_PROGRESS',
    //      progress: 50
    //    })
    //  }, 500)
    //  setTimeout(()=>{
    //    this.store.dispatch({
    //      type: 'SET_PROGRESS',
    //      progress: 90
    //    })
    //  }, 1000)
    //  setTimeout(()=>{
    //    this.store.dispatch({
    //      type: 'LOADED'
    //    })
    //    browserHistory.push(this.props.to)
    //  }, 1200)
    //}
    browserHistory.push(this.props.to)
  }

  render() {
    return (
      <a onClick={this.routeTo.bind(this)}>{this.props.children}</a>
    )
  }
}

