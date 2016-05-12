import React from 'react'
import { Link, browserHistory } from 'react-router'
import works from '../../data/works'

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      works: works
    }
  }

  componentDidUpdate() {
    console.log(this.props.store.getState())
  }

  componentDidMount() {

    this.unsubscribe = this.props.store.subscribe(()=>{
      this.forceUpdate()
    })

    console.log('is loaded')
    console.log(this.props.store.getState().loading.initiallyLoaded)

    this.preload()

    setTimeout(()=>{
      $('.left-numbers').css('top', '-162vh')
      $('.right-numbers').css('top', '-1600vh')
      $('.prgrss').css('opacity', '1')
      $('.changer').addClass('_visible')
      $('.line').addClass('_animated')
    }, 0)

    setTimeout(()=>{
      $('.initial-loader').removeClass('_visible')
      this.props.store.dispatch({
            type: 'SET_INITIALLY_LOADED'
          })
    }, 6000)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  preload() {

    let images = this.state.works.map((w)=>{
      return w.pic;
    })

    images.forEach((img)=>{
      let image = new Image()
      image.src = '../images/' + img
      image.onload = ()=>{
        console.log('loaded')
      }
    })

  }

  render() {
    const progress = this.props.store.getState().loading.progress
    const progressFormatted = (()=>{
      if (progress < 10) {
        return '0' + progress
      } else {
        return '' + progress
      }
    })()

    const visibleClass = (()=>{
      if (!this.props.store.getState().loading.initiallyLoaded) {
        return '_visible'
      } else {
        return ''
      }
    })()

    const loadingVisibilityClass = (()=>{
      if (!this.props.store.getState().caseLoading.isLoaded) {
        return '_visible'
      } else {
        return ''
      }
    })()

    return (
      <div>
        <div className={'initial-loader ' + visibleClass}>
          <div></div>
          <div className="animate">
            <div className="line top"></div>
            <div className="prgrss">
              <div>
                <div className="left-numbers">
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                </div>
              </div>
              <div>
                <div className="right-numbers">
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                </div>
              </div>
              <div>%</div>
            </div>
            <div className="line bottom"></div>
          </div>
          <div className="half animate">
            <div className="changer">
              <div>
                <div className="line"></div>
                <div className="text">
                  <div>
                    <div>Разрабатываем</div>
                    <div></div>
                  </div>
                  <div>
                    <div>Продвигаем</div>
                    <div></div>
                  </div>
                  <div>
                    <div>Поддерживаем</div>
                    <div></div>
                  </div>
                  <div>
                    <div><img src="images/icons/logo.svg" width="5vw" alt=""/></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'loading-ovrl' + loadingVisibilityClass}></div>
      </div>
    )
  }

}
