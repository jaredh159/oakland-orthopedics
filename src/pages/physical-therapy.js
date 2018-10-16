import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import therapy from '../assets/images/physical-therapy.jpg'

const About = props => (
  <Layout>
    <Helmet>
      <title>Physical Therapy</title>
      <meta name="description" content="About Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Physical Therapy</h1>
          </header>

          <p>
            <span className="image left">
              <img src={therapy} alt="" />
            </span>
            Physical therapy and rehabilitation is an essential part of the
            recovery process for those suffering from orthopedic issues.
            Balance, flexibility, strength, coordination, conditioning and
            safety are important goals of the restorative process. In addition,
            many acute, subacute and chronic issues, such as tendonitis,
            bursitis and spinal problems, can also benefit from undergoing
            individualized physical therapy.
          </p>
          <p>
            It is important to remember that the start of a good physical
            therapy experience begins with an accurate diagnosis. For this
            reason, all of the orthopedic surgeons at Oakland Orthopedic
            Partners fully inform our physical therapy staff of the specific
            diagnosis and special requirements concerning each patient,
            providing them with highly focused, personalized treatment.
          </p>
          <p>
            Our physical therapy staff is second to none and will always provide
            you with individual attention. They will work personally with you to
            achieve optimum results following an injury or surgery and to
            develop a plan that is tailored specifically to you.
          </p>
          <p>
            We strive to ensure superb post-injury and surgical outcomes for all
            patients by providing outstanding physical therapy, comprehensive
            personalized education and continuing post-therapy support. Our
            skilled and friendly staff at Oakland Orthopedic Partners looks
            forward to providing you with the best Physical Therapy care and
            service in Oakland County.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
