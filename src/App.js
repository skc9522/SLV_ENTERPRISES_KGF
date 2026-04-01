import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  FaStore,
  FaUsers,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
  FaStar,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import logo from './assets/SLV_logo.jpg';
import logoFooter from './assets/SLV_LOGO_Black_BG-8.png';
import { NAV_ITEMS, SERVICES, brands, testimonials, timeline, galleryImages } from './data/content';
import './App.css';

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

const HERO_STATS = [
  { target: 9, suffix: '+', label: 'Years of Excellence' },
  { target: 2, suffix: '', label: 'Districts Covered' },
  { target: 400, suffix: '+', label: 'Retailers Served' },
  { target: 18, suffix: '+', label: 'Premium Brands' },
];

function HeroStatCard({ target, suffix, label, start, delay }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    let cancelled = false;
    let raf = 0;
    const timeoutId = setTimeout(() => {
      const duration = 2200;
      const t0 = performance.now();
      const tick = (now) => {
        if (cancelled) return;
        const elapsed = now - t0;
        const p = Math.min(elapsed / duration, 1);
        setDisplay(Math.round(easeOutCubic(p) * target));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      cancelAnimationFrame(raf);
    };
  }, [start, target, delay]);

  return (
    <div className="hero-stat-card">
      <span className="hero-stat-number">
        {display}
        {suffix}
      </span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}

function onBrandImgError(e) {
  e.target.style.display = 'none';
  const ph = e.target.nextSibling;
  if (ph) ph.style.display = 'flex';
}

const WHATSAPP_PHONE = '7019637432';
const WHATSAPP_TEXT =
  "Hello! I'm interested in learning more about SLV Enterprises products and services.";

function openWhatsApp() {
  window.open(
    `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`,
    '_blank'
  );
}

function App() {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [heroCountersStart, setHeroCountersStart] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactPopup, setContactPopup] = useState(null);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const closeNavMenu = () => setNavMenuOpen(false);
  const closeContactPopup = () => setContactPopup(null);

  useEffect(() => {
    if (!contactPopup && !navMenuOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      if (contactPopup) setContactPopup(null);
      else setNavMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [contactPopup, navMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrollTopVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHeroCountersStart(true), 550);
    return () => clearTimeout(t);
  }, []);

  const handleContactSubmit = useCallback(async (e) => {
    e.preventDefault();
    setContactSubmitting(true);
    const form = e.currentTarget;
    try {
      const body = new URLSearchParams(new FormData(form)).toString();
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error('Send failed');
      setContactPopup({
        type: 'success',
        text: 'Form submitted successfully. Please wait — our team will contact you shortly.',
      });
      form.reset();
    } catch {
      setContactPopup({
        type: 'error',
        text: 'Submission failed. Please try again in a moment, or reach us by phone or email.',
      });
    } finally {
      setContactSubmitting(false);
    }
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home" className="nav-logo-link" onClick={closeNavMenu}>
              <img src={logo} alt="SLV Enterprises" className="nav-logo-img" />
            </a>
          </div>
          <button
            type="button"
            className="nav-menu-toggle"
            aria-expanded={navMenuOpen}
            aria-controls="primary-navigation"
            aria-label={navMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setNavMenuOpen((o) => !o)}
          >
            {navMenuOpen ? <FaTimes aria-hidden /> : <FaBars aria-hidden />}
          </button>
          {navMenuOpen ? (
            <button
              type="button"
              className="nav-backdrop"
              aria-label="Close menu"
              tabIndex={-1}
              onClick={closeNavMenu}
            />
          ) : null}
          <div
            id="primary-navigation"
            className={`nav-links${navMenuOpen ? ' nav-links--open' : ''}`}
          >
            {NAV_ITEMS.map(({ href, label }) => (
              <a key={href} href={href} onClick={closeNavMenu}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to SLV Enterprises</h1>
          <p className="hero-subtitle">
            Your Trusted Partner in Distribution & Super Stockist Services
          </p>
          <div className="hero-stats">
            {HERO_STATS.map((s, i) => (
              <HeroStatCard
                key={s.label}
                target={s.target}
                suffix={s.suffix}
                label={s.label}
                start={heroCountersStart}
                delay={i * 140}
              />
            ))}
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <FaStore size={80} />
            <p>Your Business Image Here</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-heading-wrap">
            <h2>About SLV Enterprises</h2>
            <span className="about-subline" aria-hidden="true" />
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="about-lead">
                Founded by <strong>Sunil Kumar V</strong>, SLV Enterprises has been serving as a premier
                distributor for KGF and KGF rural areas for over 9 years. We take pride in being a super
                stockist for Kolar and Chikkabalapura Districts, ensuring quality products reach every
                corner of these regions.
              </p>
              <p>
                Our extensive network includes distributors in each and every taluk across Kolar and
                Chikkabalapura districts, making us the most reliable distribution partner in the region.
                We proudly serve <strong>400+ retailers</strong> across our distribution network.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder about-image-card">
                <FaUsers size={60} />
                <p>Team Photo Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="founder" className="founder">
        <div className="container">
          <h2>Meet Our Founder</h2>
          <div className="founder-content">
            <div className="founder-image">
              <div className="founder-photo-placeholder">
                <FaUsers size={80} />
                <p>Sunil Kumar V</p>
                <span>Founder & Proprietor</span>
              </div>
              <div className="founder-quote founder-quote--below-photo">
                <blockquote>
                  &ldquo;Our success lies in building strong relationships with our partners and ensuring
                  quality products reach every retailer in our network.&rdquo;
                </blockquote>
              </div>
            </div>
            <div className="founder-details">
              <h3>Sunil Kumar V</h3>
              <p className="founder-title">Founder & Proprietor</p>
              <div className="founder-description">
                <p>
                  With over 9 years of dedicated service in the distribution industry, Sunil Kumar V has
                  transformed SLV Enterprises into a trusted name across Kolar and Chikkabalapura
                  districts. His vision of providing quality products to every corner of the region has
                  made SLV Enterprises the preferred choice for major brands and retailers.
                </p>
                <p>
                  Under his leadership, the company has expanded its network to serve 400+ retailers,
                  established strong partnerships with 18+ premium brands, and created employment
                  opportunities across multiple taluks. His commitment to excellence and customer
                  satisfaction continues to drive the company&apos;s growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {SERVICES.map(({ Icon, title, description }) => (
              <div key={title} className="service-card">
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="brands" className="brands">
        <div className="container">
          <h2>Our Premium Brands</h2>
          <div className="brands-grid">
            {brands.map((brand) => (
              <div key={brand.name} className="brand-card">
                <div className="brand-logo-container">
                  <img
                    src={brand.imagePath}
                    alt={brand.name}
                    className="brand-logo"
                    onError={onBrandImgError}
                  />
                  <div className="brand-logo-placeholder">
                    <FaStore size={30} />
                  </div>
                </div>
                <h4>{brand.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>What Our Partners Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-rating">
                  {Array.from({ length: t.rating }, (_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="timeline">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Our Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedGalleryItem(image)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedGalleryItem(image);
                  }
                }}
              >
                <div className="gallery-image-placeholder">
                  <FaStore size={40} />
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h4>Address</h4>
                  <p>
                    SLV Enterprises
                    <br />
                    Site No: 71-72, 2nd Cross Ashwath Layout
                    <br />
                    Swarna Kuppa, Robertsonpet
                    <br />
                    KGF 563122
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <FaPhone />
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 7019637432</p>
                  <p>+91 9380293508</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <FaEnvelope />
                </span>
                <div>
                  <h4>Email</h4>
                  <p>slventerprises.kgf1@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleContactSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="contact-honeypot" aria-hidden="true">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={contactSubmitting}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  disabled={contactSubmitting}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  disabled={contactSubmitting}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  disabled={contactSubmitting}
                />
                <button type="submit" disabled={contactSubmitting}>
                  {contactSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src={logoFooter} alt="SLV Enterprises" className="footer-logo-img" />
              </div>
              <p>
                Your trusted partner in distribution and super stockist services across Kolar and
                Chikkabalapura districts.
              </p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              {NAV_ITEMS.map(({ href, label }) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <button
                  type="button"
                  className="social-link"
                  onClick={() => window.open('https://facebook.com', '_blank')}
                >
                  <FaFacebook />
                </button>
                <button
                  type="button"
                  className="social-link"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  <FaInstagram />
                </button>
                <button type="button" className="social-link" onClick={openWhatsApp}>
                  <FaWhatsapp />
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SLV Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <button type="button" className="whatsapp-float" onClick={openWhatsApp} aria-label="WhatsApp">
        <FaWhatsapp />
      </button>

      {scrollTopVisible ? (
        <button type="button" className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      ) : null}

      {selectedGalleryItem ? (
        <div
          className="image-modal"
          role="presentation"
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-placeholder">
              <FaStore size={60} />
              <h3>{selectedGalleryItem.title}</h3>
              <p>{selectedGalleryItem.description}</p>
            </div>
            <button type="button" className="modal-close" onClick={() => setSelectedGalleryItem(null)} aria-label="Close">
              ×
            </button>
          </div>
        </div>
      ) : null}

      {contactPopup
        ? createPortal(
            <div className="contact-popup-overlay" role="presentation" onClick={closeContactPopup}>
              <div
                className={`contact-popup contact-popup--${contactPopup.type}`}
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="contact-popup-title"
                aria-describedby="contact-popup-desc"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 id="contact-popup-title" className="contact-popup-title">
                  {contactPopup.type === 'success' ? 'Success' : 'Submission failed'}
                </h3>
                <p id="contact-popup-desc" className="contact-popup-message">
                  {contactPopup.text}
                </p>
                <button type="button" className="contact-popup-ok" onClick={closeContactPopup}>
                  OK
                </button>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}

export default App;
