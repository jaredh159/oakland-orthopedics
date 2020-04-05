import React from 'react'
import topDoctor from '../assets/images/top-doctor.jpg'

const Banner = props => (
  <section id="banner" className="major" style={{ position: 'relative' }}>
    <div className="inner">
      <header className="major">
        <h1>Oakland Orthopedic Partners</h1>
      </header>
      <div className="content">
        <p>
          Serving metro Detroit with exceptional surgical and <br />
          rehabilitative care for all your Orthopedic needs.
        </p>
        <ul className="actions">
          <li>
            <a href="#contact" className="button next scrolly">
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </div>

    <img
      src={topDoctor}
      className="top-doctor"
      alt=""
      style={{
        position: 'absolute',
        maxWidth: 170,
        height: 'auto',
        right: 30,
        bottom: 30,
        zIndex: 5555555,
        opacity: 0.75,
      }}
    />
  </section>
)

export default Banner
