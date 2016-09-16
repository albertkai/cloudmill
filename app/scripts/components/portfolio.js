import React from 'react'
import ToggleMenu from './common/toggleMenu'
import works from '../data/works'
import { browserHistory, Link } from 'react-router'
import FilterLink from './common/filterLink'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'response.js/response.min.js'
import IScroll from 'iscroll'


function getText(text) {
  if (text === 'web') {
    return 'Разработка сайта'
  } else if (text === 'visual') {
    return 'Визуализация'
  } else if (text === 'branding') {
    return 'Брендинг'
  } else if (text === 'seo') {
    return 'Продвижение'
  }
}

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      works: works,
      isScrolling: false,
      index: 0,
      max: 4,
      cssLeft: 0
    }
    this.store = this.props.store
  }

  componentDidMount() {

    $('title').text('Портфолио')
    $('#menu').removeClass('_opened')
    this.unsubscribe = this.props.store.subscribe(()=>{
      this.forceUpdate()
    })
    setTimeout(()=>{
      $('.inner-wrap').addClass('_rendered')
    }, 500)

    Mousetrap.bind('left', ()=>{
      console.log('arrow lft')
      this._sliderLeft()
    })

    Mousetrap.bind('right', ()=>{
      console.log('arrow right')
      this._sliderRight()
    })

    //const myScroll = new IScroll('#portfolio', {
    //  mouseWheel: true,
    //  scrollbars: true
    //});

    console.log(Response);

  }

  openModal() {
    $('#modal').addClass('_opened')
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentWillUpdate() {
    this.state.index = 0
    this.state.cssLeft = 0
  }

  _sliderLeft() {

    let curIndex = this.state.index
    let step = 16.7
    let newIndex = curIndex - 1
    if (newIndex >= 0) {
      let left = newIndex * step * -1 + 'vw'
      this.setState({cssLeft: left})
      this.setState({index: newIndex})
    } else {
      console.log('Too little')
    }

  }

  _sliderRight() {

    let curIndex = this.state.index
    let length = this.props.store.getState().filteredWorks.length
    let step = 16.7
    let newIndex = curIndex + 1
    if (newIndex + this.state.max <= length) {
      let left = newIndex * step * -1 + 'vw'
      this.setState({cssLeft: left})
      this.setState({index: newIndex})
    } else {
      console.log('too much')
    }

  }

  _scroll(event) {

    if (Response.deviceW() > 500) {
      let delta = event.deltaY + ''
      console.log(event.deltaMode)
      let direction = (function(){
        if (delta !== '0') {
          return delta.search('-') >= 0 ? 'down' : 'up'
        }
      })()
      let transitionTime = 500

      let _move = (dir)=>{
        if (dir === 'up') {
          this._sliderLeft()
        } else if (dir === 'down') {
          this._sliderRight()
        }
      }

      if (!this.state.isScrolling) {

        this.setState({isScrolling: true})

        setTimeout(()=>{
          this.setState({isScrolling: false})
        }, transitionTime)

        _move(direction)

      }
    }

  }

  _formatNumber(number) {

    number = number + '';
    if (number.length === 1) {
      return '0' + number
    } else {
      return number
    }

  }

  _clickItem(alias) {

    $('.inner-wrap').removeClass('_rendered')
    browserHistory.push(`/portfolio/${ alias }`)

  }

  render() {

    console.log('rerednering')
    let works = this.props.store.getState().filteredWorks

    const Items = works.map((work, index)=>{
      let image = `url(images/${work.pic})`;
      return (
        <div className="item" key={work.alias} onClick={this._clickItem.bind(this, work.alias)}>
          <span>{this._formatNumber(index + 1)}</span>
          <div style={{
            transitionDelay: index * 0.1 + 's',
            backgroundImage: image
            }}>
            <div>
              <h4>{work.name}</h4>
              <span>{getText(work.type)}</span>
              <div></div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div id="portfolio" className="inner-wrap">

        <aside>

          <ToggleMenu></ToggleMenu>

          <div className="padding">
            <p className="projects">
              <span>98</span>
              <span>Проектов</span>
            </p>
          </div>

          <nav>
            <FilterLink store={this.store} filter="ALL">Все проекты</FilterLink>
            <FilterLink store={this.store} filter="WEB">Сайты</FilterLink>
            <FilterLink store={this.store} filter="BRANDING">Брендинг</FilterLink>
            <FilterLink store={this.store} filter="SEO">Продвижение</FilterLink>
            <FilterLink store={this.store} filter="VISUAL">Визуализация</FilterLink>
          </nav>

        </aside>

        <section>

          <section className="hidden-xs">
            <div>
              <h2>Портфолио</h2>
            </div>
            <div>
              <div className="logo">
                <Link to="/"><i className="icons cloudmill"></i></Link> <br/>
                <span>Интерактивное агентство</span>
              </div>
              <h2>Портфолио</h2>
              <span className="v-line"></span>
            </div>
            <div>
              <div>
                <h3>8 812 425 67 17</h3>
                <p className="transparent">г. Санкт-Петербург</p>
              </div>
            </div>
          </section>

          <section>

            <div>

              <div className="cont" onWheel={this._scroll.bind(this)} style={{left: this.state.cssLeft}}>
                <ReactCSSTransitionGroup
                  component='div'
                  transitionName="item"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                  >
                  {Items}
                  <div className="bottom-links hidden-sm hidden-md hidden-lg">
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
                </ReactCSSTransitionGroup>
              </div>

            </div>

            <div>

              <div className="action">
                <div className="icon-file"></div>
                <h4><a>Заполните бриф</a></h4>
                <p className="transparent">Мы сможем предложить лучшее решение, с точной оценкой стоимости и сроков</p>
              </div>

              <div className="action">
                <div className="icon-pdf"></div>
                <h4><a>PDF-Презентация</a></h4>
                <p className="transparent">Поможет Вам быстро ознакомиться с портфолио и начать работу с нами</p>
              </div>

            </div>

          </section>

          <section>
            <div>

              <div>
                <span className="icon-mouse pull-right"></span>
              </div>
              <div>
                <p className="use-mouse">Используйте колесико мыши, чтобы прокручивать проекты</p>
              </div>

            </div>
            <div>

              <div className="links">
                <h5>Поделиться ссылкой</h5>
                <div>
                  <a href="https://facebook.com/cloudmill"><i className="fa fa-facebook"></i></a>
                  <a href="https://vk.com/cloudmill"><i className="fa fa-vk"></i></a>
                  <a href="https://twitter.com/cloudmill"><i className="fa fa-twitter"></i></a>
                </div>
              </div>

              <div>
                <h5>Мы состоим в </h5>
                <i className="icons specia"></i>
              </div>

              <div>
                <h5>Поделиться ссылкой</h5>
                <div>
                  <a className="social-link" href="https://facebook.com/cloudmill"><i className="fa fa-facebook"></i></a>
                  <a className="social-link" href="https://vk.com/cloudmill"><i className="fa fa-vk"></i></a>
                  <a className="social-link" href="https://twitter.com/cloudmill"><i className="fa fa-twitter"></i></a>
                </div>
              </div>

              <span className="v-line bottom"></span>

            </div>
          </section>

        </section>

      </div>
    );
  }

}
