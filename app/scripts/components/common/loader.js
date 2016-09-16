import React from 'react';
import { Link, browserHistory } from 'react-router'

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(()=>{
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let loaderState = this.props.store.getState().loading
    let loadingClass = loaderState.isLoading ? '_visible' : ''
    return (
      <div>
        <div className={ loadingClass + ' route-overlay'}></div>
        <div className={ loadingClass + ' loader'}>
          <div style={{width: loaderState.progress + '%'}}></div>
        </div>
      </div>
    )
  }

}
