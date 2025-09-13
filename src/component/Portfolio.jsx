import React, { useEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    const filterButtons = document.querySelectorAll('.filter-btns .btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          if (filter === 'all') {
            item.style.display = 'block';
          } else {
            if (item.classList.contains(filter)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          }
        });
      });
    });
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h5 className="portfolio-title">Portfolio</h5>
        <p className="portfolio-subtitle">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="text-center filter-btns mb-4">
        <button className="btn btn-outline-primary active" data-filter="all">All</button>
        <button className="btn btn-outline-primary" data-filter="app">App</button>
        <button className="btn btn-outline-primary" data-filter="card">Card</button>
        <button className="btn btn-outline-primary" data-filter="web">Web</button>
      </div>

      <div className="row g-3" id="portfolio-container">
        {/* Portfolio items with category classes */}
        <div className="col-md-4 col-lg-3 portfolio-item card">
          <img
            src="masonry-portfolio-1.jpg"
            alt="Curiosity bottle"
            className="portfolio-img"
          />
        </div>
        <div className="col-md-4 col-lg-3 portfolio-item app">
          <img
            src="masonry-portfolio-2.jpg"
            alt="Coffee and snack"
            className="portfolio-img"
          />
        </div>
        <div className="col-md-4 col-lg-3 portfolio-item web">
          <img
            src="masonry-portfolio-3.jpg"
            alt="Plant"
            className="portfolio-img"
          />
        </div>
        <div className="col-md-4 col-lg-3 portfolio-item card">
          <img
            src="masonry-portfolio-5.jpg"
            alt="Wooden stool"
            className="portfolio-img"
          />
        </div>
        <div className="col-md-4 col-lg-3 portfolio-item app">
          <img
            src="masonry-portfolio-6.jpg"
            alt="Lamp"
            className="portfolio-img"
          />
        </div>
        <div className="col-md-4 col-lg-3 portfolio-item web">
          <img
            src="masonry-portfolio-7.jpg"
            alt="Sunglasses"
            className="portfolio-img"
          />
        </div>
        <div className="col-md-4 col-lg-3 portfolio-item app">
          <img
            src="masonry-portfolio-8.jpg"
            alt="Watch"
            className="portfolio-img"
          />
        </div>
        <div className="col-md-4 col-lg-3 portfolio-item web">
          <img
            src="masonry-portfolio-9.jpg"
            alt="Camera lens"
            className="portfolio-img"
          />
        </div>
        <div className="col-md-4 col-lg-3 portfolio-item card">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80"
            alt="Glass with drink"
            className="portfolio-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
