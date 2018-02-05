import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Beards from './components/Beards.js'
import Hats from './components/Hats.js'
import Builds from './components/Builds.js'
import Dude from './componentsDude.js'


ReactDOM.render(<App/>, document.getElementById('root'))
ReactDOM.render(<Beards/>, document.getElementById('beardly'))
ReactDOM.render(<Hats/>, document.getElementById('hatly'))
ReactDOM.render(<Builds/>, document.getElementById('buildly'))
ReactDOM.render(<Dude/>, document.getElementById('dudely'))

registerServiceWorker()
