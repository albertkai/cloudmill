import React from 'react';
import ToggleMenu from './../common/toggleMenu';
import works from '../../data/works';
import Slider from './slider';
import Response from 'response.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Link } from 'react-router';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logos: ['DT.svg', 'pirogi.svg', 'PT.svg', 'setl.svg', 'solnishko.svg', 'ttk.svg', 'veneta.svg'],
      currentLogo: 0,
      size: 4,
      step: 14,
      left: 0
    }
  }

  move(dir) {

    let current = this.state.currentLogo;
    let itemsLength = this.state.logos.length
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width
    let step = (()=>{
      if (width > 960) {
        return 10;
      } else {
        return 14;
      }
    })();
    let currentNew = (()=>{
      if (dir === 'right') {
        if (current + 1 + this.state.size > itemsLength) {
          return 0
        } else {
          return current + 1
        }
      } else {
        if (current - 1 < 0) {
          return itemsLength - this.state.size
        } else {
          return current - 1
        }
      }
    })()
    this.setState({
      left: currentNew * step,
      currentLogo: currentNew
    })
  }

  render() {

    const items = this.state.logos.map((logo, index)=>{
      let img = 'url(images/slider_logos/' + logo + ')';
      return (
        <div className="item" key={index} style={{backgroundImage: img}}></div>
      )
    })

    const left = -1 * this.state.left + 'vw'

    return (
      <div className="carousel">

        <hr/>

        <button className="left" onClick={this.move.bind(this, 'left')}><i className="fa fa-angle-left"></i></button>
        <button className="right" onClick={this.move.bind(this, 'right')}><i className="fa fa-angle-right"></i></button>
        <div className="carousel-cont">
          <div className="items" ref="items" style={{left: left}}>{items}</div>
        </div>

      </div>
    )
  }

}

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

    var loadingTimeout = (()=>{
      if (this.props.store.getState().loading.initiallyLoaded) {
        return 0
      } else {
        return 7000;
      }
    })();
    this.calcHeaderSize()
    $('#menu').removeClass('_opened')
    setTimeout(()=>{
      $('.main-wrap').addClass('_rendered')
      $('.animate').addClass('_animated')
    }, loadingTimeout)
  }

  componentDidUpdate() {
    this.calcHeaderSize()
  }

  calcHeaderSize() {
    let $header = $(this.refs.caseName.getDOMNode())
    let length = $header.text().length;
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width
    let koef = (()=>{
      if (width > 960) {
        return 38;
      } else {
        return 60;
      }
    })();
    let fontSize = Math.round(koef * 10 / length) / 10;
    $header.css('font-size', fontSize + 'vw');
    console.log(width);
  }

  openModal() {
    $('#modal').addClass('_opened')
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
    let image = `url(../images/${ this.state.works[this.state.currentSlide].pic })`
    return (
      <div id="index" className="main-wrap">
        <aside>

          <ToggleMenu></ToggleMenu>

          <div className="slider">
            <ReactCSSTransitionGroup
              transitionName="slide"
              component="div"
              className="slider-cont"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={800}
              >
              <div className="slide" key={_.random(0, 1000)} style={{backgroundImage: image }}><div></div></div>
            </ReactCSSTransitionGroup>
          </div>

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
                  <Link to="/"><i className="icons cloudmill"></i></Link> <br/>
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
                <div className="animate animate-scale">
                  <div className="place">
                    <span>4</span><span>место</span>
                  </div>
                  <p>Рейтинг eCommerce разработчиков. Продукты питания</p>
                </div>
                <div className="animate animate-scale">
                  <div className="place">
                    <span>16</span><span>место</span>
                  </div>
                  <p style={{paddingLeft: '.7vw'}}>Рейтинг 1С-Битрикс в Санкт-Петербурге</p>
                </div>
                <div className="animate animate-scale">
                  <div className="place">
                    <span>29</span><span>место</span>
                  </div>
                  <p>Рейтинг по Санкт-Петербургу агентства Tagline</p>
                </div>
                <div className="animate animate-scale">
                  <div style={{paddingTop: '1.3vh'}}>
                    <i className="icon-bitrix" style={{fontSize: '4vh'}}></i> <br/>
                    <p style={{marginTop: '2vh'}}>Золотой сертифицированный партнер 1С-Битрикс</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="animate animate-down">
                  <h5>Мы в социальных сетях</h5>
                  <div className="links">
                    <a href="https://www.facebook.com/cloudmill/"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.vk.com/cloudmill"><i className="fa fa-vk"></i></a>
                    <a href="https://www.twitter.com/cloudmill"><i className="fa fa-twitter"></i></a>
                  </div>
                </div>
                <div className="animate animate-down">
                  <h5>Мы состоим в</h5>
                  <i className="icons specia"></i>
                </div>
              </div>

            </section>

            <aside>

              <div></div>

              <div className="animate animate-right delay-1">
                <h3>8 812 425 67 17</h3>
                <p className="transparent">г. Санкт-Петербург</p>
              </div>

              <div className="animate animate-right delay-2">
                <div className="action">
                  <div className="icon-pdf"></div>
                  <h4><a>PDF-Презентация</a></h4>
                  <p className="transparent">Поможет Вам быстро ознакомиться с портфолио и начать работу с нами</p>
                </div>
              </div>

              <div className="animate animate-right delay-3">
                <div className="action">
                  <div className="icon-file"></div>
                  <h4><a>Заполнить бриф</a></h4>
                  <p className="transparent">Мы сможем предложить лучшее решение, с точной оценкой стоимости и сроков</p>
                </div>
              </div>

              <div style={{height: '20vh'}} className="animate animate-right delay-4">
                <div className="action-bitrix">
                  <div className="icon-bitrix"></div>
                  <p style={{paddingRight: '4vw'}}>Золотой сертифицированный партнер 1С-Битрикс</p>
                </div>
              </div>

              <div className="animate animate-down">
                <h5>Поделиться ссылкой</h5>
                <div className="links">
                  <a href="https://www.facebook.com/cloudmill/" className="social-link"><i className="fa fa-facebook"></i></a>
                  <a href="https://vk.com/cloudmill" className="social-link"><i className="fa fa-vk"></i></a>
                  <a href="https://twitter.com/cloudmill" className="social-link"><i className="fa fa-twitter"></i></a>
                </div>
              </div>

            </aside>

            <Carousel></Carousel>

          </div>

        </section>

        <section className="controls">

          <div className="lines-spacer"></div>

          <div className="switcher">

            <button className="arrow left" onClick={ this.sliderLeft.bind(this) }><i className="fa fa-angle-left"></i></button>
            <span className="count huge">{ this.state.currentSlide + 1 }</span>
            <span className="count">/{ this.state.sliderLength }</span>
            <button className="arrow right" onClick={ this.sliderRight.bind(this) }><i className="fa fa-angle-right"></i></button>
            <ReactCSSTransitionGroup
              transitionAppeat={true}
              style={{position: 'relative', flexGrow: 1, height: '18vh'}}
              transitionName="text"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              >
              <span key={this.state.works[this.state.currentSlide].name} className="text" ref="caseName" onClick={this._goTo.bind(this, this.state.works[this.state.currentSlide].alias)}>{ this.state.works[this.state.currentSlide].name }</span>
            </ReactCSSTransitionGroup>
            <button className="open-case" onClick={this._goTo.bind(this, this.state.works[this.state.currentSlide].alias)}>Смотреть кейс</button>


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
            <p>РАЗРАБОТКА</p>
            <div>
              <div></div>
            </div>
          </div>

        </section>

      </div>
    );
  }

}
