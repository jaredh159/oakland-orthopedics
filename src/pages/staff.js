import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import drHenderson from '../assets/images/dr-henderson-by-xrays.jpg'
import topDoctor from '../assets/images/top-doctor.jpg'

const About = props => (
  <Layout>
    <Helmet>
      <title>
        Dr. Bruce Henderson | Troy MI Orthopedic Total Hip, Total Knee
      </title>
      <meta
        name="description"
        content="Dr. Bruce Henderson, MD has been helping patients in Clarkston MI, White Lake MI, Waterford MI, Birmingham MI -- all over metro Detroit -- for nearly 40 years."
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1 className="better-major">Our Physicians and Staff</h1>
          <span className="image main">
            <img src={drHenderson} alt="" />
          </span>

          <h2>Our Physicians</h2>
          <h3>Bruce Henderson, M.D.</h3>
          <p>
            <span className="image right">
              <img src={topDoctor} alt="" style={{ maxWidth: 315 }} />
            </span>
            As a Board Certified Orthopedic Surgeon and fellow in the academy of
            orthopedic surgeons, I have been fortunate to help my patients for
            over 35 years. It is my belief that we were designed by our Creator
            to have a marvelous and intricate musculoskeletal system that can
            function and even restore itself with proper self care and, when
            necessary, with the help of orthopedic treatment. I believe it is my
            job to help guide you through that process to maximize the
            restorative powers that He has given us. This is my primary goal.
          </p>
          <p>
            One of the most rewarding parts of orthopedic surgery is the ability
            to identify and define precisely what is causing the pain or
            symptoms of each patient as a problem well defined is already
            three-quarters solved. In most cases, this can be accomplished in
            the short time of an office visit and an x-ray, however, further
            sophisticated testing such as MRI and CT scans may be necessary to
            confirm the diagnosis or give guidance for possible surgery.
          </p>
          <p>
            I have been working in Orthopedic Surgery for over 35 years. While
            the majority of patients problems can be treated nonoperatively,
            when necessary, orthopedic surgery often can literally fix and
            restore the problem you may have. It is a blessing for me to see the
            remarkable improvement that orthopedic procedures can provide for my
            patients. My specialty interest is helping people with back pain,
            spinal problems, most often with nonoperative treatment.
          </p>
          <h3>Some of the common procedures I perform are:</h3>
          <ul>
            <li>Total knee replacement</li>
            <li>Total hip replacement</li>
            <li>Total shoulder replacement</li>
            <li>Knee arthroscopy for torn meniscus cartilage and arthritis</li>
            <li>Open rotator cuff repair</li>
            <li>
              Open and closed treatment of fractures of any bone, especially hip
            </li>
            <li>
              Arthroscopic anterior cruciate ligament reconstruction (ACL).
            </li>
            <li>
              Minimally invasive spine surgery for relief of spinal stenosis and
              pinched nerves
            </li>
            <li>
              Management and Treatment of osteoporosis with proper supplements
              and prescription medicines
            </li>
            <li>
              Kyphoplasty: minimally invasive cure for painful vertebral
              compression fractures
            </li>
            <li>
              Pediatric orthopedics including congenital hip dislocation,
              clubfoot, slipped epiphysis and fractures
            </li>
            <li>
              Conservative and Operative treatment of Carpal Tunnel Syndrome
            </li>
            <li>
              Accurate diagnosis and nonoperative treatment of any
              musculoskeletal problem
            </li>
          </ul>

          <hr className="major" />

          <h2>Our Staff</h2>
          <p>
            At Oakland Orthopedic Partners, you will be welcomed by our friendly
            administrative staff who are available to answer your questions
            regarding: scheduling appointments, patient billing, managed care
            specialists, and any other matters you wish to discuss.
          </p>
          <p>
            From there, our highly trained orthopedic medical assistants and
            physical therapists will provide you with the highest quality of
            care.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
