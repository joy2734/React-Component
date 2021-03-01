import React from 'react';
import ReactDOM from 'react-dom';
  // const div = document.createElement("div")
let h1 = React.createElement('h1', null, 'Hello World!');
ReactDOM.render(
  React.createElement('div', null, h1, h1),
  document.getElementById('content')
)
  // document.body.appendChild(div)
  // setInterval(() => (div.innerText = currentTime()), 1000)

  /*
  let h1 = React.createElement('h1', null, 'Hello World!');
ReactDOM.render(
  React.createElement('div', null, 'h1', 'h1'),
  document.getElementById('content')
)
  */