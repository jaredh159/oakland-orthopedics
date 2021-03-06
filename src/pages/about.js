import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutPage {
      drWithPatient: file(relativePath: { eq: "dr-henderson-with-female-patient.jpg" }) {
        image: childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      kneePain: file(relativePath: { eq: "knee-pain-us.jpg" }) {
        image: childImageSharp {
          fixed(width: 250, quality: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      office: file(relativePath: { eq: "office-exterior.jpg" }) {
        image: childImageSharp {
          fixed(width: 150, quality: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Helmet>
        <title>
          About Oakland Orthopedic Partners | Auburn Hills MI, Waterford MI, Sylvan Lake
          MI
        </title>
        <meta
          name="description"
          content="Helping patients in Waterford MI, Clarkston MI, White Lake MI, Rochester MI and more with their Orthopedic needs."
        />
      </Helmet>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <h1 className="better-major">About Oakland Orthopedic Partners</h1>
            <div className="image main" style={{ maxWidth: 800 }}>
              <Image
                fluid={data.drWithPatient.image.fluid}
                alt="Dr. Bruce Henderson treating a patient."
              />
            </div>
            <h2>What is Orthopedic Medicine</h2>
            <p>
              Orthopedics is the branch of medicine that specializes in the
              Musculoskeletal System. Orthopedic surgeons implement both surgical and
              nonsurgical expertise to treat musculoskeletal trauma, sports injuries,
              degenerative diseases, infections, tumors, and congenital disorders.
            </p>
            <hr className="major" />
            <h2>Why Choose Us</h2>
            <p>
              <span className="knee-right image right">
                <Image fixed={data.kneePain.image.fixed} />
              </span>
              At Oakland Orthopedic Partners, we are a family friendly partnership
              committed to actively improving our patients quality of life. Dr. Bruce
              Henderson is Board Certified by the American Board of Orthopedic Surgery and
              well equipped to handle any and all of your orthopedic needs. When you visit
              our practice, you'll meet a team of professionals that includes Dr.
              Henderson, medical assistants, and administrative staff who are focused on
              you and your care.
            </p>
            <p>
              <span className="office-left image left">
                <Image
                  fixed={data.office.image.fixed}
                  alt="Exterior view of Oakland Orthopedic office building."
                />
              </span>
              While some of our patients problems care be treated nonoperatively, Dr.
              Henderson is trained in the latest surgical techniques and can provide the
              highest quality treatments for our patients. Many of these techniques allow
              us to perform procedures with smaller incisions and minimally invasive
              surgery leading to shorter hospital stays, minimal pain and quicker
              recoveries.
            </p>
            <p>
              Our office is located in the St. Joseph Mercy Hospital Medical Building in
              Pontiac, Michigan. We are proud to be affiliated with St. Joseph Mercy
              Oakland Hospital, a flagship hospital of the Trinity corporation. Among it’s
              many national awards, St. Joe’s orthopedics program has been consistently
              recognized for excellence and superior outcomes in orthopedic surgery and
              joint replacement. Our convenient location on Woodward Avenue allows us to
              serve patients from throughout Southeast Michigan and beyond, including
              Waterford, Clarkston, Rochester, Bloomfield, White Lake, Farmington,
              Birmingham, and more.
              <br style={{ clear: `both` }} />
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
