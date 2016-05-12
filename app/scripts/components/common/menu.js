import React from 'react';
import { Link, browserHistory } from 'react-router'
import RouteLink from './routeLink'

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  _closeMenu() {
    $('body').find('#menu').removeClass('_opened')
  }

  goToFiltered(filter, e) {
    e.preventDefault()
    browserHistory.push('/portfolio')
    this._closeMenu()
    this.props.store.dispatch({
      type: 'SET_FILTER',
      filter: filter
    })
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
              <h3><RouteLink to="/portfolio" store={this.props.store}>Портфолио</RouteLink></h3>
              <hr/>
              <nav>
                <a href="#" onClick={this.goToFiltered.bind(this, 'WEB')}>Сайты</a>
                <a href="#" onClick={this.goToFiltered.bind(this, 'BRANDING')}>Брендинг</a>
                <a href="#" onClick={this.goToFiltered.bind(this, 'SEO')}>Продвижение</a>
                <a href="#" onClick={this.goToFiltered.bind(this, 'VISUAL')}>Визуализация</a>
              </nav>
            </aside>
            <div>
              <h3><RouteLink to="/agency" store={this.props.store}>Агентство</RouteLink></h3>
              <hr/>
              <p style={{fontSize: '12px', lineHeight: 1.9}}>
                Предлагаем полный цикл: продуманный коммерческий дизайн, сильная техническая база, эффективные рекламные кампании, сопровождение и развитие.
              </p>
            </div>
          </section>
          <section>
            <h2>Контакты</h2>
            <p>191015, Россия, Санкт-Петербург, Фуражный переулок д.3 литер К, офис 317</p>
            <p className="huge">8 812 425 67 17</p>
            <a href="mailto:info@cloudmill.ru">info@cloudmill.ru</a>
          </section>
        </div>
      </div>
    );
  }
}
