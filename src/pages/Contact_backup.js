import React, { useState, useRef, useEffect } from "react";
im      {/* Hero Section */}
      import React, { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Tax Consultation",
    message: ""
  });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const timerRef = useRef(null);

  // Animation refs
  const formSectionRef = useScrollAnimation('animate-in');
  const infoSectionRef = useScrollAnimation('animate-in');
  const mapSectionRef = useScrollAnimation('animate-in');
  const ctaSectionRef = useScrollAnimation('animate-in');

  // Validation
  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Enter a valid email.";
    return "";
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      setStatus("");
      return;
    }
    setError("");
    setStatus("Sending...");
    // Clean up previous timer if any
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setStatus("Thank you! We'll get back to you soon.");
    }, 1200);
  };

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Cleanup timer on unmount (prevents React strict mode double-render issues)
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="contact-root">
      {/* Hero Section */}
      <section className="contact-hero fade-in">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get in Touch with Us</h1>
          <p className="contact-hero-subtext">
            Ready to take control of your finances? Our expert team is here to provide personalized solutions for all your tax, accounting, and financial planning needs.
          </p>
          <div className="contact-hero-illustration">
            <img src="/images/contact-illustration.png" alt="Professional consultation" />
          </div>
        </div>
      </section>

      {/* Main Contact Content - Two Sections */}
      <div className="contact-main-content">
        {/* Section 1: Contact Form */}
        <section className="contact-form-section fade-up" ref={formSectionRef}>
          <h2 className="contact-form-title">Send us a Message</h2>
          <p className="contact-form-subtitle">
            Fill out the form below and we'll get back to you within 24 hours to discuss how we can help you achieve your financial goals.
          </p>
          <form id="contact-form" className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-row">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-row">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-row">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-row">
              <label className="form-label">Service Required</label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="form-input"
              >
                <option>Tax Consultation</option>
                <option>Accounting Services</option>
                <option>Investment Planning</option>
                <option>Business Registration</option>
                <option>Loan Assistance</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="form-row">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your requirements..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="form-input"
              />
            </div>
            <button type="submit" className="form-submit-btn">
              Send Message
            </button>
            {error && <div className="form-error">{error}</div>}
            {status && <div className="form-status">{status}</div>}
          </form>
        </section>

        {/* Section 2: Contact Information & Location */}
        <section className="contact-info-section fade-up" ref={infoSectionRef}>
          <h2 className="contact-info-title">Get in Touch</h2>
          <p className="contact-info-subtitle">
            Prefer to reach out directly? Use any of the contact methods below or visit our office during business hours.
          </p>
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <FaMapMarkerAlt className="contact-info-icon" />
              <div className="contact-info-details">
                <div className="contact-info-label">Office Address</div>
                <div className="contact-info-value">
                  101, Arham Tower, CG Road<br />
                  Ahmedabad, Gujarat 380009, India
                </div>
              </div>
            </div>
            <div className="contact-info-card">
              <FaPhoneAlt className="contact-info-icon" />
              <div className="contact-info-details">
                <div className="contact-info-label">Phone Number</div>
                <a href="tel:+919999999999" className="contact-info-value">
                  +91 99999 99999
                </a>
              </div>
            </div>
            <div className="contact-info-card">
              <FaEnvelope className="contact-info-icon" />
              <div className="contact-info-details">
                <div className="contact-info-label">Email Address</div>
                <a href="mailto:info@arhamtax.com" className="contact-info-value">
                  info@arhamtax.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Google Map */}
          <div className="contact-map-container" ref={mapSectionRef}>
            <iframe
              title="Arham Tax Consultancy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.123456789!2d72.5713623154321!3d23.0225059849436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f7b0b0b0b0%3A0x123456789abcdef!2sArham%20Tower!5e0!3m2!1sen!2sin!4v1694700000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>

      {/* Final Call-to-Action Section */}
      <section className="contact-final-cta fade-up" ref={ctaSectionRef}>
        <div className="contact-final-cta-content">
          <h2 className="contact-final-cta-heading">
            Let's simplify your financial journey
          </h2>
          <a href="#contact-form" className="contact-final-cta-btn">
            Book a Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;

      {/* Main Contact Content - Two Sections */}
      <div className="contact-main-content">
        {/* Section 1: Contact Form */}
        <section className="contact-form-section fade-up" ref={formSectionRef}>
          <h2 className="contact-form-title">Send us a Message</h2>
          <p className="contact-form-subtitle">
            Fill out the form below and we'll get back to you within 24 hours to discuss how we can help you achieve your financial goals.
          </p>
          <form id="contact-form" className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-row">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-row">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-row">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-row">
              <label className="form-label">Service Required</label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="form-input"
              >
                <option>Tax Consultation</option>
                <option>Accounting Services</option>
                <option>Investment Planning</option>
                <option>Business Registration</option>
                <option>Loan Assistance</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="form-row">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your requirements..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="form-input"
              />
            </div>
            <button type="submit" className="form-submit-btn">
              Send Message
            </button>
            {error && <div className="form-error">{error}</div>}
            {status && <div className="form-status">{status}</div>}
          </form>
        </section>

        {/* Section 2: Contact Information & Location */}
        <section className="contact-info-section fade-up" ref={infoSectionRef}>
          <h2 className="contact-info-title">Get in Touch</h2>
          <p className="contact-info-subtitle">
            Prefer to reach out directly? Use any of the contact methods below or visit our office during business hours.
          </p>
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <FaMapMarkerAlt className="contact-info-icon" />
              <div className="contact-info-details">
                <div className="contact-info-label">Office Address</div>
                <div className="contact-info-value">
                  101, Arham Tower, CG Road<br />
                  Ahmedabad, Gujarat 380009, India
                </div>
              </div>
            </div>
            <div className="contact-info-card">
              <FaPhoneAlt className="contact-info-icon" />
              <div className="contact-info-details">
                <div className="contact-info-label">Phone Number</div>
                <a href="tel:+919999999999" className="contact-info-value">
                  +91 99999 99999
                </a>
              </div>
            </div>
            <div className="contact-info-card">
              <FaEnvelope className="contact-info-icon" />
              <div className="contact-info-details">
                <div className="contact-info-label">Email Address</div>
                <a href="mailto:info@arhamtax.com" className="contact-info-value">
                  info@arhamtax.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Google Map */}
          <div className="contact-map-container" ref={mapSectionRef}>
            <iframe
              title="Arham Tax Consultancy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.123456789!2d72.5713623154321!3d23.0225059849436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f7b0b0b0b0%3A0x123456789abcdef!2sArham%20Tower!5e0!3m2!1sen!2sin!4v1694700000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>MarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Tax Consultation",
    message: ""
  });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const timerRef = useRef(null);

  // Animation refs
  const formSectionRef = useScrollAnimation('animate-in');
  const infoSectionRef = useScrollAnimation('animate-in');
  const mapSectionRef = useScrollAnimation('animate-in');
  const ctaSectionRef = useScrollAnimation('animate-in');

  // Validation
  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Enter a valid email.";
    return "";
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      setStatus("");
      return;
    }
    setError("");
    setStatus("Sending...");
    // Clean up previous timer if any
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setStatus("Thank you! We'll get back to you soon.");
    }, 1200);
  };

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Cleanup timer on unmount (prevents React strict mode double-render issues)
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="contact-root">
      {/* Hero Section */}
      <section className="contact-hero fade-in">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get in Touch with Us</h1>
          <p className="contact-hero-subtext">
            Have a question or need assistance? We’re here to help you every step of the way.
          </p>
          <div className="contact-hero-illustration">
            <img src="/images/contact-illustration.png" alt="Business communication" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section fade-up" ref={formSectionRef}>
        <form id="contact-form" className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={form.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-row">
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="form-input"
            >
              <option>Tax Consultation</option>
              <option>Accounting</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div className="form-row">
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="form-input"
            />
          </div>
          <button type="submit" className="form-submit-btn">Submit</button>
          {error && <div className="form-error">{error}</div>}
          {status && <div className="form-status">{status}</div>}
        </form>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section fade-up" ref={infoSectionRef}>
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <FaMapMarkerAlt className="contact-info-icon" />
            <div>
              <div className="contact-info-label">Address</div>
              <div className="contact-info-value">
                101, Arham Tower, CG Road, Ahmedabad, India
              </div>
            </div>
          </div>
          <div className="contact-info-card">
            <FaPhoneAlt className="contact-info-icon" />
            <div>
              <div className="contact-info-label">Phone</div>
              <a href="tel:+919999999999" className="contact-info-value">
                +91 99999 99999
              </a>
            </div>
          </div>
          <div className="contact-info-card">
            <FaEnvelope className="contact-info-icon" />
            <div>
              <div className="contact-info-label">Email</div>
              <a href="mailto:info@arhamtax.com" className="contact-info-value">
                info@arhamtax.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="contact-map-section fade-up" ref={mapSectionRef}>
        <iframe
          title="Arham Tax Consultancy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.123456789!2d72.5713623154321!3d23.0225059849436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f7b0b0b0b0%3A0x123456789abcdef!2sArham%20Tower!5e0!3m2!1sen!2sin!4v1694700000000!5m2!1sen!2sin"
          width="100%"
          height="320"
          style={{
            border: 0,
            borderRadius: "1.5rem",
            boxShadow: "0 2px 16px rgba(30,40,60,0.09)",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="contact-final-cta fade-up" ref={ctaSectionRef}>
        <div className="contact-final-cta-content">
          <h2 className="contact-final-cta-heading">
            Let’s simplify your financial journey
          </h2>
          <a href="#contact-form" className="contact-final-cta-btn">
            Book a Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
