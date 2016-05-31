import React from 'react';
import ToggleMenu from '../common/toggleMenu';
import works from '../../data/works';
import { Link, browserHistory } from 'react-router'
import FilterLink from '../common/filterLink'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NProgress from 'nprogress'
import ScrollMagic from 'scrollmagic'
import {TweenMax} from 'gsap-react-plugin'
import spinner from '../common/spinner'

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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

// Possible elements list

let Laptop = (img, line)=>{
  return (
    <div>
      <img src={'images/' + img} id="laptop" width="80%" alt="Laptop pic"/>
      {line ? (<div className="animate line long"></div>) : null}
    </div>
  )
}

const topPic = (img, marginBottom, desc)=>{
  return (
    <div style={{marginBottom}}>
      <img src={'images/' + img} className="animate" width="100%"/>
      <div className="line animate"></div>
      <p className="desc animate">{desc}</p>
    </div>
  )
}

const imageTop = (img, desc)=>{
  return (
    <div>
      <img src={'images/' + img} className="animate" width="100%"/>
      <div className="line"></div>
      <p className="desc animate">{desc}</p>
    </div>
  )
}

const Screens = (img, desc, width, marginTop)=>{
  return (
    <div>
      <img src={'images/' + img} className="animate" width={width} style={{marginTop: marginTop}} alt="Screens caption"/>
    </div>
  )
}

const simpleText = (header, text)=>{
  return (<div className="simple-text">
    <h3 style={{fontSize: '4vw'}}>{header}</h3>
    <p className="desc">{text}</p>
  </div>)
}

const weMade = (work)=>{
  return(
    <div>
      <h3 className="animate">Для этой компании мы сделали:</h3>

      <div className="we-made">
    <div className="animate">
      <h5>Интерактивный прототип</h5>
      <p>В предпроектную подготовку входило разработка интерактивного прототипа, для обеспечения продуманной структуры сайта</p>
      <span>01</span>
    </div>

    <div className="animate">
      <h5>Разработали сайт</h5>
      <div className="platform">
        <div><span className="icon-bitrix"></span></div>
        <p>Сайт разработан на платформе 1С-Битрикс</p>
      </div>
      <button className="outline">Посетить сайт</button>
      <span>02</span>
    </div>

    <div className="animate">
      {work.alias === 'setl' ? (<h5>Поддержка проекта</h5>) : (<h5>Провели фотосессию</h5>)}
      {work.alias === 'setl' ? (<p>Занимаемся развитием и техническим обслуживанием проекта.</p>) : (<p>В процессе разработки появилась необходимость в качественных фото материалах</p>)}
      <span>03</span>
    </div>

    {work.alias === 'setl' ? null : (<div className="animate"><h5>Запустили рекламную кампанию</h5><p>Мы написали тексты и провели комплекс мер по продвижению сайта</p><span>04</span></div>)}

    </div>
    </div>
  )
}

const ImageWithDesc = (img, desc)=>{
  return (
    <div>
      {desc ? (<p className="desc">{ desc }</p>) : null}
      <img src={'images/' + img} width="100%" alt=""/>
      <div className="animate line"></div>
    </div>
  )
}

const ImageWithDesc2 = (img, desc)=>{
  return (
    <div>
      {desc ? (<p className="desc">{ desc }</p>) : null}
      <img src={'images/' + img} width="100%" alt=""/>
      <div className="animate line"></div>
    </div>
  )
}

const ImageWithDesc3 = (img, desc)=>{
  return (
    <div>
      {desc ? (<p className="desc">{ desc }</p>) : null}
      <img src={'images/' + img} width="100%" alt=""/>
      <div className="animate line"></div>
    </div>
  )
}

const Elements = (img, desc, marginBottom)=>{
  return (
    <div>
      {desc ? (<p className="desc">{ desc }</p>) : null}
      <img src={'images/' + img} width="100%" style={{marginBottom: marginBottom}} alt=""/>
      <div className="animate line"></div>
    </div>
  )
}

const ScreensSkew = (img, count, marginTop)=>{
  return (<div>
    <p className="total">
      <span>Итого</span>
      <span>{count}</span>
      <span>макетов дизайна</span>
    </p>
    <img src={ 'images/' + img } width="100%" style={{marginTop: marginTop}} alt="Alt"/>
    <div className="animate line"></div>
  </div>)
}

const SpecialBg = (img, shift, top)=>{
  return (
    <img className="special-bg" src={img} style={{marginBottom: shift, marginTop: top}} width="100%" alt=""/>
  )
}

