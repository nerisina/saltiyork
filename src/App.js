import React from 'react';

const attractions = [
  {
    title: 'Mori Art Museum',
    description:
      'The Mori Art Museum strives to be a place for enjoyment, stimulation and discussion - a place where what is important in our culture and society is openly debated.',
    link: 'http://www.mori.art.museum',
    image: '/image_1.jpg',
    className: 'w-50-l'
  },
  {
    title: 'Robot Restaurant',
    description:
      'Located in Shinjuku, the Robot Restaurant features a raucous pop-culture show with robotic monsters, dancers & lasers. A weird but wonderfully exciting experience.',
    link: 'http://www.shinjuku-robot.com/pc/system.php?lng=en',
    image: 'image_2.jpg',
    className: 'w-third-l ml5-l'
  },
  {
    title: 'JBS Jazz Bar',
    description:
      'Home to over 10,000 records, JBS Jazz Bar is burrowed away in Shibuya. If simplicity, vinyl and fine whisky are what you’re in search of, this place is for you.',
    image: 'image_3.jpg',
    className: 'w-third-l ml-auto-ns'
  },
  {
    title: 'Nyan da Neko',
    description:
      'If you love coffee, but you love cats more, Nyan da Neko is worthy of a visit. Located in Odaiba, you can enjoy your beverage with the company of up to 40 cats. Meow.',
    image: 'image_4.jpg',
    className: 'w-40-l ml5-l mr5-l'
  },
  {
    title: 'Yayoi Kusama Museum',
    description:
      'It could be said that it is Kusama’s second golden age. So after much anticipation, the Yayoi Kusama Museum finally opened its doors. We recommend getting tickets, as it’s deservingly popular.',
    link: 'http://yayoi-kusama.jp',
    image: 'image_5.jpg',
    className: 'w-30-l'
  },
  {
    title: 'Mount Zine',
    description:
      'Selling every zine they’re presented with, Mount Zine replace their stock every 6 months. Simply have a browse, or join one of the zine-making workshops they regularly host.',
    link: 'https://zine.mount.co.jp/',
    image: 'image_6.jpg',
    className: 'w-third-l ml5-l mr-auto-l'
  },
  {
    title: 'Sanrio Puroland',
    description:
      'An indoor theme park with appearances from Hello Kitty, My Melody, Cinnamoroll and many more. Need we say more?',
    link: 'https://en.puroland.jp/homeen/',
    image: 'image_7.jpg',
    className: 'w-third-l ml-auto-l mr5-l'
  },
  {
    title: 'Sumida Hokusai Museum',
    description:
      'Now a cultural landmark in Tokyo, the Hokusai Museum amalgamates modern architecture and the artist’s traditional woodblock prints. It’s definitely worth checking out.',
    link: 'http://hokusai-museum.jp/?lang=en',
    image: 'image_8.jpg',
    className: 'w-third-l mr-auto-l'
  },
  {
    title: 'Ghibli Museum',
    description:
      'A short ride outside of Tokyo, the Ghibli museum showcases the work of Studio Ghibli – the creators of Spirited Away, My Neighbour Totoro and many other Anime feature films. This is one for the animation-lovers.',
    link: 'http://www.ghibli-museum.jp/en/',
    image: 'image_9.jpg',
    className: 'w-third-l ml-auto-l'
  }
];
const menu = [
  {
    children: 'Lost in Saltillo',
    logo: true,
    className: 'order-3-ns w-100 w-30-ns mb3 mb0-ns',
    href: 'index.html'
  },
  {
    children: 'About',
    className: 'order-1-ns w-20',
    href: 'about.html'
  },
  {
    children: 'Tickets',
    className: 'order-2-ns w-20',
    href: 'tickets.html'
  },
  {
    children: 'Journal',
    className: 'order-4-ns w-20',
    href: 'journal.html'
  },
  {
    children: 'Contact',
    className: 'order-5-ns w-20',
    href: 'contact.html'
  }
];

const Hightligh = (props) => (
  <span className={`relative highlight highlight-${props.color}`}>
    <span className="relative z-2">{props.children}</span>
  </span>
);

const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    <div className="mb3 mb4-ns">
      <Hightligh color="pink">Lost in Saltillo</Hightligh> es un diccionario de
      lugares divertidos para visitar, explorar en Saltillo, Coahuila, Mexico.
    </div>
    <div>
      Aqui encontraras <Hightligh color="blue">museos</Hightligh>museos y
      gallerias de arte asi como{" "}
      <Hightligh color="yellow">restaurantes</Hightligh> y cafes.{" "}
      <Hightligh color="aqua">Satillo</Hightligh> es una ciudad super relajada y
      divertida.
    </div>
  </div>
);

const NavItem = (props) => (
  <li className={`mh2-ns f6 f4-1 tc ${props.className}`}>
    <a href={props.href} className="white no-underline">
      {props.title}
      {/* {props.logo ? <img alt="Logo" src="./images/logo.svg" /> : props.children} */}
    </a>
  </li>
);

const Nav = () => (
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      { menu.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </ul>
  </nav>
);

const Overlay = (props) => (
  <div
    className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
    style={{ transform: props.showInfo ? "none" : "translateY(-100%)" }}
  >
    <div>
      <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">
        {props.title}
      </h1>
      <p className="lh-title lh-copy-ns mv0 black f6 measure-l">
        {props.description}
      </p>
    </div>
  </div>
);

class Attraction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };

    this.toggleInfo = this.toggleInfo.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }

  toggleInfo() {
    this.setState(prevState => ({ showInfo: !prevState.showInfo }));
  }

  closeInfo() {
    this.setState({ showInfo: false });
  }

  render() {
    return (
      <div
        className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${this.props.className} `}
        onClick={this.toggleInfo}
        onMouseLeave={this.closeInfo}
      >
        <div className="relative">
          <Overlay {...this.props} showInfo={this.state.showInfo} />
          {/* <img alt={this.props.title} src={`images/${this.props.image}`} className="db" /> */}
          <a href={this.props.link} rel="noopener noreferrer" target="_blank" class="hot-pink pt1 db">{this.props.title}</a>
        </div>
      </div>
    );
  }
}

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Nav />
      <Intro />
    </div>
    <div className="flex flex-wrap container">
      { attractions.map((attraction, index) => (
        <Attraction key={index} {...attraction} />
      ))}
    </div>
  </div>
);

export default App;
