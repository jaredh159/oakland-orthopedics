import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const TelemedicinePage = () => {
  return (
    <Layout path="/telemedicine">
      <Helmet>
        <title>Services We Offer | West Bloomfield Orthopedic Surgeon</title>
        <meta
          name="description"
          content="Serving metro Detroit: joint replacements, sprains &amp; strains, total hip, total knee, pain management, spine pain, back pain, x-rays, bone density, carpal tunnel syndrome, and more!"
        />
      </Helmet>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <h1 className="better-major">Telemedicine</h1>
            <p>
              Due to the <b>COVID-19</b> shutdown we are now offering the option of a{` `}
              <i>telemedicine appointment</i> using the <b>FaceTime</b> app on any Apple
              iPhone, iPad, or Mac. Please call <a href="tel:248-3340524">248-334-0524</a>
              , leave a message with our answering service, and one of our staff will get
              back to you promptly.
            </p>
            <p>
              Telemedicine appointments are available both for <b>new</b> <i>and</i>
              {` `}
              <b>established patients</b>.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TelemedicinePage;
