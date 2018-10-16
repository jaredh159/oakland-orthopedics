import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pointToChart from '../assets/images/pointing-to-chart.jpg'
import physicalTherapy from '../assets/images/physical-therapy.jpg'
import xray from '../assets/images/xray.jpg'
import patient from '../assets/images/patient-bracelet-us.jpg'
import drHenderson from '../assets/images/dr-henderson.jpg'
import surgeryCenter from '../assets/images/surgery-center.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Gatsby Starter - Forty"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pointToChart})` }}>
              <header className="major">
                <h3>About Us</h3>
                <p>Why Choose Oakland Orthopedic?</p>
              </header>
              <Link to="/about" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${xray})` }}>
              <header className="major">
                <h3>Services We Offer</h3>
                <p>Get the care you need, when you need it</p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${patient})` }}>
              <header className="major">
                <h3>Patient Information</h3>
                <p>Patient Forms, Insurance Info, &amp; Surgery Guides</p>
              </header>
              <Link to="/patient-information" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${drHenderson})` }}>
              <header className="major">
                <h3>Staff</h3>
                <p>Meet Dr. Bruce Henderson</p>
              </header>
              <Link to="/staff" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${physicalTherapy})` }}>
              <header className="major">
                <h3>Physical Therapy</h3>
                <p>Superb post-injury and surgical rehab</p>
              </header>
              <Link to="/physical-therapy" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${surgeryCenter})` }}>
              <header className="major">
                <h3>Surgical Center</h3>
                <p>Find out about our state-of-the-art surgical care center</p>
              </header>
              <Link to="/surgical-center" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Our Location:</h2>
              </header>
              <iframe
                title="Google Map to our Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.121960181598!2d-83.27878838453555!3d42.616369379170486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824bf123b6b18e3%3A0xc29c8a0926eb2720!2sOakland+Orthopedic+Partners!5e0!3m2!1sen!2sus!4v1451415505563&output=embed"
                width="100%"
                height="550"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
