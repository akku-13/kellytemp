import React from 'react';
import { Link } from 'react-router-dom';
import Resume from './Resume';

function Home() {
    return (
        <>
            <section className="hero position-relative" data-aos="fade-up">
                <img src="hero-bg.jpg" alt="Kelly Adams working" className="w-100" />
                <div className="hero-content">
                    <h1 className="fw-bold">Kelly Adams</h1>
                    <p className="lead">I'm a professional illustrator from San Francisco</p>
                    <Link to="/about" className="btn btn-custom">ABOUT ME</Link>
                </div>
            </section>
            
        </>
    );
}

export default Home;
