import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Root from './Root';

ReactDOM.render(<Root />, document.getElementById('root'));



















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