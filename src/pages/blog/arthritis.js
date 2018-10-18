import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import BlogPost from '../../components/BlogPost'
import arthritis from '../../assets/images/arthritis-us.jpg'

const Arthritis = props => (
  <Layout>
    <Helmet>
      <title>Health Lifestyle Blog | Oakland County Orthopedic Medicine</title>
      <meta
        name="description"
        content="Almost everyone at some point in their life experiences arthritis pain and symptoms. Every joint in your body is covered with a layer of articular cartilage on each bone that faces one another. This cartilage can be very thin such as in the lower back joints or finger joints – or it can be extremely thick – measuring over 1/4 of an inch in your knee, hip or ankle. When it is normal, this cartilage is totally firm and smooth as glass. Arthritis occurs when this surface cartilage starts cracking and softening, causing chunks of it to break or come loose, eventually wearing away."
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <BlogPost
            title="Arthritis"
            image={arthritis}
            date="November 27, 2015"
          >
            <p>
              Almost everyone at some point in their life experiences arthritis
              pain and symptoms. Every joint in your body is covered with a
              layer of articular cartilage on each bone that faces one another.
              This cartilage can be very thin such as in the lower back joints
              or finger joints – or it can be extremely thick – measuring over
              1/4 of an inch in your knee, hip or ankle. When it is normal, this
              cartilage is totally firm and smooth as glass. Arthritis occurs
              when this surface cartilage starts cracking and softening, causing
              chunks of it to break or come loose, eventually wearing away.
            </p>
            <p>
              There are many things that can be done to help avoid the
              deterioration that occurs in articular cartilage. There is no
              question that over the counter glucosamine and chondroitin in
              adequate doses can be very effective to maintain the health of
              articular cartilage. Veterinarians were among the first to use
              this substance very effectively in dogs and horses, with dramatic
              results.
            </p>
            <p>
              Another very effective non-operative treatment for arthritis is
              “viscoelastic supplementation”, otherwise known as “chicken
              shots”. We know that nourishment for articular cartilage comes
              from the nutrients that are diffused from the lining of any joint
              called synovium into this lubricating substance within the joint
              called hyaluronic acid. This substance then transfers the
              nutrients directly to the surface cartilage as the joint is used
              and moved. It is for this reason that movement and exercise are
              one of the very effective ways at maintaining the health of your
              surface cartilage. It is now possible to have “booster shots” of
              this lubricant hyaluronic acid otherwise knows as viscoelastic
              supplementation in your knee.
            </p>
            <p>
              Arthritic symptoms become most significant when the surface
              cartilage is worn through to what is called “bone to bone”
              arthritis. At that point the symptoms usually escalate
              dramatically and become much more disabling. In major joints such
              as hip, knee, shoulder and ankle, the problem can be resolved with
              joint replacements. Once considered a modern miracle, it is now
              common to perform replacements for any of these major joints. The
              determining factor for a joint replacement is the persistence of
              pain and disability causing significant alteration in your
              lifestyle
            </p>
            <p>
              You should know that St. Joseph Mercy Oakland Joint Care Center
              (JCC) is a leader in the state of Michigan and is a true center of
              excellence. Our record of safety and quality and extremely low
              complications cannot be matched by and other hospitals in this
              area. This excellence is clearly documented by national rating
              systems that you can access on the Internet.
            </p>
            <p>
              The most important reason to come to St. Joseph Mercy Oakland
              Joint Care Center is the excellent nursing and physical therapy
              staff. While all of our orthopedic surgeons are among the best,
              our nurses and therapists are the most kind compassionate
              knowledgeable and skillful people you will find anywhere. Most of
              our patients go out of their way to give high praise for the
              exceptional care they have received at out Joint Care Center. We
              will get you back on your feet with less pain – and faster than
              you can imagine – with the best hospital care anywhere. If you
              give us a chance, we will not disappoint you.
            </p>
          </BlogPost>
        </div>
      </section>
    </div>
  </Layout>
)

export default Arthritis
