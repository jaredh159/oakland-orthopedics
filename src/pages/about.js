import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import bruceWithPatient from '../assets/images/dr-henderson-with-female-patient.jpg'
import exterior from '../assets/images/office-exterior.jpg'
import kneePain from '../assets/images/knee-pain-us.jpg'

const About = props => (
  <Layout>
    <Helmet>
      <title>
        About Oakland Orthopedic Partners | Auburn Hills MI, Waterford MI,
        Sylvan Lake MI
      </title>
      <meta
        name="description"
        content="Helping patients in Pontiac MI, Bloomfield MI, Farmington Hills MI, Troy MI and more with their Orthopedic needs."
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About Oakland Orthopedic Partners</h1>
          </header>
          <span className="image main">
            <img src={bruceWithPatient} alt="" />
          </span>

          <h2>What is Orthopedic Medicine</h2>
          <p>
            Orthopedics is the branch of medicine that specializes in the
            Musculoskeletal System. Orthopedic surgeons implement both surgical
            and nonsurgical expertise to treat musculoskeletal trauma, sports
            injuries, degenerative diseases, infections, tumors, and congenital
            disorders.
          </p>

          <hr className="major" />

          <h2>Why Choose Us</h2>
          <p>
            <span className="image right">
              <img src={kneePain} alt="" style={{ maxWidth: 250 }} />
            </span>
            At Oakland Orthopedic Partners, we are a family friendly partnership
            committed to actively improving our patients quality of life. Our
            Orthopedic Surgeons are Board Certified by the American Board of
            Orthopedic Surgery and well equipped to handle any and all of your
            orthopedic needs. When you visit our practice, you'll meet a team of
            professionals that includes doctors, medical assistants, and
            administrative staff who are focused on you and your care.
          </p>
          <p>
            While some of our patients problems care be treated nonoperatively,
            our Orthopedic surgeons are trained in the latest surgical
            techniques and can provide the highest quality treatments for our
            patients. Many of these techniques allow us to perform procedures
            with smaller incisions and minimally invasive surgery leading to
            shorter hospital stays, minimal pain and quicker recoveries.
          </p>
          <p>
            <span className="image left">
              <img src={exterior} alt="" style={{ maxWidth: 150 }} />
            </span>
            Because each patient's needs are unique, our dedicated in-house
            physical therapy department works in concert with us to provide a
            carefully customized program of rehabilitation to ensure that your
            specific needs are being met.
          </p>
          <p>
            Our office is located in the St. Joseph Mercy Hospital Medical
            Building in Pontiac, Michigan. We are proud to be affiliated with
            St. Joseph Mercy Oakland Hospital, a flagship hospital of the
            Trinity corporation. Among it’s many national awards, St. Joe’s
            orthopedics program has been consistently recognized for excellence
            and superior outcomes in orthopedic surgery and joint replacement.
            <br style={{ clear: 'both' }} />
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
