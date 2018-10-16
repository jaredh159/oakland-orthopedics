import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>Oakland</strong> <span>Orthopedics</span>
    </Link>
    <a
      href="tel:2488586951"
      style={{ fontSize: '0.8em', borderBottomWidth: 0, marginLeft: '2em' }}
    >
      <i class="fa fa-phone" /> (248) 858-6951
    </a>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
