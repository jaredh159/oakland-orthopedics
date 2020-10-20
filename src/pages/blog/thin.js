import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import BlogPost from '../../components/BlogPost';

const Thin = () => {
  const data = useStaticQuery(graphql`
    query ThinBlogPost {
      salad: file(relativePath: { eq: "salad-us.jpg" }) {
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
        <title>
          Nothing Tastes As Good As It Feels To Be Thin | Healthy Lifestyle Blog
        </title>
        <meta
          name="description"
          content="Several years ago one of my patients made that statement to me and it has stuck with me ever since. It is such a true statement about health, but I would add that your heart, your spine, and your joints also depend on it. Everyone knows that diet and exercise is the key to weight loss, but what exactly does that mean? Here are a few practical tips that I have found very helpful in my life and for many patients over the years."
        />
      </Helmet>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <BlogPost
              title="Nothing Tastes As Good As It Feels To Be Thin"
              image={data.salad.image}
              date="April 24, 2013"
            >
              <p>
                Several years ago one of my patients made that statement to me and it has
                stuck with me ever since. It is such a true statement about health, but I
                would add that your heart, your spine, and your joints also depend on it.
                Everyone knows that diet and exercise is the key to weight loss, but what
                exactly does that mean? Here are a few practical tips that I have found
                very helpful in my life and for many patients over the years.
              </p>
              <p>
                Weight loss is a major part of your overall health, not just a cosmetic
                problem. Do not use the excuse that your physical condition, including
                arthritic joints limiting your ability to exercise, is the reason that you
                cannot avoid being overweight. Basically, if your exercise level is
                diminished for whatever reason, then your intake must be cut back
                accordingly. In order to lose weight, you must make it a priority
                everyday. You cannot manage what you do not measure; therefore, you should
                have an accurate bathroom scale, preferably a digital readout, that you
                check with every morning. That way, your activity and dietary intake for
                the day will be affected by that number.
              </p>
              <p>
                Where “diet” implies a temporary fix to a chronic problem, what you really
                need is a change in lifestyle. Your eating habits need to be modified in
                three ways: lower calories (smaller portions), lower fat, and minimize
                carbohydrates. Lowering calories requires approximately a 50% reduction in
                your average total intake per day. Lowering fat requires avoiding
                saturated fat (read food labels), and especially avoiding, obviously
                high-fat items such as bacon, sausage, cheese, ice cream, hot dogs, pizza,
                and snack foods. Lowering carbohydrates requires eliminating all bread and
                bread products (bagels, crackers, etc.), all pasta, all potatoes, all
                rice, and all sweets (pies, cakes, pastries, cookies, candy and soft
                drinks). Therefore, your daily food intake should consist of only: low fat
                meat, fish or chicken, vegetables, fruits, and salads. A daily mini-fast
                is often a good idea, skipping either breakfast, lunch, or dinner. If you
                want to go for optimal health, you might try a “Whole Food Plant Based
                Diet” which eliminates all animal protein, all dairy, and all refined
                foods. Check out “vegan diet” on the internet.
              </p>
              <p>
                Exercise is essential to any weight loss program. Ideally, 60 minutes of
                exercise per day should be your goal, but 30 minutes minimum. A brisk walk
                outdoors or on a treadmill, (approximately 3 m.p.h.), riding a bike, or
                using any kind of low impact equipment at a fitness center (such as stair
                machine, ski machine, elliptical machine, exercise bike and swimming) are
                all beneficial ways to stay active. Divided doses of exercise in two
                half-hour segments are fine – any exercise that you do is good. Avoid
                taking elevators whenever possible. Take stairs even if you stop on every
                floor or two to catch your breath. For people with arthritic hips or
                knees, an exercise bike is still your best option, where your body weight
                is supported, and your legs are just exercising without as much stress.
              </p>
              <p>
                Hopefully, these suggestions are helpful to you. My wife and I have been
                following this program for years with good success
              </p>
            </BlogPost>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Thin;
