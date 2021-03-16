import React from 'react';
import ReactDOM from 'react-dom';
// import 'semantic-ui-css/semantic.min.css';
// import Root from './Root';

// ReactDOM.render(<Root />, document.getElementById('root'));
class Menu extends React.Component {
  render(){
      let menus = [
          'Home',
          'About',
          'Service',
          'Portfolio',
          'Contact us'
      ]
      return React.createElement('div',
          null,
          menus.map((v, i) => {
              return React.createElement('div',
                  {key: i},
                  React.createElement(Link, {label: v})
              )
          })
      )
  }
}

class Link extends React.Component {
  render(){
    const url = '/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
      return React. createElement('div',
        null,
        React.createElement(
          'a',
          {href: url},
          this.props.label
        ),
        React.createElement('br')
        )
  }
}

ReactDOM.render(
  React.createElement(
      Menu,
      null
  ),
  document.getElementById('menu')
)




















/////////////////////////////////예전코드.

// import {Link} from 'react-router-dom';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Menu, Header} from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css'

// let h1 = React.createElement('h1', null, 'Hello World!');
// ReactDOM.render(
//   <div>
//     <a href="ds">aa</a>
//     <a href="ds">aa</a>
//   </div>,
//   document.getElementById('content')
// )

// <Header as='h3'>
//     Learn More
//     </Header>,


// class Root extends React.Component{
//   render(){
//     return <Menu>
//       <Menu.Item as={Link} to='/home'>
//       Home
//       </Menu.Item>
//     </Menu>
//   }
// }

// let RootDom = React.createElement('Root', null);

// ReactDOM.render(
//   <Root/>,
//   document.getElementById('content')
// )




  // document.body.appendChild(div)
  // setInterval(() => (div.innerText = currentTime()), 1000)

  /*
  let h1 = React.createElement('h1', null, 'Hello World!');
ReactDOM.render(
  React.createElement('div', null, 'h1', 'h1'),
  document.getElementById('content')
)
  */