import React from 'react';
import { Link, browserHistory } from 'react-router'
import RouteLink from './routeLink'

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  close() {
    $('#modal').removeClass('_opened')
  }

  removeError(e) {
    $(e.target).closest('.form-group').removeClass('_error')
    $(e.target).siblings('input').focus()
  }

  onSubmit(e) {
    e.preventDefault()
    let $form = $(this.refs.replyForm.getDOMNode())
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $form.find('.form-group').each(function() {
      console.log($(this))
      let $formGroup = $(this)
      let $input = $formGroup.find('input')
      if ($input.attr('type') === 'text') {
        if ($input.val() === '') {
          $formGroup.addClass('_error')
        } else {
          $formGroup.removeClass('_error')
        }
      } else if ($input.attr('type') === 'email') {
        if (!re.test($input.val())) {
          $formGroup.addClass('_error')
        } else {
          $formGroup.removeClass('_error')
        }
      }
    })
    if ($form.find('._error').length === 0) {
      console.log('Submit form')
      const name = $('#userName');
      const email = $('#userEmail');
      const phone = $('#userPhone');
      const text = $('#userText');
      $.post("../contact_me.php", {name, email, phone, text}, (data)=>{
        $('#modal').removeClass('_opened');
        $('#success').addClass('_opened');
        setTimeout(()=>{
          $('#success').removeClass('_opened');
        }, 3000);
      }, (err)=>{
        console.log('error')
        console.log(err)
        $('#modal').removeClass('_opened');
        $('#success').addClass('_opened');
        setTimeout(()=>{
          $('#success').removeClass('_opened');
        }, 3000);
      })
    }
  }

  render() {
    return (
      <div id="modal" className="с-modal">
        <div className="modal-ovrl"></div>
        <div className="cont">
          <div className="heading">
            <h3>Оформить<br/> заявку</h3>
            <button className="close-it" onClick={this.close.bind(this)}>
              <div></div>
              <div></div>
            </button>
          </div>
          <div className="body">
            <form action="" ref="replyForm" onSubmit={this.onSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="userName">Имя:</label>
                <input className="form-control" id="userName" type="text"/>
                <p onClick={this.removeError.bind(this)}>Поле не заполнено</p>
              </div>
              <div className="form-group">
                <label htmlFor="userEmail">Электронная почта:</label>
                <input className="form-control" id="userEmail" type="email"/>
                <p onClick={this.removeError.bind(this)}>Введите верный email</p>
              </div>
              <div className="form-group">
                <label htmlFor="userPhone">Номер телефона:</label>
                <input className="form-control" id="userPhone" type="text"/>
                <p onClick={this.removeError.bind(this)}>Поле не заполнено</p>
              </div>
              <div className="form-group">
                <label htmlFor="userText">Комментарий:</label>
                <textarea className="form-control" rows="5" id="userText" type="text"/>
              </div>
              <div className="form-group attach"></div>
              <div className="form-group submit">
                <button className="lead">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}
