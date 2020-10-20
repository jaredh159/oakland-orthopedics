import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import BlogPost from '../../components/BlogPost';

const Viral = () => {
  const data = useStaticQuery(graphql`
    query ViralBlogPost {
      vitamins: file(relativePath: { eq: "vitamins-us.jpg" }) {
        image: childImageSharp {
          fluid(maxWidth: 1475, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Helmet>
        <title>Preventing Viral Illness | Health Lifestyle Blog</title>
        <meta
          name="description"
          content="A good dose for vitamin C would be 1000IU three or four times daily. Also, Vitamin A 25 U (not beta carotene) and zinc 50mg are other natural therapies that are effective against viral illnesses. Beyond supplements, it is important to eat healthy with a diet free of refined sugar and flour as well as staying well hydrated."
        />
      </Helmet>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <BlogPost
              title="Preventing Viral Illness"
              image={data.vitamins.image}
              date="April 6, 2020"
            >
              <p>
                Recently, one of the physicians on national news referred to the health
                benefits of ultra violet light. Though he didn’t say it, he was indirectly
                referring to the increase in vitamin D that comes from sunshine on your
                skin. As an orthopedic surgeon I have long been aware of the necessity of
                high levels of vitamin D for good bone health.
              </p>
              <p>
                What I have also learned is that vitamin D is perhaps the most powerful
                booster of your immune system.<sup>1</sup> Recently I have read two
                studies that confirm that high levels of vitamin D will prevent flu better
                than a flu shot.<sup>2</sup>
                <sup>, 3</sup>
              </p>
              <p>
                Many studies suggest that about 70% of our population is deficient in
                blood levels of vitamin D (including even the Pittsburgh Steelers!)
                Therefore, I find it incredible that almost none of our many health
                experts has ever mentioned this extremely helpful preventive treatment.
              </p>
              <p>
                The standard recommended dose of vitamin D for adults is 5000IU daily. If
                you have not taken vitamin D before you will need a loading dose of
                20,000u daily for 5 days. The blood level of vitamin D needed to prevent
                flu is approximately 75 - 100ng/ml.
              </p>
              <p>
                In addition, almost everyone knows the vitamin C is also good for
                preventing and healing viral illnesses. A good dose for vitamin C would be
                1000IU three or four times daily. Also, Vitamin A 25 U (not beta carotene)
                and zinc 50mg are other natural therapies that are effective against viral
                illnesses. Beyond supplements, it is important to eat healthy with a diet
                free of refined sugar and flour as well as staying well hydrated.
              </p>
              <p>
                Also, as proven by the overwhelming statistics from China, smoking and
                tobacco use of any amount carries a MUCH higher rate of illness and death
                from the virus. I am not an "expert" in complementary medicine but I know
                people who are. Please consider these simple and safe measures to protect
                yourself and your family.
              </p>
              <ul style={{ listStyleType: `none`, fontSize: `80%` }}>
                <li>
                  <sup>1</sup> Michael Holick Ph.D, MD, The Vitamin D Solution{` `}
                </li>
                <li>
                  <sup>2</sup> Press Release - Oregon State University
                </li>
                <li>
                  <sup>3</sup> Aloia JF,Li-NgM.Correspondence Epidemial Infect
                  2007;12:1095-1096
                </li>
              </ul>
            </BlogPost>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Viral;
