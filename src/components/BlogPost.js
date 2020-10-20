import * as React from 'react';
import Image from 'gatsby-image';

const BlogPost = ({ title, image, children, date }) => (
  <article className="blog-post">
    <h1 className="blog-post__title better-major">{title}</h1>
    <p className="blog-meta">
      <span class="date">
        <i className="fa fa-calendar" /> {date}
      </span>
      <span class="sep">|</span>
      <span class="author">
        <i className="fa fa-user-md" /> Dr. Bruce Henderson
      </span>
    </p>

    <span className="image main">
      <Image fluid={image.fluid} />
    </span>

    {children}
  </article>
);

export default BlogPost;
