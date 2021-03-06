/* eslint-disable jsx-a11y/anchor-is-valid, no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Menu = (props) => (
  <nav id="menu">
    <div className="inner">
      <ul className="actions vertical">
        <li>
          <a className="button special fit" href="tel:2483340524">
            <i class="fa fa-phone" /> (248) 334-0524
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/maps/place/Oakland+Orthopedic+Partners/@42.615759,-83.276464,17z/data=!4m5!3m4!1s0x0:0xc29c8a0926eb2720!8m2!3d42.6157587!4d-83.2764637?hl=en-US"
            className="button fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-map-marker" /> Map &amp; Directions
          </a>
        </li>
      </ul>
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            <i className="fa fa-home" /> Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/patient-information">
            <i className="fa fa-file-pdf-o" /> Patient Info
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="#contact">
            <i className="fa fa-envelope" /> Contact
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/about">
            About us
          </Link>
        </li>
        <li>
          <a onClick={props.onToggleMenu} href="http://bit.ly/review-oakland-ortho">
            <i className="fa fa-thumbs-up" /> Rate Us!
          </a>
        </li>
        <li className="secondary">
          <Link onClick={props.onToggleMenu} to="/surgeon">
            Meet the Surgeon
          </Link>
        </li>
        <li className="secondary">
          <Link onClick={props.onToggleMenu} to="/blog">
            Healthy Living Blog
          </Link>
        </li>
        <li className="secondary">
          <Link onClick={props.onToggleMenu} to="/surgical-center">
            Surgery Center
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;
