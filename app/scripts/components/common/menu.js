import React from 'react';
import { Link } from 'react-router'

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  _closeMenu() {
    $('body').find('#menu').removeClass('_opened')
  }

  render() {
    return (
      <div id="menu">
        <button className="close-menu" onClick={this._closeMenu}>
          <span></span>
          <span></span>
        </button>
        <div className="cont">
          <section>
            <aside>
              <h3><Link to="/portfolio">Портфолио</Link></h3>
              <hr/>
              <nav>
                <a href="">Сайт</a>
                <a href="">Брендинг</a>
                <a href="">Визуализация</a>
              </nav>
            </aside>
            <div>
              <h3><Link to="/agency">Агентство</Link></h3>
              <hr/>
              <p>
                Продуманный, трендовый коммерческий дизайн — это то, чему мы уделяем больше всего времени и сил.
              </p>
            </div>
          </section>
          <section>
            <h2>Контакты</h2>
            <p>191015, Россия, Санкт-Петербург, Фуражный переулок д.3 литер К, офис 317</p>
            <p className="huge">8 812 640 8022</p>
            <a href="mailto:info@cloudmill.ru">info@cloudmill.ru</a>
          </section>
        </div>
      </div>
    );
  }
}
