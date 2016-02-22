import React from 'react';
import ToggleMenu from './../common/toggleMenu';
import works from '../../data/works';
import Slider from './slider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory } from 'react-router';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      works: works,
      currentSlide: 0,
      sliderLength: works.length
    }
  }

  componentDidMount() {
    $('#menu').removeClass('_opened')
    $('.main-wrap').addClass('_rendered')
  }

  sliderLeft() {
    let currentSlide = this.state.currentSlide
    if (currentSlide > 0) {
      this.setState({currentSlide: currentSlide - 1})
    } else {
      this.setState({currentSlide: this.state.works.length - 1})
    }
    console.log(this.state)
  }

  sliderRight() {
    let currentSlide = this.state.currentSlide
    if (currentSlide + 1 < this.state.sliderLength) {
      this.setState({currentSlide: currentSlide + 1})
    } else {
      this.setState({currentSlide: 0})
    }
    console.log(this.state)
  }

  _goTo(alias, event) {
    browserHistory.push(`/portfolio/${ alias }`)
  }

  render() {
    return (
      <div id="index" className="main-wrap">
        <aside>

          <ToggleMenu></ToggleMenu>

          <Slider slides={this.state.works[this.state.currentSlide].slider}></Slider>

        </aside>

        <section className="info">

          <div className="clouds">
            <div></div>
          </div>
          <div className="ovrl"></div>

          <div className="cont">

            <section>


              <div></div>
              <div>

                <div className="logo">
                  <a href="/"><i className="icons cloudmill"></i></a> <br/>
                  <span>Интерактивное агентство</span>
                </div>

              </div>
              <div>
                <div>
                  <div className="text sizing">
                    <p>a</p>
                    <p>б</p>
                    <p>в</p>
                    <div className="line"></div>
                  </div>
                </div>
                <div>
                  <div className="text">
                    <p>Разрабатываем</p>
                    <p>Продвигаем</p>
                    <p>Поддерживаем</p>
                    <hr/>
                  </div>
                </div>
              </div>
              <div></div>
              <div>
                <div>
                  <div className="place">
                    <span>4</span><span>место</span>
                  </div>
                  <p>Рейтинг eCommerce разработчиков</p>
                </div>
                <div>
                  <div className="place">
                    <span>16</span><span>место</span>
                  </div>
                  <p>Рейтинг Битрикс в Санкт-Петербурге</p>
                </div>
                <div>
                  <div className="place">
                    <span>29</span><span>место</span>
                  </div>
                  <p>Рейтинг агентства Tagline</p>
                </div>
                <div>
                  <div>
                    <i className="icons bitrix-white"></i> <br/>
                    <p>Золотой сертифицированный партнер Битрикс</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h5>Мы в социальных сетях</h5>
                  <div className="links">
                    <a href=""><i className="fa fa-facebook"></i></a>
                    <a href=""><i className="fa fa-vk"></i></a>
                    <a href=""><i className="fa fa-twitter"></i></a>
                  </div>
                </div>
                <div>
                  <h5>Мы в социальных сетях</h5>
                  <i className="fa fa-instagramm"></i>
                </div>
              </div>

            </section>

            <aside>

              <div></div>

              <div>
                <h3>8 812 640 8022</h3>
                <p className="transparent">г. Санкт-Петербург</p>
              </div>

              <div>
                <div>
                  <i className="fa fa-instagram"></i> <br/>
                  <h4>Заполните бриф</h4>
                  <p className="transparent">Если вы уже слышали о нашем агентстве и хотите начать с нами работать</p>
                </div>
              </div>

              <div>
                <div>
                  <i className="fa fa-instagram"></i> <br/>
                  <h4>PDF-Презентация</h4>
                  <p className="transparent">Если вы уже слышали о нашем агентстве и хотите начать с нами работать</p>
                </div>
              </div>

              <div>
                <div>
                  <i className="icons bitrix-white"></i> <br/>
                  <p>Золотой сертифицированный партнер Битрикс</p>
                </div>
              </div>

              <div>
                <h5>Поделиться ссылкой</h5>
                <div className="links">
                  <a href="" className="social-link"><i className="fa fa-facebook"></i></a>
                  <a href="" className="social-link"><i className="fa fa-vk"></i></a>
                  <a href="" className="social-link"><i className="fa fa-twitter"></i></a>
                </div>
              </div>

            </aside>

            <div className="carousel">

              <div className="carousel-cont">

                <button><i className="fa fa-angle-left"></i></button>
                <button><i className="fa fa-angle-right"></i></button>

              </div>

            </div>

          </div>

        </section>

        <section className="controls">

          <div className="lines-spacer"></div>

          <div className="switcher">

            <button className="arrow left" onClick={ this.sliderLeft.bind(this) }><i className="fa fa-angle-left"></i></button>
            <span className="count huge">{ this.state.currentSlide + 1 }</span>
            <span className="count">/{ this.state.sliderLength }</span>
            <button className="arrow right" onClick={ this.sliderRight.bind(this) }><i className="fa fa-angle-right"></i></button>
            <span className="text" onClick={this._goTo.bind(this, this.state.works[this.state.currentSlide].alias)}>{ this.state.works[this.state.currentSlide].name }</span>

          </div>

        </section>

        <section className={ this.state.works[this.state.currentSlide].type + ' lines' }>

          <div>
            <div>
              <div></div>
            </div>
            <p>ВИЗУАЛИЗАЦИЯ</p>
            <div>
              <div></div>
            </div>
          </div>

          <div className="_visible">
            <div>
              <div></div>
            </div>
            <p>БРЕНДИНГ</p>
            <div>
              <div></div>
            </div>
          </div>

          <div>
            <div>
              <div></div>
            </div>
            <p>ИНТЕРНЕТ</p>
            <div>
              <div></div>
            </div>
          </div>

        </section>

        <div className="loader">
          <div></div>
        </div>

      </div>
    );
  }

}
