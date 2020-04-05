import React from 'react'
import Helmet from 'react-helmet'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../../components/layout'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogPage {
      arthritis: file(relativePath: { eq: "arthritis-us.jpg" }) {
        image: childImageSharp {
          fluid(maxWidth: 365, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      salad: file(relativePath: { eq: "salad-us.jpg" }) {
        image: childImageSharp {
          fluid(maxWidth: 365, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <title>
          Health Lifestyle Blog | Oakland County Orthopedic Medicine
        </title>
        <meta
          name="description"
          content="Healthy Lifestyle Blog from Oakland Orthopedics. Serving Farmington Hills MI, Southfield MI, Pontiac MI, Bloomfield MI, and all of metro Detroit and Southeast Michigan"
        />
      </Helmet>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <h1 className="better-major">Healthy Lifestyle Blog</h1>
            <Excerpt
              title="Arthritis"
              image={data.arthritis.image}
              date="November 27, 2015"
              slug="arthritis"
            >
              Almost everyone at some point in their life experiences arthritis
              pain and symptoms. Every joint in your body is covered with a
              layer of articular cartilage on each bone that faces one another.
              This cartilage can be very thin such as in the lower back joints
              or finger joints – or it can be extremely thick – measuring over
              1/4 of an inch in your knee, hip or ankle. When it is normal, this
              cartilage is totally firm and smooth as glass. Arthritis occurs
              when this surface cartilage starts cracking and softening, causing
              chunks of it to break or come loose, eventually wearing away.
            </Excerpt>
            <hr className="major" />
            <Excerpt
              title="Nothing Tastes As Good As It Feels To Be Thin"
              image={data.salad.image}
              date="April 24, 2013"
              slug="thin"
            >
              Several years ago one of my patients made that statement to me and
              it has stuck with me ever since. It is such a true statement about
              health, but I would add that your heart, your spine, and your
              joints also depend on it. Everyone knows that diet and exercise is
              the key to weight loss, but what exactly does that mean? Here are
              a few practical tips that I have found very helpful in my life and
              for many patients over the years.
            </Excerpt>
          </div>
        </section>
      </div>
    </Layout>
  )
}

const Excerpt = ({ title, image, children, date, slug }) => (
  <div className="blog-excerpt">
    <h2 className="blog-excerpt__title">
      <Link to={`/blog/${slug}`}>{title}</Link>
    </h2>
    <p className="blog-meta">
      <span class="date">
        <i className="fa fa-calendar" /> {date}
      </span>
      <span class="sep">|</span>
      <span class="author">
        <i className="fa fa-user-md" /> Dr. Bruce Henderson
      </span>
    </p>
    <p>
      <div className="image left" style={{ width: 365, maxWidth: '100%' }}>
        <Image fluid={image.fluid} />
      </div>
      {children}
    </p>
    <Link to={`/blog/${slug}`} className="button next">
      Read More
    </Link>
  </div>
)

export default Blog
