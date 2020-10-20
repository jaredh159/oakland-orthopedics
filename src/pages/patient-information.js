import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import newPatientPacket from '../assets/pdfs/new-patient-packet.pdf';
import registrationInsurance from '../assets/pdfs/registration-and-insurance.pdf';
import privacyDisclosure from '../assets/pdfs/privacy-policy-and-disclosure.pdf';
import electronicPrescriptionProgram from '../assets/pdfs/electronic-prescription-program.pdf';
import totalHip from '../assets/pdfs/total-hip-replacement.pdf';
import arthroscopicSurgery from '../assets/pdfs/arthroscopic-surgery.pdf';
import totalKnee from '../assets/pdfs/total-knee-replacement.pdf';
import jointCareCenter from '../assets/pdfs/joint-care-center.pdf';
import patientGuide from '../assets/pdfs/patient-guide.pdf';
import cpm from '../assets/pdfs/continuous-passive-motion-for-knee.pdf';

const Pdf = ({ url, title }) => (
  <>
    <i className="fa fa-file-pdf-o" style={{ marginRight: `0.65em` }} />
    <a href={url}>{title}</a>
  </>
);

const About = () => (
  <Layout>
    <Helmet>
      <title>
        Patient Information | PDFs for Patient Forms, Surgery Guides, and Insurance
        Accepted
      </title>
      <meta
        name="description"
        content="Serving Waterford MI, White Lake MI, and all of SE Michigan, Oakland Orthopedics almost certainly accepts your health insurance provider, including Blue Cross/Blue Shield, Priority, Cofinity, and many more!"
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1 className="better-major">Patient Information</h1>

          <h2>Patient Forms</h2>
          <p>
            To ensure prompt treatment, please download the following patient form forms,
            fill them out completely, and bring them with you to your first appointment.
          </p>
          <ul>
            <li>
              <Pdf url={newPatientPacket} title="Complete New Patient Packet PDF" />
            </li>
            <li>
              <Pdf url={registrationInsurance} title="Registration and Insurance PDF" />
            </li>
            <li>
              <Pdf url={privacyDisclosure} title="Privacy Policy & Disclosure PDF" />
            </li>
            <li>
              <Pdf
                url={electronicPrescriptionProgram}
                title="Electronic Prescription Program PDF"
              />
            </li>
          </ul>

          <hr className="major" />

          <h2>Patient Guides for Surgery</h2>
          <ul>
            <li>
              <Pdf url={totalHip} title="Total Hip Replacement" />
            </li>
            <li>
              <Pdf url={arthroscopicSurgery} title="Arthroscopic Surgery" />
            </li>
            <li>
              <Pdf url={totalKnee} title="Total Knee Replacement" />
            </li>
            <li>
              <Pdf
                url={jointCareCenter}
                title="Joint Care Center, A New Approach to Joint Replacement"
              />
            </li>
            <li>
              <Pdf url={patientGuide} title="Patient Guide" />
            </li>
            <li>
              <Pdf url={cpm} title="Continuous Passive Motion for the Knee" />
            </li>
          </ul>

          <hr className="major" />

          <h2>Orthopedic Education</h2>

          <p>
            <a href="https://orthoinfo.org">Click here</a> to find hundreds of articles,
            videos, and resources to help manage your bone and joint health.
          </p>

          <hr className="major" />

          <h2>Insurance Information</h2>
          <p>Health Insurance &amp; Policies We Accept Include:</p>
          <ul>
            <li>Aetna</li>
            <li>Alliance Health &amp; Life</li>
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
);

export default About;
