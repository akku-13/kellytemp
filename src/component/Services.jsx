import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="services-section text-center">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="description">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="service-box">
              <div className="service-icon icon-1">
                <i className="bi bi-graph-up"></i>
              </div>
              <h5 className="service-title">Nesciunt Mete</h5>
              <p className="service-text">
                Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="service-box">
              <div className="service-icon icon-2">
                <i className="bi bi-broadcast-pin"></i>
              </div>
              <h5 className="service-title">Eosle Commodi</h5>
              <p className="service-text">
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="service-box">
              <div className="service-icon icon-3">
                <i className="bi bi-easel"></i>
              </div>
              <h5 className="service-title">Ledo Markt</h5>
              <p className="service-text">
                Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="service-box">
              <div className="service-icon icon-4">
                <i className="bi bi-square"></i>
              </div>
              <h5 className="service-title">Asperiores Commodit</h5>
              <p className="service-text">
                Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="service-box">
              <div className="service-icon icon-5">
                <i className="bi bi-calendar3"></i>
              </div>
              <h5 className="service-title">Velit Doloremque</h5>
              <p className="service-text">
                Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="service-box">
              <div className="service-icon icon-6">
                <i className="bi bi-chat-dots"></i>
              </div>
              <h5 className="service-title">Dolori Architecto</h5>
              <p className="service-text">
                Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
