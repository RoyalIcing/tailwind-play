import './index.css'

import { h, render } from 'preact'

if (process.env.NODE_ENV === 'development') {
  // Enable Preact debug output and use of React Developer Tools
  //require('preact/debug')
}

let root
function init() {
  let App = require('./App').default
  root = render(<App />, document.querySelector('#app'), root)
}

if (module.hot) {
  module.hot.accept('./App', init)
}

init()
