import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import center from '../assets/images/surgery-center.jpg'

const About = props => (
  <Layout>
    <Helmet>
      <title>
        Surgical Care Center | Waterford MI Orthopedic Surgery, Total Hip &amp;
        Total Knee
      </title>
      <meta
        name="description"
        content="Oakland Orthopedics is proud to be affiliated with the Waterford Surgery Center,
      developed by local physicians in partnership with St Joseph Mercy
      Hospital to create a state of the art surgical care center."
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Surgical Care Center</h1>
          </header>

          <p>
            <span className="image right">
              <img src={center} alt="" />
            </span>
            We are proud to be affiliated with the Waterford Surgery Center,
            developed by local physicians in partnership with St Joseph Mercy
            Hospital to create a state of the art surgical care center. Our
            surgeons perform most of our elective outpatient surgeries and
            procedures there. Routinely our patients return to our office
            exuberantly pleased with the care they received at the Waterford
            Surgery Center.
          </p>

          <h3>Waterford Surgery Center</h3>
          <p>
            5220 Highland Road Suite 100 <br />
            Waterford, Michigan 48327 <br />
            248-886-5555
          </p>

          <p>
            For more information visit{' '}
            <a href="http://www.waterfordsurgicalcenter.com">their website!</a>
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
