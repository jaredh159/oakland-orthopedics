/* eslint-disable jsx-a11y/anchor-is-valid, no-script-url */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>Oakland</strong> <span>Orthopedics</span>
    </Link>
    <a
      className="header__telephone"
      href="tel:2483340524"
      style={{ fontSize: '0.8em', borderBottomWidth: 0, marginLeft: '2em' }}
    >
      <i class="fa fa-phone" /> (248) 334-0524
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
