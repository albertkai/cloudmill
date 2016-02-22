import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Menu from './common/menu'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false
    };
  }

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="route"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={1000}
          >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
        <Menu></Menu>
      </div>
    )
  }

}
