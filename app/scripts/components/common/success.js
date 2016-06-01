import React from 'react';

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="success">
        <h3>Ваша заявка отправлена!</h3>
        <p>Наш менеджер свяжется с вами в ближайшее время</p>
      </div>
    )
  }

}
