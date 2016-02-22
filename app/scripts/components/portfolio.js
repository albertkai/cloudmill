import React from 'react';
import ToggleMenu from './common/toggleMenu';
import works from '../data/works';
import { browserHistory } from 'react-router'


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
  }

  componentDidMount() {

    $('#menu').removeClass('_opened')

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
    let length = this.state.works.length
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

    const Items = this.state.works.map((work, index)=>{
      let image = `url(${work.slider[0]})`;
      return (
        <div className="item" onClick={this._clickItem.bind(this, work.alias)} style={{backgroundImage: image}}>
          <span>{this._formatNumber(index + 1)}</span>
          <div style={{transitionDelay: index * 0.1 + 's'}}>
            <div>
              <h4>{work.name}</h4>
              <span>{work.type}</span>
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
              <span>59</span>
              <span>Проектов</span>
            </p>
          </div>

          <nav>
            <a href="">Все проекты</a>
            <a href="">Брендинг</a>
            <a href="">Сайты</a>
            <a href="">Визуализация</a>
          </nav>

        </aside>

        <section>

          <section>
            <div>
              <h2>Портфолио</h2>
            </div>
            <div>
              <div className="logo">
                <a href="/"><i className="icons cloudmill"></i></a> <br/>
                <span>Интерактивное агентство</span>
              </div>
              <h2>Портфолио</h2>
              <span className="v-line"></span>
            </div>
            <div>
              <div>
                <h3>8 812 640 8022</h3>
                <p className="transparent">г. Санкт-Петербург</p>
              </div>
            </div>
          </section>

          <section>

            <div>

              <div className="cont" onWheel={this._scroll.bind(this)} style={{left: this.state.cssLeft}}>
                {Items}
              </div>

            </div>

            <div>

              <div className="action">
                <div className="icon-file"></div>
                <h4>Заполните бриф</h4>
                <p className="transparent">Если вы уже слышали о нашем агентстве и хотите начать с нами работать</p>
              </div>

              <div className="action">
                <div className="icon-file"></div>
                <h4>PDF-Презентация</h4>
                <p className="transparent">Если вы уже слышали о нашем агентстве и хотите начать с нами работать</p>
              </div>

            </div>

          </section>

          <section>
            <div>

              <div>
                <span className="icon-mouse"></span>
              </div>
              <div>
                <p>Используйте колесико мыши, чтобы прокручивать проекты</p>
              </div>

            </div>
            <div>

              <div className="links">
                <h5>Поделиться ссылкой</h5>
                <div>
                  <a><i className="fa fa-facebook"></i></a>
                  <a><i className="fa fa-vk"></i></a>
                  <a><i className="fa fa-twitter"></i></a>
                </div>
              </div>

              <div>
                <h5>Мы состоим в </h5>
              </div>

              <div>
                <h5>Поделиться ссылкой</h5>
                <div>
                  <a className="social-link"><i className="fa fa-facebook"></i></a>
                  <a className="social-link"><i className="fa fa-vk"></i></a>
                  <a className="social-link"><i className="fa fa-twitter"></i></a>
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
