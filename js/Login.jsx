const React = require('react')
const { Link } = require('react-router')

const Login = () => (
  <div className='jumbotron vertical-center'>
    <div className='container'>
      <form className='form-signin'>
        <div className='input-group input-group-lg'>
          <span className='input-group-addon' id='sizing-addon1'>@</span>
          <input className='form-control' placeholder='Username' aria-describedby='sizing-addon1' />
        </div>
        <br />
        <Link to='/templates' className='btn btn-lg btn-primary btn-block'>Login</Link>
      </form>
    </div>
  </div>
)

module.exports = Login
