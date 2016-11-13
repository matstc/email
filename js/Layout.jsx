const React = require('react')
const { Link } = require('react-router')

const Layout = (props) => (
  <div className='container-fluid'>
    <div className='masthead'>
      <h3 className='text-muted'>EmailEditor</h3>
      <nav>
        <ul className='nav nav-justified'>
          <li className='active'>
            <Link to='/login' className='browse-all'>Login</Link>
          </li>
          <li>
            <Link to='/templates' className='browse-all'>Templates</Link>
          </li>
          <li>
            <Link to='/edit' className='browse-all'>Edit</Link>
          </li>
        </ul>
      </nav>
    </div>
    {props.children}
  </div>
)

// const {element} = React.PropTypes

Layout.propTypes = {
  children: React.PropTypes.object
}

module.exports = Layout
