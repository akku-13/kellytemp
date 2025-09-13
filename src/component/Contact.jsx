import React from 'react';

const Contact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h4 className="fw-bold">Contact</h4>
          <div className="underline"></div>
          <p className="text-center text-muted mb-5" style={{ fontSize: '14px' }}>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="p-4 bg-white shadow-sm rounded">
              <div className="mb-4 d-flex align-items-start">
                <div className="icon-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c0 2.444-3.066 5.034-3.157 5.102a.237.237 0 0 1-.217 0c-.09-.068-3.158-2.655-3.158-5.102A3.5 3.5 0 1 1 12.166 8.94zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">Address</h6>
                  <small>jassian road, ludhiana, punjab, 141008</small>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="icon-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 1 .746-.08l2.296 1.15a.678.678 0 0 1 .341.59l-.01 2.345a.678.678 0 0 1-.369.615l-1.67.797a11.43 11.43 0 0 0 5.292 5.292l.797-1.67a.678.678 0 0 1 .615-.37h2.344a.678.678 0 0 1 .59.342l1.15 2.296a.678.678 0 0 1-.08.746l-2.457 2.457a.678.678 0 0 1-.59.18c-2.28-.57-4.667-2.19-6.945-4.468-2.278-2.279-3.897-4.664-4.468-6.945a.678.678 0 0 1 .179-.59L3.654 1.328z" />
                  </svg>
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">Call Us</h6>
                  <small>+1 5589 55488 55</small>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="icon-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                    <path d="M.05 4.555L8 9.414l7.95-4.86A1.994 1.994 0 0 0 14 4H2c-.29 0-.56.078-.808.215z" />
                  </svg>
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">Email Us</h6>
                  <small>info@example.com</small>
                </div>
              </div>

              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6843.606658610706!2d75.80882264614469!3d30.948056897924282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a841aa6128feb%3A0xa668ec8bab6ff51f!2sJassian%2C%20Haibowal%20Kalan%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1756660126054!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-4 bg-white shadow-sm rounded">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="6" placeholder="Message"></textarea>
                </div>

                <button type="submit" className="btn btn-info text-white px-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
