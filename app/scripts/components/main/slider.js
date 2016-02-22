import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      length: props.slides.length,
      cssLeft: 0
    }
  }

  _moveLeft() {
    console.log('moving left')
    let currentSlide = this.state.currentSlide
    let length = this.props.slides.length
    if (currentSlide > 0) {
      let newSlide = currentSlide - 1
      let cssLeft = 50 * newSlide * -1 + 'vw'
      this.setState({currentSlide: newSlide})
      this.setState({cssLeft: cssLeft})
    } else {
      let newSlide = length - 1
      let cssLeft = 50 * newSlide * -1 + 'vw'
      this.setState({currentSlide: newSlide})
      this.setState({cssLeft: cssLeft})
    }

  }

  _moveRight() {
    console.log('moving right')
    let currentSlide = this.state.currentSlide
    let length = this.props.slides.length
    if (currentSlide + 1 < length) {
      let newSlide = currentSlide + 1
      let cssLeft = 50 * newSlide * -1 + 'vw'
      this.setState({currentSlide: newSlide})
      this.setState({cssLeft: cssLeft})
    } else {
      let newSlide = 0
      let cssLeft = 50 * newSlide * -1 + 'vw'
      this.setState({currentSlide: newSlide})
      this.setState({cssLeft: cssLeft})
    }
  }

  render() {

    let slides = this.props.slides.map((slide)=>{
      let image = `url(../images/${ slide })`
      return (
        <li style={{backgroundImage: image}}></li>
      )
    })

    return (
      <div className="slider" key={this.state.currentSlide}>
        <ul className="cont" style={{left: this.state.cssLeft}}>
          {slides}
        </ul>
        <div className="clickarea left" onClick={this._moveLeft.bind(this)}></div>
        <div className="clickarea right" onClick={this._moveRight.bind(this)}></div>
      </div>
    )

  }

}
