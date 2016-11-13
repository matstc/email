const React = require('react')
const ReactDOM = require('react-dom')
const Layout = require('./Layout')
const Login = require('./Login')
const Templates = require('./Templates')
const Edit = require('./Edit')

// destructuring
const {Router, Route, hashHistory} = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <Route path='/login' component={Login} />
      <Route path='/templates' component={Templates} />
      <Route path='/edit' component={Edit} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
