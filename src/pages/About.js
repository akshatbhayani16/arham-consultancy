import React from "react";
import { FaLinkedin, FaUserTie, FaBullseye, FaEye, FaBalanceScale, FaChartLine, FaShieldAlt, FaSyncAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import AboutContentPhoto from "../images/about-content.jpeg";
import { Link } from "react-router-dom";
import "./About.css";

const milestones = [
  { year: "2015", text: "Firm founded in Ahmedabad" },
  { year: "2017", text: "Expanded to serve 100+ clients" },
  { year: "2020", text: "Launched investment planning services" },
  { year: "2023", text: "Recognized as top regional consultancy" },
];

function About() {
  return (
    <div className="arham-about-root">
      {/* Hero Section */}
      <section className="arham-about-hero fade-in" id="about-hero">
        <div className="arham-hero-bg">
          <div className="arham-hero-gradient" />
          <img
            src={AboutContentPhoto}
            alt="Professional business team"
            className="arham-hero-img"
          />
        </div>
        <div className="arham-hero-overlay">
          <h1 className="arham-hero-title underline-animate">
            About Arham Tax Consultancy
          </h1>
          <p className="arham-hero-subtext">
            Empowering businesses and individuals with trusted financial solutions since inception.
          </p>
          <button
            className="arham-hero-btn"
            onClick={() => {
              const nextSection = document.getElementById('arham-story-section');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="arham-story-section" id="arham-story-section">
        <div className="arham-story-grid">
          <div className="arham-story-img slide-in-left">
            <img src={AboutContentPhoto} alt="Documents and finance workspace" />
          </div>
          <div className="arham-story-text slide-in-right">
            <h2 className="arham-section-title underline-animate">Our Story</h2>
            <p className="arham-story-desc">
              Founded to simplify taxation and accounting, we help clients stay compliant and achieve financial clarity.
            </p>
            <div className="arham-timeline">
              <div className="arham-timeline-item">
                <span className="arham-timeline-year">2015</span>
                <span className="arham-timeline-text">Firm founded in Ahmedabad</span>
              </div>
              <div className="arham-timeline-item">
                <span className="arham-timeline-year">2017</span>
                <span className="arham-timeline-text">100+ Clients Served</span>
              </div>
              <div className="arham-timeline-item">
                <span className="arham-timeline-year">2020</span>
                <span className="arham-timeline-text">Launched Investment Planning</span>
              </div>
              <div className="arham-timeline-item">
                <span className="arham-timeline-year">2023</span>
                <span className="arham-timeline-text">Top Regional Consultancy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="arham-mission-vision fade-up">
        <div className="arham-mv-grid">
          <div className="arham-mv-card glass-card hover-lift">
            <FaBullseye className="arham-mv-icon" />
            <h3 className="arham-mv-title underline-animate">Mission</h3>
            <p className="arham-mv-desc">Deliver accurate, timely, and personalized financial services.</p>
          </div>
          <div className="arham-mv-card glass-card hover-lift">
            <FaEye className="arham-mv-icon" />
            <h3 className="arham-mv-title underline-animate">Vision</h3>
            <p className="arham-mv-desc">Be the most trusted financial consulting partner for businesses and individuals.</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="arham-founder-section fade-up">
        <div className="arham-founder-card hover-lift">
          <div className="arham-founder-img-wrap">
            <img src={AboutContentPhoto} alt="Ronak Shah" className="arham-founder-img-circle" />
          </div>
          <div className="arham-founder-info">
            <h3 className="arham-founder-title underline-animate">Ronak Shah</h3>
            <p className="arham-founder-role">Founder & Chief Consultant</p>
            <p className="arham-founder-bio">
              With 15+ years of experience in tax, accounting, and financial planning, Ronak Shah is dedicated to helping clients achieve financial clarity and compliance. His expertise spans tax strategy, investment planning, and business advisory, always with a focus on personalized, client-first service.
            </p>
            <div className="arham-founder-actions">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="arham-founder-linkedin-btn">
                <FaLinkedin /> LinkedIn
              </a>
              <Link to="/contact" className="arham-founder-consult-btn">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="arham-values-section">
        <h2 className="arham-section-title underline-animate">Our Core Values</h2>
        <div className="arham-values-grid">
          <div className="arham-value-card value-animate value-delay-1">
            <FaSyncAlt className="arham-value-icon" />
            <h4 className="arham-value-title">Transparency</h4>
            <p className="arham-value-desc">Clear, honest communication at every step. We keep you informed and empowered.</p>
          </div>
          <div className="arham-value-card value-animate value-delay-2">
            <FaBalanceScale className="arham-value-icon" />
            <h4 className="arham-value-title">Accuracy</h4>
            <p className="arham-value-desc">Meticulous attention to detail ensures your finances are always precise and compliant.</p>
          </div>
          <div className="arham-value-card value-animate value-delay-3">
            <FaShieldAlt className="arham-value-icon" />
            <h4 className="arham-value-title">Integrity</h4>
            <p className="arham-value-desc">Ethical, trustworthy service for every client. Your interests always come first.</p>
          </div>
          <div className="arham-value-card value-animate value-delay-4">
            <FaChartLine className="arham-value-icon" />
            <h4 className="arham-value-title">Growth</h4>
            <p className="arham-value-desc">Helping you achieve financial progress and security for a brighter future.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <Footer />
    </div>
  );
}

export default About;
