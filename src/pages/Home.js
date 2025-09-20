import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main className="consultant-home">
        {/* Hero Section */}
        <section className="consultant-hero">
          <div className="consultant-hero-bg" />
          <div className="consultant-hero-content">
            <h1 className="consultant-title">
              Your Trusted Partner for Accounting, Taxation, and Financial
              Solutions
            </h1>
            <p className="consultant-subtitle">
              Expert tax consultancy, accounting, loan assistance, and investment
              planning to help you achieve financial growth.
            </p>
            <div className="consultant-btn-group">
              <Link to="/contact" className="consultant-btn primary">
                Book a Consultation
              </Link>
              <Link to="#services" className="consultant-btn secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="consultant-about fade-in">
          <div className="consultant-about-inner">
            <div className="consultant-about-image">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
                alt="About Arham Tax Consultancy"
                height={320}
                width={320}
              />
            </div>
            <div className="consultant-about-text">
              <h2 className="consultant-section-title">About Us</h2>
              <p>
                Arham Tax Consultancy is a leading financial services firm based
                in Ahmedabad, Gujarat, specializing in tax consultancy, loan
                advisory, accounting, and investment planning. Our mission is to
                empower individuals and businesses with expert guidance,
                transparent solutions, and a client-first approach. With years of
                experience and a commitment to integrity, we help our clients
                achieve financial growth and peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section (moved above services) */}
        <section className="consultant-why-cards fade-in">
          <h2 className="consultant-section-title">Why Choose Us</h2>
          <div className="consultant-why-grid">
            <div className="consultant-why-card">
              <h3>Experienced Professionals</h3>
              <p>
                Our team brings years of expertise in tax, accounting, and
                financial consulting.
              </p>
            </div>
            <div className="consultant-why-card">
              <h3>Tailored Solutions</h3>
              <p>
                We provide personalized strategies to meet your unique financial
                needs.
              </p>
            </div>
            <div className="consultant-why-card">
              <h3>Client-Centric Approach</h3>
              <p>
                We prioritize your goals and satisfaction at every step of our
                service.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="consultant-services fade-in" id="services">
          <h2 className="consultant-section-title">Our Services</h2>
          <div className="consultant-services-grid">
            <div className="consultant-service-card">
              <span className="consultant-service-icon accounting">
                <i className="fas fa-calculator"></i>
              </span>
              <h3>Accounting</h3>
              <p>
                Accurate bookkeeping and financial reporting for your business.
              </p>
            </div>
            <div className="consultant-service-card">
              <span className="consultant-service-icon taxation">
                <i className="fas fa-file-invoice-dollar"></i>
              </span>
              <h3>Taxation</h3>
              <p>Expert tax planning, filing, and compliance for all clients.</p>
            </div>
            <div className="consultant-service-card">
              <span className="consultant-service-icon loan">
                <i className="fas fa-hand-holding-usd"></i>
              </span>
              <h3>Loan Advisory</h3>
              <p>Guidance for business and personal loans to fuel your growth.</p>
            </div>
            <div className="consultant-service-card">
              <span className="consultant-service-icon investment">
                <i className="fas fa-chart-line"></i>
              </span>
              <h3>Investment Planning</h3>
              <p>Strategic advice for wealth creation and financial security.</p>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
