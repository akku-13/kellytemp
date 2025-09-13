import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
  <div className="container">
    <Link to="/" className="navbar-brand fw-bold">KELLY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-item"><Link to="/resume" className="nav-link">Resume</Link></li>
        <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
        <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Option 1</a></li>
            <li><a className="dropdown-item" href="#">Option 2</a></li>
            <li><a className="dropdown-item" href="#">Option 3</a></li>
          </ul>
        </li> */}
        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </div>
    <div className="d-none d-lg-flex gap-3">
      <a href="#" className="text-dark"><i className="bi bi-twitter-x" /></a>
      <a href="#" className="text-dark"><i className="bi bi-facebook" /></a>
      <a href="#" className="text-dark"><i className="bi bi-instagram" /></a>
      <a href="#" className="text-dark"><i className="bi bi-linkedin" /></a>
    </div>
  </div>
</nav>

        </>
    )
}
export default Navbar;