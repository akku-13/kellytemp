import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="container py-5">
      <h3 className="text-center fw-bold">Resume</h3>
      <div className="underline"></div>
      <p className="text-center text-muted mb-5" style={{fontSize: '14px'}}>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      <div className="row">
        <div className="col-lg-6">
          <h5 className="fw-bold mb-4">Sumary</h5>
          <div className="timeline-item">
            <div className="circle"></div>
            <h6 className="text-uppercase text-secondary fw-bold mb-1">BRANDON JOHNSON</h6>
            <p className="fst-italic" style={{fontSize: '14px', maxWidth: '500px'}}>
              Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
            </p>
            <ul className="mb-0" style={{fontSize: '14px'}}>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
          </div>

          <h5 className="fw-bold mt-5 mb-4">Education</h5>

          <div className="timeline-item">
            <div className="circle"></div>
            <h6 className="fw-semibold text-uppercase text-secondary mb-0">MASTER OF FINE ARTS & GRAPHIC DESIGN</h6>
            <p className="mb-1 fst-italic fw-bold" style={{fontSize: '14px'}}>2015 - 2016</p>
            <p className="fst-italic" style={{fontSize: '14px'}}>Rochester Institute of Technology, Rochester, NY</p>
            <p style={{fontSize: '14px'}}>
              Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend
            </p>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>
            <h6 className="fw-semibold text-uppercase text-secondary mb-0">BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h6>
            <p className="mb-1 fst-italic fw-bold" style={{fontSize: '14px'}}>2010 - 2014</p>
            <p className="fst-italic" style={{fontSize: '14px'}}>Rochester Institute of Technology, Rochester, NY</p>
            <p style={{fontSize: '14px'}}>
              Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <h5 className="fw-bold mb-4">Professional Experience</h5>

          <div className="timeline-item">
            <div className="circle"></div>
            <h6 className="text-uppercase text-secondary fw-bold mb-1">SENIOR GRAPHIC DESIGN SPECIALIST</h6>
            <p className="fst-italic fw-bold mb-1" style={{fontSize: '14px'}}>2019 - Present</p>
            <p className="fst-italic" style={{fontSize: '14px'}}>Experion, New York, NY</p>
            <ul style={{fontSize: '14px'}}>
              <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
              <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>
            <h6 className="text-uppercase text-secondary fw-bold mb-1">GRAPHIC DESIGN SPECIALIST</h6>
            <p className="fst-italic fw-bold mb-1" style={{fontSize: '14px'}}>2017 - 2018</p>
            <p className="fst-italic" style={{fontSize: '14px'}}>Stepping Stone Advertising, New York, NY</p>
            <ul style={{fontSize: '14px'}}>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
