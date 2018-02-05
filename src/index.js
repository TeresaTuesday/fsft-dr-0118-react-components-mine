import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Beards from './Beards.js'
import Hats from './Hats.js'
import Builds from './Builds.js'


ReactDOM.render(<App/>, document.getElementById('root'))
ReactDOM.render(<Beards/>, document.getElementById('beardly'))
ReactDOM.render(<Hats/>, document.getElementById('hatly'))
ReactDOM.render(<Builds/>, document.getElementById('buildly'))

registerServiceWorker()