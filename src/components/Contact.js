import React from 'react'

const Contact = (props) => (
    <section id="contact" style={{ clear: 'both' }}>
        <div className="inner">
            <section>
                <form method="POST" netlify>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:oaklandorthopedic@sbcglobal.net">oaklandorthopedic@sbcglobal.net</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span><a href="tel:2488586951">(248) 858-6951</a></span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>St. Joseph Mercy Hospital <br />Medical Office Building
  <br />  Suite 407
  <br />  44555 Woodward Ave.
  <br />  Pontiac, MI 48341</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
