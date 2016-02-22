import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        {this.props.map}
      </div>
    )
  }

}
