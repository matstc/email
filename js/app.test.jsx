const App = require('./app')
const React = require('react')
const enzyme = require('enzyme')

it('renders app without crashing', () => {
  enzyme.mount(<App />);
});
