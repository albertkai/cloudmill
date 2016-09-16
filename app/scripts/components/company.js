import React from 'react';
import ToggleMenu from './common/toggleMenu';
import GeminiScrollBar from 'react-gemini-scrollbar';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Carousel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      logos: ['DT.svg', 'pirogi.svg', 'PT.svg', 'setl.svg', 'solnishko.svg', 'ttk.svg', 'veneta.svg'],
      currentLogo: 0,
      size: 4,
      step: 9,
      top: 0
    }
  }

  move(dir) {

    let current = this.state.currentLogo;
    let itemsLength = this.state.logos.length
    let currentNew = (()=>{
      if (dir === 'bottom') {
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
      top: currentNew * this.state.step,
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

    const top = -1 * this.state.top + 'vh'

    return (
      <div className="carousel">

        <button onClick={this.move.bind(this, 'top')}><i className="fa fa-angle-up"></i></button>
        <button onClick={this.move.bind(this, 'bottom')}><i className="fa fa-angle-down"></i></button>
        <div className="carousel-cont">
          <div className="items" ref="items" style={{top: top}}>{items}</div>
        </div>

      </div>
    )
  }

}


class AnimatedText extends React.Component {

  constructor(props) {
    super(props)
    this.texts = [
      '#практичные решения',
      '#современный дизайн',
      '#адекватные цены',
      '#понимаем ответственность',
      '#держим слово',
      '#ценим время',
    ]
    this.iter = 0
    this.state = {
      text: this.texts[0]
    }
  }

  componentDidMount() {
    this.tick()
  }

  componentDidUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.interval = setInterval(()=>{
      let length = this.texts.length
      if (this.iter + 1 >= length) {
        this.iter = 0
      } else {
        this.iter++
      }
      this.setState({text: this.texts[this.iter]})
    }, 5000)
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="route"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        >
        <div className="animated-text" key={this.state.text}>{this.state.text}</div>
      </ReactCSSTransitionGroup>
    )
  }

}

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('title').text('Агентство')
    $('#menu').removeClass('_opened')
    $('.scrollbar-macosx').scrollbar()
    this.unsubscribe = this.props.store.subscribe(()=>{
      this.forceUpdate()
    })
    setTimeout(()=> {
      $('.inner-wrap').addClass('_rendered')
    }, 500)
    console.log('This is store')
    console.log(this.props.store);
  }

  openModal() {
    $('#modal').addClass('_opened')
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let state = this.props.store.getState()
    return (
      <div id="company" className="inner-wrap">

        <aside>

          <section>
            <p className="projects">
              <span>98</span>
              <span>Проектов</span>
            </p>

            <h3>Клиенты</h3>

            {/*<p>За это время нашими клиентами стали, тут нужен копирайтинг</p> */}
          </section>
          <section>
            <Carousel></Carousel>
          </section>

          <ToggleMenu></ToggleMenu>

        </aside>

        <section>

          <AnimatedText/>

          <div className="scrollbar-macosx">

            <div className="content">

              <div className="heading">

                <div>

                  <div>
                    <p>агентство</p>
                  </div>

                  <div>
                    <div className="line hidden-xs hidden-sm"></div>
                    <div className="logo hidden-xs">
                      <Link to="/"><i className="icons cloudmill"></i></Link> <br/>
                      <span>Интерактивное агентство</span>
                    </div>
                  </div>

                </div>

                <div>

                  <div className="pull-right hidden-xs">
                    <h3>8 812 425 67 17</h3>

                    <p className="transparent">г. Санкт-Петербург</p>
                  </div>

                </div>

              </div>

              <div className="intro">
                <div>
                  <hr className="hidden-xs"/>
                </div>
                <div>
                  <h2>копим опыт с 2009 года</h2>
                  <h5>за это время мы собрали внушительное <Link to="/portfolio">портфолио</Link> <i className="fa fa-long-arrow-right"></i></h5>
                </div>
              </div>

              <div className="we-do">

                <div>
                  <hr/>
                  <span>01</span>
                  <span>Разработка  <br/> сайтов</span>
                </div>
                <div>
                  <div>
                    <i className="icons comp"></i>
                  </div>
                  <div>
                    <h3>Разрабатываем</h3>

                    <p>В основном это корпоративные ресурсы и интернет-магазины, иногда корпоративные порталы, битрикс24 и промо-проекты. Выбор технологий всегда обусловлен задачей: как правило, разрабатываем на платформе 1С-Битрикс. Для более сложных задач берем Symfony и react.js на фронте. Являемся "золотым партнером 1С-Битрикс", несколько лет в топе разработчиков по Санкт-Петербургу. Любим продуманный коммерческий дизайн. Уже 80% проектов адаптивные, очень хотим, чтобы были все 100.
                    </p>
                    <p className="dev-icons">
                      <span className="icon-bitrix" style={{color: '#ff0054'}}></span>
                      <span className="icon-html5">
                        <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span>
                      </span>
                      <span className="icon-css3">
                        <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span>
                      </span>
                    </p>
                  </div>
                </div>

              </div>

              <div className="we-do">

                <div>
                  <hr/>
                  <span>02</span>
                  <span>Брендинг, <br/>дизайн</span>
                </div>
                <div>
                  <div>
                    <i className="icons dsgn"></i>
                  </div>
                  <div>
                    <h3>Воплощаем</h3>

                    <p>Придумываем логотипы и элементы фирменного стиля, разрабатываем брендбуки и гайдлайны. Готовим печатную и сувенирную продукцию, различные каталоги и презентации.</p>
                  </div>
                </div>

              </div>

              <div className="we-do">

                <div>
                  <hr/>
                  <span>03</span>
                  <span>Аналитика, <br/>SEO, SMM</span>
                </div>
                <div>
                  <div>
                    <i className="icons search"></i>
                  </div>
                  <div>
                    <h3>Продвигаем и поддерживаем</h3>

                    <p>Двигаем бренды и услуги. У нас весь комплекс интернет-маркетинга: прежде всего аналитика. Ведем медийную, контекстную рекламу в Google Adwords и «Яндекс.Директ», SMM и даже SERM. Понимаем насколько важно не просто «создавать продукты», но и развивать их.</p>
                  </div>
                </div>

              </div>

              <div className="bottom-info">

                <div></div>
                <div>

                  <div className="v-line"></div>

                  <div className="hiring">
                    <div className="icon-brain"></div>
                    <p>Всегда рады пригласить к себе умных и целеустремленных, по всем нашим профильным
                      направлениям.</p>
                    <a href="mailto:info@cloudmill.ru">info@cloudmill.ru</a>
                  </div>

                </div>

              </div>

              <div className="bottom-links">

                <div>
                  <h5>Мы в социальных сетях</h5>
                  <div className="v-line"></div>
                  <div className="links">
                    <a href="https://facebook.com/cloudmill"><i className="fa fa-facebook"></i></a>
                    <a href="https://vk.com/cloudmill"><i className="fa fa-vk"></i></a>
                    <a href="https://twitter.com/cloudmill"><i className="fa fa-twitter"></i></a>
                  </div>
                </div>
                <div>
                  <div>
                    <h5>Мы состоим в </h5>
                    <i className="icons specia"></i>
                  </div>
                </div>
                <div>
                  <h5>Поделиться ссылкой</h5>

                  <div>
                    <a href="https://facebook.com/cloudmill" className="social-link"><i className="fa fa-facebook"></i></a>
                    <a href="https://vk.com/cloudmill" className="social-link"><i className="fa fa-vk"></i></a>
                    <a href="https://twitter.com/cloudmill" className="social-link"><i className="fa fa-twitter"></i></a>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <aside>

            <div>

              <h3>8 812 425 67 17</h3>

              <p className="transparent">г. Санкт-Петербург</p>

              <div className="action">
                <div className="icon-file"></div>
                <h4><a>Заполнить бриф</a></h4>
                <p className="transparent">Мы сможем предложить лучшее решение, с точной оценкой стоимости и сроков</p>

              </div>

              <div className="action">
                <div className="icon-pdf"></div>
                <h4><a>PDF-Презентация</a></h4>
                <p className="transparent">Поможет Вам быстро ознакомиться с портфолио и начать работу с нами</p>

              </div>

            </div>

            <div>
              <h5>Поделиться ссылкой</h5>

              <div>
                <a className="social-link"><i className="fa fa-facebook"></i></a>
                <a className="social-link"><i className="fa fa-vk"></i></a>
                <a className="social-link"><i className="fa fa-twitter"></i></a>
              </div>
            </div>

          </aside>

        </section>

      </div>
    );
  }

}
