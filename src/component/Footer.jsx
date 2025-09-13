import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-muted py-4">
      <div className="container">
        <p className="mb-1">© Copyright <strong className="text-dark">Kelly</strong> All Rights Reserved</p>
        <div className="mb-2">
          <a href="#" className="text-dark me-3"><i className="fab fa-x-twitter"></i></a>
          <a href="#" className="text-dark me-3"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-dark me-3"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-dark"><i className="fab fa-linkedin"></i></a>
        </div>
        <small>Designed by <a href="#">BootstrapMade</a> Distributed by <a href="#">ThemeWagon</a></small>
      </div>
    </footer>
  );
};

export default Footer;