class Slider3d extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    }
    this.length = this.props.pics.length
  }

  slide(dir) {
    console.log('Setting new slide')
    let newSlide = (()=>{
      let currentSlide = this.state.currentSlide
      let length = this.length
      if (dir === 'left'){
        if (currentSlide - 1 >= 0) {
          return currentSlide - 1
        } else {
          return length - 1
        }
      } else if (dir === 'right') {
        if (currentSlide + 1 < length) {
          return currentSlide + 1
        } else {
          return 0
        }
      }
    })()
    this.setState({currentSlide: newSlide})
  }

  componentDidMount() {
    this._setClasses()
  }

  componentDidUpdate() {
    this._setClasses()
  }

  _setClasses() {

    console.log('setting classes')
    for (let i = 0; i < this.length; i++) {
      $(this.refs['slide' + i].getDOMNode()).removeClass('second').removeClass('active')
      if (i < this.state.currentSlide) {
        $(this.refs['slide' + i].getDOMNode()).removeClass('next').addClass('prev')
        console.log()
      } else if (i > this.state.currentSlide) {
        $(this.refs['slide' + i].getDOMNode()).removeClass('prev').addClass('next')
      }
    }
    if (this.state.currentSlide > 0) {
      $(this.refs['slide' + (this.state.currentSlide - 1)].getDOMNode()).addClass('second')
    }
    if (this.state.currentSlide + 1 < this.length) {
      $(this.refs['slide' + (this.state.currentSlide + 1)].getDOMNode()).addClass('second')
    }
    $(this.refs['slide' + this.state.currentSlide].getDOMNode()).addClass('active')


  }

  render() {

    const pics = this.props.pics.map((pic, index)=>{
      let image = `url(images/${pic})`
      return (
        <li ref={'slide' + index} key={index}>
          <div className="index">{'0' + (index + 1)}</div>
          <div className="pic" style={{backgroundImage: image}}></div>
          <div className="ovrl"></div>
        </li>
      )
    })

    return (
      <div className={'slider-3d ' + this.props.type}>
          <div className="slider-cont">

            <ul className="slides">{pics}</ul>
            <div className="switcher">
              <button className="arrow left" onClick={this.slide.bind(this, 'left')}><i className="fa fa-angle-left"></i></button>
              <span className="count huge">{this.state.currentSlide + 1}</span>
              <span className="count">/{this.length}</span>
              <button className="arrow right" onClick={this.slide.bind(this, 'right')}><i className="fa fa-angle-right"></i></button>
            </div>

          </div>
          {this.props.desc ? (<p className="desc animate">{ this.props.desc }</p>) : null}
      </div>
    )
  }

}




class SliderFullWidth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      items: props.items,
      desc: props.desc,
      loading: true,
      length: props.items.length
    }
  }

  slide(dir) {
    console.log('Setting new slide')
    let newSlide = (()=>{
      let currentSlide = this.state.currentSlide
      let length = this.state.length
      if (dir === 'left'){
        if (currentSlide - 1 >= 0) {
          return currentSlide - 1
        } else {
          return length - 1
        }
      } else if (dir === 'right') {
        if (currentSlide + 1 < length) {
          return currentSlide + 1
        } else {
          return 0
        }
      }
    })()
    this.setState({currentSlide: newSlide})
  }

  render() {

    let items = this.state.items.map((item, index)=>{
      let image = `url(images/${item})`
      return (
        <li
          style={{backgroundImage: image}}
          className={index === this.state.currentSlide ? 'active' : ''}
          key={index}
          >
        </li>
      )
    })

    let desc = this.state.desc;
    const height = this.props.height || '50vw';

    return (
      <div>
        {
          (desc !== null && desc !== undefined ? <p className="desc animate">{ desc }</p> : false)
        }
        <div className="animate slider" style={{height}}>
          <ul>
            {items}
          </ul>
          <div className="switcher">
            <button className="arrow left" onClick={this.slide.bind(this, 'left')}><i className="fa fa-angle-left"></i></button>
            <span className="count huge">{this.state.currentSlide + 1}</span>
            <span className="count">/{this.state.length}</span>
            <button className="arrow right" onClick={this.slide.bind(this, 'right')}><i className="fa fa-angle-right"></i></button>
          </div>
        </div>
        <div className="animate line"></div>
      </div>
    )

  }

}


class IPadSlider extends React.Component {

  constructor(props) {

    super(props);
    this.length = props.items.length
    this.state = {
      currentSlide: 0,
      items: props.items,
      desc: props.desc
    }

  }

  slide(dir) {
    console.log('Setting new slide')
    let newSlide = (()=>{
      let currentSlide = this.state.currentSlide
      let length = this.length
      if (dir === 'left'){
        if (currentSlide - 1 >= 0) {
          return currentSlide - 1
        } else {
          return length - 1
        }
      } else if (dir === 'right') {
        if (currentSlide + 1 < length) {
          return currentSlide + 1
        } else {
          return 0
        }
      }
    })()
    this.setState({currentSlide: newSlide})
  }

