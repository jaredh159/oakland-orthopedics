import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>Not Found</h1>
          <p>
            Sorry, we couldn't find what you were looking for. Maybe try clicking on the
            menu tab at the top right of the screen or going to the{` `}
            <Link to="/">home page.</Link>
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
