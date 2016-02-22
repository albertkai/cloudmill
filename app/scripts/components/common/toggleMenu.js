import React from 'react';

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  _openMenu() {
    $('#menu').addClass('_opened')
  }

  render() {

    return (
      <button className="menu-toggle" onClick={this._openMenu}>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    )

  }

}