  render() {

    let items = this.state.items.map((item, index)=>{
      let image = `url(images/${item})`
      return (<li className={index === this.state.currentSlide ? 'active' : ''} key={index} style={{backgroundImage: image}}></li>)
    })

    let desc = this.state.desc

    return (
      <div>
        {
          (desc !== null && desc !== undefined ? <p className="desc animate">{ desc }</p> : false)
        }
        <div className="animate ipad-slider">
          <ul>
            {items}
          </ul>
          <div className="switcher">
            <button className="arrow left" onClick={this.slide.bind(this, 'left')}><i className="fa fa-angle-left"></i></button>
            <span className="count huge">{this.state.currentSlide + 1}</span>
            <span className="count">/{this.length}</span>
            <button className="arrow right" onClick={this.slide.bind(this, 'right')}><i className="fa fa-angle-right"></i></button>
          </div>
        </div>
        <div className="animate line"></div>
      </div>
    )

  }

}


class MacSlider extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      currentSlide: 0,
      items: props.items,
      length: props.items.length,
      desc: props.desc
    }

  }

  goTo(index) {
    console.log('Setting new currentSlide')
    this.setState({currentSlide: index})
  }

  render() {

    let items = this.state.items.map((item, index)=>{
      return (<li className={index === this.state.currentSlide ? 'active' : ''} key={index} style={{backgroundImage: item}}></li>)
    })

    let desc = this.state.desc

    let pins = this.state.items.map((pin, index)=>{
      return (
        <div
          className={index === this.state.currentSlide ? 'active' : ''}
          onClick={this.goTo.bind(this, index)}
          >
          <div></div>
        </div>
      );
    });

    return (
      <div>
        {
          (desc !== null && desc !== undefined ? <p className="desc animate">{ desc }</p> : false)
        }
        <div className="animate mac">
          <ul>
            {items}
          </ul>
          <div className="pins">
            {pins}
          </div>
        </div>
        <div className="animate line"></div>
      </div>
    )

  }

}

let caseComponents = {
  sliderFullWidth: SliderFullWidth,
  laptop: Laptop
}

// Main component

export default class extends React.Component {

  constructor(props) {
    super(props);
    console.log(_.findWhere(works, {alias: this.props.params.name}))
    this.state = {
      work: _.findWhere(works, {alias: this.props.params.name})
    }
  }

  componentDidMount() {

    $('title').text('Кейс | ' + this.state.work.name)

    $('.scroll-wrapper').scroll(()=>{
      console.log('scrolling')
    })

    setTimeout(()=>{
      $('.inner-wrap').addClass('_rendered')
    }, 2000)
    $('#menu').removeClass('_opened')
    this.unsubscribe = this.props.store.subscribe(()=>{
      this.forceUpdate()
    })
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

    var size;
    let text = $('#case-title').text()
    let resizer = $('#hidden-resizer')
    let containerWidth = $('.case-cont').width()
    resizer.html(text)
    console.log(text)
    while(resizer.width() > containerWidth) {
      size = parseInt(resizer.css("font-size"), 10);
      console.log(size)
      resizer.css("font-size", size - 1);
    }
    $('#case-title').css('font-size', size + 'px')

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
    NProgress.done();
  }

  _back() {
    browserHistory.push('/portfolio')
    $('.inner-wrap').removeClass('_rendered')
  }

  _goTo(alias, event) {
    browserHistory.push(`/${ alias }`)
  }

