import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import pointToChart from '../assets/images/small/pointing-to-chart.jpg'
import salad from '../assets/images/small/salad-us.jpg'
import xray from '../assets/images/small/xray.jpg'
import patient from '../assets/images/small/patient-bracelet-us.jpg'
import drHenderson from '../assets/images/small/dr-henderson.jpg'
import surgeryCenter from '../assets/images/small/surgery-center.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Oakland Orthopedic Partners | Serving Waterford, Clarkston, White Lake, &amp; all of Metro Detroit &amp; Southeast Michigan"
          meta={[
            {
              name: 'description',
              content:
                'Decades of experience as proven experts in Orthopedics and musculoskeletal care. Serving Waterford, Clarkston, White Lake, Rochester, Bloomfield, and all of the greater Metro Detroit area and Southeast Michigan.',
            },
            {
              name: 'keywords',
              content:
                'Waterford, Clarkston, White Lake, Rochester, Bloomfield, West Bloomfield, Birmingham, Michigan, MI, Detroit, shoulder, rotator cuff, dislocation, arthritis, knee, total knee, total hip, bursitis, fracture, spine, scoliosis, pinched nerves, physical therapy',
            },
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
                <h3>Orthopedic Surgeon</h3>
                <p>Meet Dr. Bruce Henderson</p>
              </header>
              <Link to="/surgeon" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${salad})` }}>
              <header className="major">
                <h3>Healthy Living Blog</h3>
                <p>Blog posts from Dr. Bruce Henderson</p>
              </header>
              <Link to="/blog" className="link primary" />
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
