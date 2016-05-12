export default [
  {
    name: 'Атон ',
    alias: 'aton',
    type: 'web',
    logo: 'aton/logo.png',
    price: '350 000',
    shortDesc: 'Разработка сайта, проведение фотосессии, разработка рекламной кампании',
    desc: 'Компания разрабатывает и поставляет на рынок натуральные, органические полезные продукты с высоким качеством и честной информацией.',
    pic: 'aton/main_pic.jpg',
    headerSize: '20vw',
    weMade: [
      {
        type: 'simple',
        header: 'ИНТЕРАКТИВНЫЙ ПРОТОТИП',
        text: 'В предпроектную подготовку входило разработка интерактивного прототипа, для обеспечения продуманной структуры сайта'
      },
      {
        type: 'website',
        header: 'РАЗРАБОТАЛИ САЙТ',
        platform: 'bitrix',
        link: 'http://google.ru'
      },
      {
        type: 'simple',
        header: 'ЕЩЕ КОЕ ЧТО',
        text: 'В предпроектную подготовку входило разработка интерактивного прототипа'
      },
      {
        type: 'simple',
        header: 'И ПОСЛЕДНЕЕ',
        text: 'Кучерявая тема входило разработка интерактивного прототипа'
      }
    ],
    components: {
      laptop: {
        img: 'aton/laptop.png',
        line: true
      },
      specialBg: {
        img: 'aton/special_bg.png',
        shift: '-35vh'
      },
      sliderFillWidth: {
        items: [
          'aton/slider/1.jpg',
          'aton/slider/2.jpg',
          'aton/slider/3.jpg',
          'aton/slider/4.jpg',
          'aton/slider/5.jpg'
        ],
        desc: 'Специально для проекта была выполнена фотосессия для каждой линейки продукции'
      },
      macSlider: {
        items: [
          'aton/slider/1.jpg',
          'aton/slider/1.jpg',
          'aton/slider/1.jpg'
        ],
        desc: 'Для каждой линейки продукции разработана посадочная страница'
      },
      screens: {
        desc: '',
        pic: 'aton/screens.jpg',
        width: '80%'
      },
      screensSkew: {
        count: 36,
        pic: 'aton/screens_skew.jpg',
        marginTop: 0
      }
    }
  },
  {
    name: 'Рунит',
    alias: 'runit',
    type: 'web',
    logo: 'runit/runit_logo.png',
    price: '300 000',
    shortDesc: 'Разработка корпоративного сайта с каталогом продукции.',
    desc: 'Компания занимается разработкой, производством и поставками сухих смесей и красок «Рунит», выполняет проектирование и реставрационные работы на объектах культурного наследия.',
    pic: 'runit/title.jpg',
    headerSize: '17vw',
    weMade: [
      {
        type: 'simple',
        header: 'ИНТЕРАКТИВНЫЙ ПРОТОТИП',
        text: 'В предпроектную подготовку входило разработка интерактивного прототипа, для обеспечения продуманной структуры сайта'
      },
      {
        type: 'website',
        header: 'РАЗРАБОТАЛИ САЙТ',
        platform: 'bitrix',
        link: 'http://google.ru'
      },
      {
        type: 'simple',
        header: 'ЕЩЕ КОЕ ЧТО',
        text: 'В предпроектную подготовку входило разработка интерактивного прототипа'
      },
      {
        type: 'simple',
        header: 'И ПОСЛЕДНЕЕ',
        text: 'Кучерявая тема входило разработка интерактивного прототипа'
      }
    ],
    comp: [
      {
        component: 'sliderFullWidth',
        props: {
          items: [
            'aton/slider/1.jpg',
            'aton/slider/1.jpg',
            'aton/slider/1.jpg'
          ],
          desc: 'Специально для проекта была выполнена фотосессия для каждой линейки продукции'
        }
      },
      {
        component: 'laptop',
        props: {
          items: [
            'aton/slider/1.jpg',
            'aton/slider/1.jpg',
            'aton/slider/1.jpg'
          ],
          props: {
            img: 'runit/laptop.gif',
            line: false
          }
        }
      },
    ],
    components: {
      laptop: {
        img: 'runit/laptop.gif',
        line: false
      },
      specialBg: {
        img: 'runit/bg.jpg',
        shift: '-100vh'
      },
      imageWithDesc: {
        img: 'runit/laptop2.gif',
        desc: 'Каталог продукции с фильтром для удобсвта пользователей'
      },
      elements: {
        img: 'runit/elements.jpg',
        desc: 'Стилистика сайта, полностью соответствует корпоративным стандартам',
        marginBottom: '-15vh'
      },
      screens: {
        desc: '',
        pic: 'runit/screens.jpg',
        width: '100%',
        marginTop: '-10vh'
      },
      screensSkew: {
        count: 20,
        pic: 'runit/screens_skew.jpg',
        marginTop: '5vh'
      }
    }
  },
  {
    name: 'Чекрум',
    alias: 'checkroom',
    type: 'web',
    logo: 'checkroom/logo.png',
    price: '250 000',
    shortDesc: 'Разработка сайта',
    desc: 'Интернет-бутик, специализирующийся на классической мужской обуви, профессиональной косметике по уходу за ней, а также престижных мужских аксессуарах',
    pic: 'checkroom/main_pic.jpg',
    headerSize: '17vw',
    weMade: [
      {
        type: 'simple',
        header: 'ИНТЕРАКТИВНЫЙ ПРОТОТИП',
        text: 'В предпроектную подготовку входило разработка интерактивного прототипа, для обеспечения продуманной структуры сайта'
      },
      {
        type: 'website',
        header: 'РАЗРАБОТАЛИ САЙТ',
        platform: 'bitrix',
        link: 'http://google.ru'
      },
      {
        type: 'simple',
        header: 'ЕЩЕ КОЕ ЧТО',
        text: 'В предпроектную подготовку входило разработка интерактивного прототипа'
      },
      {
        type: 'simple',
        header: 'И ПОСЛЕДНЕЕ',
        text: 'Кучерявая тема входило разработка интерактивного прототипа'
      }
    ],
    components: {
      laptop: {
        img: 'checkroom/laptop.png',
        line: true
      },
      specialBg: {
        img: 'checkroom/bg.jpg',
        shift: '-25vh',
        top: '-50vh'
      },
      imageWithDesc: {
        img: 'checkroom/screens.jpg',
        desc: 'Удобная и понятная корзина покупок, личный кабинет, форма для отправки личных данных'
      },
      elements: {
        img: 'checkroom/laptop2.jpg',
        marginBottom: '-1vh'
      },
      imageWithDesc2: {
        img: 'checkroom/gallery.jpg',
        desc: 'Специально для проекта были отрисованы иконки для каждого типа обуви'
      },
      imageWithDesc3: {
        img: 'checkroom/screens2.jpg',
        desc: 'Удобная и понятная корзина покупок, личный кабинет, форма для отправки личных данных'
      },
      screensSkew: {
        count: 46,
        pic: 'checkroom/screens_skew.jpg',
        marginTop: '5vh'
      }
    }
  },
  {
    name: 'Ф.О.К.',
    alias: 'fok',
    type: 'visual',
    headerSize: '20vw',
    logo: 'fok/logo.png',
    price: '150 000',
    shortDesc: 'Физкультурно-оздоровительный комплекс с бассейном, спортивной площадкой, парковкой, рестораном и спортивым залом.',
    desc: 'Компания разрабатывает и поставляет на рынок натуральные, органические полезные продукты с высоким качеством и честной информацией.',
    pic: 'fok/main_pic.jpg',
    components: {
      slider3d: {
        type: "horizontal",
        pics: ['fok/slider.jpg', 'fok/slider.jpg', 'fok/slider.jpg', 'fok/slider.jpg'],
        desc: 'Предлагаем нестандартный концепт. Поместилось все: бассейн, спортивная площадка, парковка, ресторан, спортивный зал. '
      },
      iPadSlider: {
        desc: 'Двигаемся дальше, размещаем ФОК на местности, добавляем больше деталей.',
        pics: ['fok/pic1.jpg', 'fok/pic1.jpg', 'fok/pic1.jpg', 'fok/pic1.jpg'],
        width: '100%'
      },
      screens: {
        desc: 'Развиваем идею экстерьера. Материалы: бетон, стекло, деревянные панно.',
        pic: 'fok/pic1.jpg',
        width: '100%'
      },
      imageWithDesc: {
        img: 'fok/pic2.jpg',
        desc: 'Развиваем идею экстерьера. Материалы: бетон, стекло, деревянные панно.'
      },
      simpleText: {
        header: 'Финальный результат принят!',
        text: 'Все счастливы, но очень хочется спать, проект необходимо было сдать в условиях экстремально сжатых сроков.'
      }
    }
  },
  {
    name: 'Setlgroup',
    alias: 'setl',
    type: 'web',
    logo: 'setlgroup/logo.png',
    price: '200 000',
    shortDesc: 'Разработка сайта, техническая поддержка',
    desc: 'Setl Group является одним из крупнейших финансово-промышленных объединений Северо-западного региона России',
    pic: 'setlgroup/main_pic.jpg',
    weMade: [
      {
        type: 'simple',
        header: 'ИНТЕРАКТИВНЫЙ ПРОТОТИП',
        text: 'В предпроектную подготовку входило разработка интерактивного прототипа, для обеспечения продуманной структуры сайта'
      },
      {
        type: 'website',
        header: 'РАЗРАБОТАЛИ САЙТ',
        platform: 'bitrix',
        link: 'http://google.ru'
      },
      {
        type: 'simple',
        header: 'ЕЩЕ КОЕ ЧТО',
        text: 'В предпроектную подготовку входило разработка интерактивного прототипа'
      },
      {
        type: 'simple',
        header: 'И ПОСЛЕДНЕЕ',
        text: 'Кучерявая тема входило разработка интерактивного прототипа'
      }
    ],
    components: {
      laptop: {
        img: 'setlgroup/laptop.png',
        line: false
      },
      specialBg: {
        img: 'setlgroup/bg.jpg',
        shift: '-110vh',
        top: '-55vh'
      },
      slider3d: {
        type: "vertical",
        pics: [
          'setlgroup/slider/setl.jpg',
          'setlgroup/slider/setl_1.jpg',
          'setlgroup/slider/setl_2.jpg',
          'setlgroup/slider/setl_3.jpg',
          'setlgroup/slider/setl.jpg'
        ],
        desc: 'Специально для проекта была выполнена фотосессия для каждой линейки продукции'
      },
      screens: {
        desc: 'Строгий дизайн, удобная навигация, 2 языковые версии, каталог с объектами.',
        pic: 'setlgroup/screens.jpg',
        width: '100%'
      },
      elements: {
        img: 'setlgroup/elements.jpg',
        marginBottom: '-10vh'
      }
    }
  }
]
