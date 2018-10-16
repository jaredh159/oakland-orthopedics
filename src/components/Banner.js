import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Oakland Orthopedic Partners</h1>
      </header>
      <div className="content">
        <p>
          Serving metro Detroit with exceptional surgical and <br />
          rehabilitative care for all your Orthopedic needs.
          <br />
          <br />
        </p>
        <ul className="actions">
          <li>
            {/* <span className="button special scrolly"><a href="tel:2488586951"><i class="fa fa-phone" /> (248) 858-6951</a></span> */}
            {/* <span className="button scrolly"><a href="">Map &amp; Contact Info</a></span> */}

            <a href="#contact" className="button next scrolly">
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
