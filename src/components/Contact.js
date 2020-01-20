import React from 'react'

const Contact = props => (
  <section id="contact" style={{ clear: 'both' }}>
    <div className="inner">
      <section>
        <form
          method="POST"
          action="/contact-success?no-cache=1"
          data-netlify="true"
          data-netlify-honeypot="phone"
          name="Contact Form"
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field" id="form-phone">
            <label htmlFor="phone">Phone (required):</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" />
          </div>
          <div data-netlify-recaptcha="true" />
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        {/* <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:oaklandorthopedic@yahoo.com">
              oaklandorthopedic@yahoo.com
            </a>
          </div>
        </section> */}
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone</h3>
            <span>
              <a href="tel:2483340524">(248) 334-0524</a>
            </span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <span>
              St. Joseph Mercy Hospital <br />
              Medical Office Building, Ste. 407
              <br /> 44555 Woodward Ave.
              <br /> Pontiac, MI 48341
            </span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-thumbs-up" />
            <h3>Rate Us</h3>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://bit.ly/review-oakland-ortho"
            >
              Rate us on Google
            </a>
            <br />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://bit.ly/healthgrades-oakland-ortho"
            >
              Rate us on Healthgrades
            </a>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
