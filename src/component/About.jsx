const About = () => {
  return (
    <>
      <section id="about" className="about py-5" style={{ paddingTop: '80px' }} data-aos="fade-up">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h3 className="text-center fw-bold">About</h3>
            <div className="underline"></div>
            <p className="text-center text-muted mb-5" style={{ fontSize: '14px' }}>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <img src="kelly.jpg" className="img-fluid rounded shadow" alt="Profile Image" />
            </div>
            <div className="col-lg-8">
              <h3>UI/UX Designer & Web Developer.</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    <li><strong>Birthday:</strong> 1 May 1995</li>
                    <li><strong>Website:</strong> www.example.com</li>
                    <li><strong>Phone:</strong> +123 456 7890</li>
                    <li><strong>City:</strong> New York, USA</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    <li><strong>Age:</strong> 30</li>
                    <li><strong>Degree:</strong> Master</li>
                    <li><strong>Email:</strong> email@example.com</li>
                    <li><strong>Freelance:</strong> Available</li>
                  </ul>
                </div>
              </div>
              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
                Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore.
                Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia.
                Sed et consectetur qui quia repellendus itaque neque.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills py-5" data-aos="fade-up">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Skills</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <span>HTML <span className="float-end">100%</span></span>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <span>CSS <span className="float-end">90%</span></span>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <span>JavaScript <span className="float-end">75%</span></span>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <span>PHP <span className="float-end">80%</span></span>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <span>WordPress/CMS <span className="float-end">90%</span></span>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <span>Photoshop <span className="float-end">55%</span></span>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: '55%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="facts" className="facts py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Facts</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="fw-bold"><i className="fa-solid fa-user-group text-success"></i> 232</h3>
              <p>Clients</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="fw-bold"><i className="fa-solid fa-folder-open text-success"></i> 521</h3>
              <p>Projects</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="fw-bold"><i className="fa-solid fa-headset text-success"></i> 1453</h3>
              <p>Hours Of Support</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="fw-bold"><i className="fa-solid fa-users text-success"></i> 32</h3>
              <p>Workers</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials py-5" data-aos="fade-up">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Testimonials</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div id="testimonialCarousel" className="carousel slide text-center" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="testimonials-5.jpg" className="rounded-circle mb-3" alt="Testimonial" />
                <h5>Saul Goodman</h5>
                <p className="text-muted">CEO & Founder</p>
                <p className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                <blockquote className="blockquote">
                  <p><i className="fas fa-quote-left text-success"></i> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. <i className="fas fa-quote-right text-success"></i></p>
                </blockquote>
              </div>
              <div className="carousel-item">
                <img src="testimonials-4.jpg" className="rounded-circle mb-3" alt="Testimonial" />
                <h5>Sara Wilsson</h5>
                <p className="text-muted">Designer</p>
                <p className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></p>
                <blockquote className="blockquote">
                  <p><i className="fas fa-quote-left text-success"></i> Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. <i className="fas fa-quote-right text-success"></i></p>
                </blockquote>
              </div>
              <div className="carousel-item">
                <img src="testimonials-3.jpg" className="rounded-circle mb-3" alt="Testimonial" />
                <h5>Jena Karlis</h5>
                <p className="text-muted">Store Owner</p>
                <p className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i></p>
                <blockquote className="blockquote">
                  <p><i className="fas fa-quote-left text-success"></i> Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. <i className="fas fa-quote-right text-success"></i></p>
                </blockquote>
              </div>
            </div>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
