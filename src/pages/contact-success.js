import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Success = props => (
  <Layout>
    <Helmet>
      <title>Message received | Oakland Orthopedic Partners</title>
      <meta
        name="description"
        content="Helping patients in Waterford MI, Clarkston MI, White Lake MI, Rochester MI and more with their Orthopedic needs."
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1 className="better-major">Thanks for reaching out!</h1>
          <p>
            Your message was received and will be responded to as soon as
            possible. Thanks for your patience!
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success
