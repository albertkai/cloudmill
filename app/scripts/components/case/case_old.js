import React from 'react';
import ToggleMenu from '../common/toggleMenu';
import works from '../../data/works';
import { Link, browserHistory } from 'react-router'
import FilterLink from '../common/filterLink'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class extends React.Component {

  constructor(props) {
    super(props);
    console.log(_.findWhere(works, {alias: this.props.params.name}))
    this.state = {
      work: _.findWhere(works, {alias: this.props.params.name})
    }
  }

  componentDidMount() {

    $('#menu').removeClass('_opened')
    this.unsubscribe = this.props.store.subscribe(()=>{
      this.forceUpdate()
    })
    setTimeout(()=>{
      $('.inner-wrap').addClass('_rendered')
    }, 500)
    $('.animate').addClass('_animate-from')
    $('.scrollbar-macosx').scrollbar()
    $('.animate').waypoint(function(dir){
      if (dir === 'down') {
        console.log($(this.element))
        $(this.element).removeClass('_animate-from')
      }
    }, {
      context: '#case .scroll-content',
      offset: $(window).height() / 1.5
    });
    $('.animate').waypoint(function(dir){
      if (dir === 'up') {
        $(this.element).addClass('_animate-from')
      }
    }, {
      context: '#case .scroll-content',
      offset: $(window).height() / 2
    });

  }

  componentWillUpdate() {
    let work = this.state.work
    let filteredWorks = this.props.store.getState().filteredWorks
    let contains = _.contains(filteredWorks, work)
    let location = document.location.pathname
    console.log(location)
    if (!contains && location !== '/portfolio') {
      browserHistory.push('/portfolio/' + filteredWorks[0].alias)
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  _back() {
    browserHistory.push('/portfolio')
    $('.inner-wrap').removeClass('_rendered')
  }

  slide(dir) {
    let work = this.state.work
    let filteredWorks = this.props.store.getState().filteredWorks
    let index = _.indexOf(filteredWorks, work)
    let length = filteredWorks.length
    let alias = ''

    console.log(index)
    console.log(length)
    console.log(work)

    if (dir === 'right'){
      if (index + 2 <= length) {
        alias = filteredWorks[index + 1].alias
      } else {
        alias = filteredWorks[0].alias
      }
    } else if (dir === 'left') {
      if (index - 1 >= 0) {
        alias = filteredWorks[index - 1].alias
      } else {
        alias = filteredWorks[length -1].alias
      }

    }

    browserHistory.push('/portfolio/' + alias)

  }

  render() {

    let work = this.state.work
    let filteredWorks = this.props.store.getState().filteredWorks
    let index = (function(){
      let index = _.indexOf(filteredWorks, work) + 1
      if (index === 0) {
        return 1
      } else {
        return index
      }
    })()
    let length = filteredWorks.length

    return (
      <div id="case" className="inner-wrap">

        <aside>

          <ToggleMenu></ToggleMenu>

          <nav>
            <FilterLink store={this.props.store} filter="ALL">Все проекты</FilterLink>
            <FilterLink store={this.props.store} filter="BRANDING">Брендинг</FilterLink>
            <FilterLink store={this.props.store} filter="WEB">Сайты</FilterLink>
            <FilterLink store={this.props.store} filter="VISUAL">Визуализация</FilterLink>
          </nav>

          <div className="switcher">
            <button className="arrow left" onClick={this.slide.bind(this, 'left')}><i className="fa fa-angle-left"></i></button>
            <span className="count huge">{index}</span>
            <span className="count">/{length}</span>
            <button className="arrow right" onClick={this.slide.bind(this, 'right')}><i className="fa fa-angle-right"></i></button>
          </div>

          <div className="price padding">
            <h4>Стоимость проекта</h4>
            <h2>{ work.price } <i className="fa fa-rouble"></i></h2>
          </div>

          <div className="padding">
            <button className="lead">
              Заказать проект
            </button>
          </div>

        </aside>

        <section className="scrollbar-macosx case-wrap">

          <div className="heading">

            <div>

              <div className="logo">
                <a href="/"><i className="icons cloudmill"></i></a> <br/>
                <span>Интерактивное агентство</span>
              </div>

              <button onClick={this._back}>
                <div><i className="fa fa-angle-left"></i></div>
                <p>
                  <span>к списку</span>
                  <span>проектов</span>
                </p>
              </button>

            </div>
            <div>

              <div className="line"></div>

              <div className="logo">
                <a href="/"><i className="icons cloudmill"></i></a> <br/>
                <span>Интерактивное агентство</span>
              </div>

              <div className="contacts">
                <h3>8 812 640 8022</h3>
                <p className="transparent">г. Санкт-Петербург</p>
              </div>

            </div>

          </div>

          <div className="case-cont">

            <div className="brand-bg"></div>

            <img className="logo" src="images/casename/logo.png" alt=""/>

            <p className="desc">{ work.shortDesc }</p>

            <h2>{ work.name }</h2>

            <p className="main-desc animate"> { work.desc } </p>

            <img id="laptop" className="animate" src={ 'images/' + work.laptop } width="80%" alt=""/>

            <div className="animate line long"></div>

            <div className="animate screens">

              <img src={ 'images/' + work.screens } width="80%" alt=""/>

            </div>

            <div className="animate line long"></div>

            <p className="desc animate">{ work.sliderDesc }</p>

            <div className="animate slider">

              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <div className="switcher">
                <button className="arrow left"><i className="fa fa-angle-left"></i></button>
                <span className="count huge">3</span>
                <span className="count">/5</span>
                <button className="arrow right"><i className="fa fa-angle-right"></i></button>
              </div>

            </div>

            <div className="animate line"></div>

            <p className="desc animate">{ work.macDesc }</p>

            <div className="animate mac">

              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <div className="pins">
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>

            </div>

            <div className="animate line"></div>

            <p className="animate total">{ work.total }</p>

            <img className="animate screens-skew" src={ 'images/' + work.screens_skew } width="100%" alt=""/>

            <div className="animate line"></div>

            <h3 className="animate">Для этой компании мы сделали:</h3>

            <div className="we-made">

              <div className="animate">
                <h5>Интерактивный прототип</h5>
                <p>В предпроектную подготовку входило разработка интерактивного протитопа, для обеспечения продуманноей структуры сайта</p>
                <span>01</span>
              </div>

              <div className="animate">
                <h5>Разработали сайт</h5>
                <div className="platform">
                  <div><span className="icon-bitrix"></span></div>
                  <p>Сайт разработан на платформе Битрикс</p>
                </div>
                <button className="outline">Посетить сайт</button>
                <span>02</span>
              </div>

              <div className="animate">
                <h5>Провели фотосессию</h5>
                <p>В процессе разработки появилась необходимость в качественных фото материалах</p>
                <span>03</span>
              </div>

              <div className="animate">
                <h5>Запустили рекламную кампанию</h5>
                <p>Мы написали тексты и провели комплекс мер по продвижению сайта</p>
                <span>04</span>
              </div>

            </div>

            <div className="animate price">

              <h5>Стоимость выполненных работ</h5>
              <h3>{ work.price } <i className="fa fa-rouble"></i></h3>

            </div>

            <button className="animate lead">Заказать похожий проект</button>

            <div className="animate line"></div>

            <div className="more">

              <div className="cont">

                <div className="animate">
                  <span>01</span>
                  <div>
                    <div>
                      <h4>ATON MILL</h4>
                      <span>Сайт</span>
                    </div>
                  </div>
                </div>

                <div className="animate">
                  <span>02</span>
                  <div>
                    <div>
                      <h4>ATON MILL</h4>
                      <span>Сайт</span>
                    </div>
                  </div>
                </div>

                <div className="animate">
                  <span>03</span>
                  <div>
                    <div>
                      <h4>ATON MILL</h4>
                      <span>Сайт</span>
                    </div>
                  </div>
                </div>

                <div className="animate">
                  <span>04</span>
                  <div>
                    <div>
                      <h4>ATON MILL</h4>
                      <span>Сайт</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="bottom-info">

              <div></div>
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
                  <h5>Мы состоим в</h5>
                </div>
                <div>
                  <h5>Поделиться ссылкой</h5>
                  <div className="links">
                    <a href="" className="social-link"><i className="fa fa-facebook"></i></a>
                    <a href="" className="social-link"><i className="fa fa-vk"></i></a>
                    <a href="" className="social-link"><i className="fa fa-twitter"></i></a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>

      </div>
    );
  }

}
