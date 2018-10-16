import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby';

import bruceWithPatient from '../assets/images/dr-henderson-with-female-patient.jpg'
import exterior from '../assets/images/office-exterior.jpg'
import kneePain from '../assets/images/knee-pain-us.jpg'
import bracelet from '../assets/images/patient-bracelet-us.jpg'

const Pdf = ({ url, title }) => (
  <>
    <i className="fa fa-file-pdf-o" style={{ marginRight: '0.65em'}} />
    <Link to={url}>{title}</Link>
  </>
)

const About = (props) => (
    <Layout>
        <Helmet>
            <title>Patient Information</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">

                  <header className="major">
                      <h1>Patient Information</h1>
                  </header>

                    <h2>Patient Forms</h2>
                    <p>
                      To ensure prompt treatment, please download the following patient form forms, fill them out completely, and bring them with you to your first appointment.
                    </p>
                    <ul>
                      <li><Pdf url="lol" title="Complete New Patient Packet PDF" /></li>
                      <li><Pdf url="lol" title="Registration and Insurancd PDF" /></li>
                      <li><Pdf url="lol" title="Privacy Policy & Disclosure PDF" /></li>
                      <li><Pdf url="lol" title="Electronic Prescription Program PDF" /></li>
                    </ul>

  <hr className="major" />

  <h2>Patient Guides for Surgery</h2>
      <ul>
        <li><Pdf url={`lol`} title="Total Hip Replacement" /></li>
        <li><Pdf url={`lol`} title="Arthroscopic Surgery" /></li>
        <li><Pdf url={`lol`} title="Total Knee Replacement" /></li>
        <li><Pdf url={`lol`} title="Joint Care Center, A New Approach to Joint Replacment" /></li>
        <li><Pdf url={`lol`} title="Patient Guide" /></li>
        <li><Pdf url={`lol`} title="Continuous Passive Motion for the Knee" /></li>
      </ul>

      <hr className="major" />

      <h2>Insurance Information</h2>
      <p>Health Insurance &amp; Policies We Accept Include:</p>
      <ul>
        <li>Aetna</li>
        <li>Alliance Health & Life</li>
        <li>Alliance Medicare Pro</li>
        <li>Beech Street</li>
        <li>Blue Cross Blue Shield (all)</li>
        <li>Blue Care Network HMO</li>
        <li>BCN Advantage (Medicare)</li>
        <li>Cigna</li>
        <li>Cofinity / PPOM</li>
        <li>Great Lakes HMO (OPNS)</li>
        <li>HAP HMO</li>
        <li>HAP PPO</li>
        <li>HAP Senior Plus</li>
        <li>Health Plus HMO</li>
        <li>Health Plus PPO</li>
        <li>Humana Medicare</li>
        <li>McLaren PPO</li>
        <li>Medicare</li>
        <li>Medicare Advantage</li>
        <li>Medicare Plus Blue</li>
        <li>Molina – Medicare Only</li>
        <li>Priority Health PPO/HMO</li>
        <li>PHCS</li>
        <li>Total Healthcare</li>
        <li>Tricare & Tricare For Life</li>
        <li>United Healthcare</li>
      </ul>

                </div>
            </section>
        </div>

    </Layout>
)

export default About
