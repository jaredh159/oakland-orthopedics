import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Service = ({ title, children }) => (
  <div className="col-4">
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
)

const Services = props => {
  const data = useStaticQuery(graphql`
    query ServicesPage {
      kneePain: file(relativePath: { eq: "knee-pain-us.jpg" }) {
        image: childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
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
            <h1 className="better-major">Services We Offer</h1>
            <span className="image main">
              <Image fluid={data.kneePain.image.fluid} />
            </span>
            <div className="grid-wrapper">
              <Service title="Joint Replacement Surgery">
                <p>
                  Joint replacement surgery involves removing the damaged parts
                  of a joint and putting in a new one. Hip and shoulder
                  replacements involve installing a new ball while resurfacing
                  the socket. A knee replacement involves a perfect resurfacing
                  of the end of the femur, the top of the tibia, and inside of
                  the patella (knee cap). A total joint replacement will relieve
                  pain and stiffness which helps you to move and feel much
                  better. Usually this leads to a dramatic improvement in how
                  you live, work, and play.
                </p>
              </Service>
              <Service title="Sprains &amp; Strains">
                <p>
                  A sprain is a stretch and/or tear of a ligament. One or more
                  ligaments can be injured at the same time. The severity of the
                  injury will depend on the extent of injury (whether a tear is
                  partial or complete) and the number of ligaments involved. A
                  strain is an injury to either a muscle or a tendon. Depending
                  on the severity of the injury, a strain may be a simple
                  overstretch of the muscle or tendon, or it can result from a
                  partial or complete tear. Only an Orthopedic surgeon can
                  accurately diagnose a partial versus a complete tear.
                </p>
              </Service>
              <Service title="X-Rays">
                <p>
                  As everyone knows, one of the basic mainstays of orthopedic
                  diagnosis is the reading of radiographs, otherwise known as
                  x-rays. Unlike many facilities, our protocols allow us to take
                  just the right x-ray without any extra or unnecessary films.
                  In this regard, we often use larger films so that more
                  information is on one picture, allowing us to get the maximum
                  information from each image, making extra films often
                  unnecessary. As you know, x-rays are painless and simply
                  require that you remain still while the image is taken. If you
                  have had a recent x-ray or other imaging study regarding what
                  is troubling you, we invite you to bring it to your
                  appointment.
                </p>
              </Service>
              <Service title="Pain Management">
                <p>
                  Pain is your body’s natural mechanism telling you that
                  something is wrong. As most practitioners are not experts in
                  bone and joint problems, it is important that you are
                  evaluated by an orthopedic surgeon as soon as possible so that
                  the cause of musculoskeletal pain can be diagnosed,
                  successfully treated, and resolved. If this is done, the need
                  for narcotic pain medicines can be minimized or completely
                  avoided.
                </p>
                <p>
                  Your should know that using narcotic pain medicines (Norco,
                  Vicodin, Percocet, Dilaudid, etc) very quickly leads to a
                  condition called hyperalgesia. This is where your natural pain
                  tolerance is decreased causing you to feel much more pain than
                  you should. It tends to set a new norm where your body expects
                  to have a dose of narcotic just to feel normal. The net result
                  is that for the rest of your life every problem with your body
                  will hurt more than it should. Sadly this leads to chronic
                  pain syndromes which often lead to long term disability.
                  Please don’t let you or your friends and family fall into this
                  common trap.
                </p>
              </Service>
              <Service title="Carpal Tunnel Syndrome">
                <p>
                  Carpal tunnel syndrome occurs when the median nerve, which
                  runs from the forearm into the palm of the hand, becomes
                  pressed or squeezed at the wrist. The median nerve controls
                  sensations to the palm side of the thumb and fingers (although
                  not the little finger), as well as impulses to some small
                  muscles in the hand that allow the fingers and thumb to move.
                  The carpal tunnel – a narrow, rigid passageway of ligament and
                  bones at the base of the hand – houses the median nerve and
                  tendons. Sometimes, thickening from irritated tendons or other
                  swelling narrows the tunnel and causes the median nerve to be
                  compressed. The result may be pain, weakness, or numbness in
                  the hand and wrist, almost always worst at night. Most cases
                  of carpal tunnel syndrome can be treated with a simple
                  cortisone shot into the palm. If that doesn’t work or doesn’t
                  last, then a minor outpatient surgery can provide a permanent
                  cure.
                </p>
              </Service>
              <Service title="Sports Injuries">
                <p>
                  The term sports injury refers to the kinds of injuries that
                  most commonly occur during sports or exercise. Some sports
                  injuries result from accidents; others are due to overuse,
                  improper equipment, lack of conditioning, or insufficient
                  warmup and stretching. Although virtually any part of your
                  body can be injured during sports or exercise, the term is
                  usually reserved for injuries that involve the musculoskeletal
                  system, which includes the muscles, bones, and associated
                  tissues like cartilage. The most common sports injuries
                  include:
                </p>
                <ul>
                  <li>Dislocated joints</li>
                  <li>Muscle Sprains and Strains</li>
                  <li>Ligament tears</li>
                  <li>Tendon tears</li>
                  <li>Fractured bones</li>
                  <li>Tendonitis</li>
                  <li>Shin splints</li>
                  <li>Torn cartilage</li>
                </ul>
              </Service>
              <Service title="Bone Density">
                <p>
                  Accurate measurements of bone density is often neglected, but
                  extremely important, diagnostic tool. Thinning of the bones,
                  known as osteoporosis, is a condition that affects all of us
                  as the years go by.
                </p>
                <p>
                  Whereas most facilities will obtain only two or three density
                  readings, we routinely perform twenty to thirty separate
                  measurements. Especially important is the lateral view of the
                  lumbar spine, which measures specifically the density of the
                  spinal vertebral bodies. In most cases, the lowest bone
                  density of anyone’s entire skeleton will be the spinal
                  vertebrae. It is for this reason that vertebral compression
                  fractures are an extremely common problem often resulting in
                  pain, deformity, disability and often severely altered
                  lifestyle. Almost no other imaging center routinely measures
                  the vertebral body from the lateral view except for St. Joseph
                  Mercy Oakland. We recommend that all bone density patients
                  follow up with Dr. Henderson for a thorough review of the
                  results of the density testing with a customized plan to
                  prevent or perhaps even reverse future osteoporosis.
                </p>
              </Service>
              <Service title="Back Pain & Injuries">
                <p>
                  Almost everyone experiences a back problem sometime in their
                  life. There are many different causes that may lead to back
                  pain, hip pain, weakness, numbness, or sciatic pain radiating
                  down the leg. It is essential that the proper diagnosis is
                  made first so that proper treatment can be initiated.
                  Especially when it comes to problems of the spine, a problem
                  well defined is three quarters solved. Unfortunately, few
                  practitioners are knowledgeable about properly diagnosing
                  spinal problems.
                </p>
                <p>
                  At Oakland orthopedic Partners, we are experts in the proper
                  diagnosis of spine and back problems from the neck down to the
                  tailbone. This allows us to treat the problem properly, most
                  often with non operative means. You should know that almost
                  all back pain comes from the spine and not muscles. The most
                  common treatments involve proper posture, body mechanics,
                  activity and lifestyle changes, braces, and injections.
                  Surgical intervention is RARELY necessary!
                </p>
              </Service>
              <Service title="Shoulder Problems">
                <p>
                  The most movable joint in the body, the shoulder, is also one
                  of the most potentially unstable joints. As a result, it is
                  the site of many common problems. They include sprains,
                  strains, dislocations, separations, tendinitis, bursitis, torn
                  rotator cuffs, frozen shoulder, fractures, and arthritis.
                </p>
              </Service>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Services
