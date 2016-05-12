import React from 'react';

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick() {
    this.props.store.dispatch({
      type: 'SET_FILTER',
      filter: this.props.filter
    })
  }

  render() {
    let isActive = this.props.filter === this.props.store.getState().filter
    return (
      <a className={ isActive ? 'active' : 'go' } onClick={this.onClick.bind(this)}>{this.props.children}</a>
    )
  }

}