  openModal() {
    $('#modal').addClass('_opened')
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

    let moreProjects = filteredWorks.map((work, index)=>{

      let image = `url(../images/${ work.pic })`
      return (
        <div className="animate" key={index} onClick={this._goTo.bind(this, 'portfolio/' + work.alias)}>
          <span>{0 + '' + (index + 1)}</span>
          <div style={{backgroundImage: image}}>
            <div>
              <h4>{work.name}</h4>
              <span>{getText(work.type)}</span>
            </div>
          </div>
        </div>
      )

    });

    return (
      <div id="case" className="inner-wrap">

        <a href="#0" className="cd-top"><i className="fa fa-angle-up"></i></a>

        <aside>

          <ToggleMenu></ToggleMenu>

          <nav>
            <FilterLink store={this.props.store} filter="ALL">Все проекты</FilterLink>
            <FilterLink store={this.props.store} filter="WEB">Сайты</FilterLink>
            <FilterLink store={this.props.store} filter="BRANDING">Брендинг</FilterLink>
            <FilterLink store={this.props.store} filter="SEO">Продвижение</FilterLink>
            <FilterLink store={this.props.store} filter="VISUAL">Визуализация</FilterLink>
          </nav>

          <div className="switcher">
            <button className="arrow left" onClick={this.slide.bind(this, 'left')}><i className="fa fa-angle-left"></i></button>
            <span className="count huge">{index}</span>
            <span className="count">/{length}</span>
            <button className="arrow right" onClick={this.slide.bind(this, 'right')}><i className="fa fa-angle-right"></i></button>
          </div>

          <div className="price padding">
            <h4>Подобный проект от</h4>
            <h2>{ work.price } <i className="fa fa-rouble"></i></h2>
          </div>

          <div className="padding">
            <button className="lead" onClick={this.openModal}>
              Заказать похожий проект
            </button>
          </div>

        </aside>

        <section className="scrollbar-macosx case-wrap">

          <div className="heading">

            <div>

              <div className="logo">
                <Link to="/"><i className="icons cloudmill"></i></Link> <br/>
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

              <div className="line animate"></div>

              <div className="logo">
                <Link to="/"><i className="icons cloudmill"></i></Link> <br/>
                <span>Интерактивное агентство</span>
              </div>

              <div className="contacts">
                <h3>8 812 425 67 17</h3>
                <p className="transparent">г. Санкт-Петербург</p>
              </div>

            </div>

          </div>

          <div className="case-loading">{spinner()}</div>

          <div className="case-cont">

            <div className="brand-bg"></div>

            <img className="logo" src={'images/' + work.logo} alt=""/>

            <p className="desc">{ work.shortDesc }</p>

            <h2 id="case-title" style={{fontSize: work.headerSize}}>{ work.name }</h2>
            <div id="hidden-resizer" style={{fontSize: '100px', position: 'absolute', visibility: 'hidden'}}>{ work.name }</div>

            <p className="main-desc"> { work.desc } </p>

            {work.components.topPic ? topPic( work.components.topPic.img, work.components.topPic.marginBottom, work.components.topPic.desc) : null}

            {work.components.imageTop ? imageTop( work.components.imageTop.img, work.components.imageTop.desc) : null}

            {work.components.specialBg ? SpecialBg('images/' + work.components.specialBg.img, work.components.specialBg.shift, work.components.specialBg.top) : null}

            {work.components.laptop ? Laptop(work.components.laptop.img, work.components.laptop.line) : null}

            {work.components.slider3d ? (<Slider3d pics={work.components.slider3d.pics} desc={work.components.slider3d.desc} type={work.components.slider3d.type}/>) : null}

            {work.components.screens ? Screens(work.components.screens.pic, work.components.screens.desc, work.components.screens.width, work.components.screens.marginTop) : null}

            {work.components.sliderFillWidth ? (<SliderFullWidth items={work.components.sliderFillWidth.items} height={work.components.sliderFillWidth.height} desc={work.components.sliderFillWidth.desc}/>) : null}

            {work.components.iPadSlider ? (<IPadSlider items={work.components.iPadSlider.pics} desc={work.components.iPadSlider.desc}/>) : null}

            {work.components.imageWithDesc ? ImageWithDesc(work.components.imageWithDesc.img, work.components.imageWithDesc.desc) : null}

            {work.components.elements ? Elements(work.components.elements.img, work.components.elements.desc, work.components.elements.marginBottom) : null}

            {work.components.imageWithDesc2 ? Elements(work.components.imageWithDesc2.img, work.components.imageWithDesc2.desc) : null}

            {work.components.imageWithDesc3 ? Elements(work.components.imageWithDesc3.img, work.components.imageWithDesc3.desc) : null}

            {work.components.macSlider ? (<MacSlider items={work.components.macSlider.items} desc={work.components.macSlider.desc}/>) : null}

            {work.components.screensSkew ? ScreensSkew(work.components.screensSkew.pic, work.components.screensSkew.count, work.components.screensSkew.marginTop) : null}

            {work.weMade ? weMade(work) : null}

            {work.components.simpleText ? simpleText(work.components.simpleText.header, work.components.simpleText.text) : null}

            <div className="animate line"></div>

            <div className="more">

              <div className="cont">

                {moreProjects.slice(0, 4)}

              </div>

            </div>

            <div className="bottom-info">

              <div></div>
              <div>
                <div>
                  <h5>Мы в социальных сетях</h5>
                  <div className="links">
                    <a href="https://facebook.com/cloudmill"><i className="fa fa-facebook"></i></a>
                    <a href="https://vk.com/cloudmill"><i className="fa fa-vk"></i></a>
                    <a href="https://twitter.com/cloudmill"><i className="fa fa-twitter"></i></a>
                  </div>
                </div>
                <div>
                  <h5>Мы состоим в</h5>
                  <i className="icons specia"></i>
                </div>
                <div>
                  <h5>Поделиться ссылкой</h5>
                  <div className="links">
                    <a href="https://facebook.com/cloudmill" className="social-link"><i className="fa fa-facebook"></i></a>
                    <a href="https://vk.com/cloudmill" className="social-link"><i className="fa fa-vk"></i></a>
                    <a href="https://twitter.com/cloudmill" className="social-link"><i className="fa fa-twitter"></i></a>
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
