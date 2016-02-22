import React from 'react';
import ToggleMenu from './common/toggleMenu';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('#menu').removeClass('_opened')
    setTimeout(()=>{
      $('.inner-wrap').addClass('_rendered')
    }, 500)
  }

  render() {
    return (
      <div id="company" className="inner-wrap">

        <aside>

          <section>
            <p className="projects">
              <span>59</span>
              <span>Проектов</span>
            </p>
            <h3>Клиенты</h3>
            <p>За это время нашими клиентами стали, тут нужен копирайтинг</p>
          </section>
          <section>
            <div className="carousel">

              <div className="button"><i className="fa fa-angle-up"></i></div>
              <div className="carousel-cont"></div>
              <div className="button"><i className="fa fa-angle-down"></i></div>

            </div>
          </section>

          <ToggleMenu></ToggleMenu>

        </aside>

        <section>

          <div>

            <div className="content">

              <div className="heading">

                <div>

                  <div>
                    <p>агентство</p>
                  </div>

                  <div>
                    <div className="logo">
                      <a href="/"><i className="icons cloudmill"></i></a> <br/>
                      <span>Интерактивное агентство</span>
                    </div>
                  </div>

                </div>

                <div>

                  <div className="pull-right">
                    <h3>8 812 640 8022</h3>
                    <p className="transparent">г. Санкт-Петербург</p>
                  </div>

                </div>

              </div>

              <div className="intro">
                <div>
                  <hr/>
                </div>
                <div>
                  <h2>копим опыт с 2009 года</h2>
                  <h5>за это время мы собрали внушительное <a href="">портфолио</a> <i className="fa fa-arrow-right"></i></h5>
                </div>
              </div>

              <div className="we-do">

                <div>
                  <hr/>
                  <span>01</span>
                  <span>Сайты <br/> и приложения</span>
                </div>
                <div>
                  <div></div>
                  <div>
                    <h3>Разрабатываем</h3>
                    <p>Для этого используем — список иконок с технологиями, тут хоть бы чуть-чуть по больше контента, ибо совсем пусто, и какраз нужен текст о поддержке и наполнению  качественным контентом. </p>
                  </div>
                </div>

              </div>

              <div className="we-do">

                <div>
                  <hr/>
                  <span>02</span>
                  <span>Фирменные стили, <br/>презентации</span>
                </div>
                <div>
                  <div></div>
                  <div>
                    <h3>Придумываем и воплощаем</h3>
                    <p>Создаем эффективные визуальные коммуникации, базирующиеся на глубоких инсайтах и доскональном исследовании целевой аудитории. Переводим главную идею компании на язык линий и образов. Представляем гору информации в виде одной картинки. Создаем запоминающиеся рекламные образы. </p>
                  </div>
                </div>

              </div>

              <div className="we-do">

                <div>
                  <hr/>
                  <span>03</span>
                  <span>Контекст, <br/>SEO</span>
                </div>
                <div>
                  <div></div>
                  <div>
                    <h3>Продвигаем</h3>
                    <p>Создаем эффективные визуальные коммуникации, базирующиеся на глубоких инсайтах и доскональном исследовании целевой аудитории. Переводим главную идею компании на язык линий и образов. Представляем гору информации в виде одной картинки. Создаем запоминающиеся рекламные образы. </p>
                  </div>
                </div>

              </div>

              <div className="bottom-info">

                <div></div>
                <div>

                  <div className="hiring">
                    <div className="icon-brain"></div>
                    <p>Всегда рады пригласить к себе умных и целеустремленных, по всем нашим профильным направлениям.</p>
                    <a href="mailto:info@cloudmill.ru">info@cloudmill.ru</a>
                  </div>

                </div>

              </div>

              <div className="bottom-links">

                <div>
                  <h5>Мы в социальных сетях</h5>
                  <div className="links">
                    <a><i className="fa fa-facebook"></i></a>
                    <a><i className="fa fa-vk"></i></a>
                    <a><i className="fa fa-twitter"></i></a>
                  </div>
                </div>
                <div>
                  <div>
                    <h5>Мы состоим в </h5>
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

              </div>

            </div>

          </div>

          <aside>

            <div>

              <h3>8 812 640 8022</h3>
              <p className="transparent">г. Санкт-Петербург</p>

              <div className="action">
                <div className="icon-file"></div>
                <h4>Заполните бриф</h4>

              </div>

              <div className="action">
                <div className="icon-file"></div>
                <h4>PDF-Презентация</h4>

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
