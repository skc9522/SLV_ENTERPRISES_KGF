import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaTruck, 
  FaStore, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
  FaStar
} from 'react-icons/fa';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll to top functionality
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const brands = [
    {
      name: 'MSR Oil',
          imagePath: require('./assets/MSR_cocunut_oil.png')
    },
    {
    name: 'Patanjali Food Products',
    imagePath: require('./assets/patanjali.jpg')
    },
    {
      name: 'Patanjali Cosmetics Products',
    imagePath: require('./assets/patanjali.jpg')
    },
    {
      name: 'Eyetex Dazller',
    imagePath: require('./assets/Dazller.jpg')
    },
    {
      name: 'Marino Food Products PVT LTD',
    imagePath: require('./assets/Marino.jpg')
    },
    {
      name: 'Pratap Snacks LTD',
          imagePath: require('./assets/prataap-snacks.jpg')
    },
      {
      name: 'Coco Cola',
      imagePath:  require('./assets/coco-cola.png')
    },
    {
      name: 'Sunpure Oil',
      imagePath:  require('./assets/sunpure_oil.png')
    },
    {
      name: 'Crax Chips',
      imagePath:  require('./assets/Crax.png')
    },
    {
      name: 'Brands of Bharat',
      imagePath:  require('./assets/brands_of_bharath.jpg')
    },
    {
      name: 'Kopiko Chocolate',
      imagePath:  require('./assets/kopiko.png')
    },
    {
      name: 'Nestle',
      imagePath:  require('./assets/nestle.png')
    },
    {
      name: 'Haldirams Prabhuji',
      imagePath:  require('./assets/haldirams.png')
    },
    {
      name: 'Signature Water',
      imagePath: '/images/brands/signature-water.png'
    },
     {
      name: 'Campa Cola - Reliance Retail Limited',
      imagePath:  require('./assets/campa_cola.png')
    },
    {
      name: 'Independence Biscuits - Reliance Retail Limited',
      // 
      imagePath:  require('./assets/Independence_biscuts.jpg')
    },
    {
      name: 'Gopal Snacks',
      imagePath:  require('./assets/gopal.png')
    },
      {
      name: 'Angry Chips',
      imagePath:  require('./assets/brands_of_bharath.jpg')
    },
    {
      name: "Kenty's Badam Milk",
      imagePath:  require('./assets/kentys.jpg')
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Retailer, KGF",
      rating: 5,
      text: "SLV Enterprises has been our trusted partner for over 5 years. Their reliable delivery and quality products have helped us grow our business significantly."
    },
    {
      name: "Priya Sharma",
      role: "Store Owner, Robertsonpet",
      rating: 5,
      text: "Excellent service and support from SLV Enterprises. They understand our needs and always deliver on time. Highly recommended!"
    },
    {
      name: "Mohan Singh",
      role: "Supermarket Owner, Kolar",
      rating: 5,
      text: "The best distribution partner we've worked with. Their extensive brand portfolio and professional approach make them stand out."
    },
    {
      name: "Anita Patel",
      role: "Retailer, Chikkabalapura",
      rating: 5,
      text: "SLV Enterprises has transformed our business with their wide range of products and exceptional customer service."
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "SLV Enterprises established by Sunil Kumar V in KGF"
    },
    {
      year: "2016",
      title: "First Major Partnership",
      description: "Secured distribution rights for Patanjali products"
    },
    {
      year: "2018",
      title: "Expansion to Kolar",
      description: "Extended operations to cover Kolar district"
    },
    {
      year: "2020",
      title: "Chikkabalapura Coverage",
      description: "Expanded network to Chikkabalapura district"
    },
    {
      year: "2022",
      title: "Super Stockist Status",
      description: "Achieved super stockist status for multiple brands"
    },
    {
      year: "2024",
      title: "400+ Retailers Network",
      description: "Successfully serving 400+ retailers across districts"
    }
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Warehouse Operations",
      description: "Our state-of-the-art warehouse facility",
      placeholder: "Warehouse Image"
    },
    {
      id: 2,
      title: "Distribution Network",
      description: "Our extensive delivery fleet",
      placeholder: "Delivery Fleet"
    },
    {
      id: 3,
      title: "Team Collaboration",
      description: "Our dedicated team at work",
      placeholder: "Team Photo"
    },
    {
      id: 4,
      title: "Product Range",
      description: "Wide variety of premium products",
      placeholder: "Products Display"
    },
    {
      id: 5,
      title: "Customer Service",
      description: "Dedicated customer support team",
      placeholder: "Customer Service"
    },
    {
      id: 6,
      title: "Quality Control",
      description: "Maintaining high quality standards",
      placeholder: "Quality Control"
    }
  ];

  const openWhatsApp = () => {
    const phoneNumber = "7019637432";
    const message = "Hello! I'm interested in learning more about SLV Enterprises products and services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={logo} alt="SLV Enterprises Logo" className="nav-logo-img" />
            <span className="logo-text">SLV Enterprises</span>
          </motion.div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#founder">Founder</a>
            <a href="#services">Services</a>
            <a href="#brands">Brands</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to SLV Enterprises
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your Trusted Partner in Distribution & Super Stockist Services
          </motion.p>
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat">
              <span className="stat-number">9+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Districts Covered</span>
            </div>
            <div className="stat">
              <span className="stat-number">400+</span>
              <span className="stat-label">Retailers Served</span>
            </div>
            <div className="stat">
              <span className="stat-number">18+</span>
              <span className="stat-label">Premium Brands</span>
            </div>
          </motion.div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <FaStore size={80} />
            <p>Your Business Image Here</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About SLV Enterprises
          </motion.h2>
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                Founded by <strong>Sunil Kumar V</strong>, SLV Enterprises has been serving as a premier distributor 
                for KGF and KGF rural areas for over 9 years. We take pride in being a super stockist for 
                Kolar and Chikkabalapura Districts, ensuring quality products reach every corner of these regions.
              </p>
              <p>
                Our extensive network includes distributors in each and every taluk across Kolar and 
                Chikkabalapura districts, making us the most reliable distribution partner in the region.
                We proudly serve <strong>400+ retailers</strong> across our distribution network.
              </p>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">
                <FaUsers size={60} />
                <p>Team Photo Here</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="founder">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Founder
          </motion.h2>
          <div className="founder-content">
            <motion.div 
              className="founder-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="founder-photo-placeholder">
                <FaUsers size={80} />
                <p>Sunil Kumar V</p>
                <span>Founder & Proprietor</span>
              </div>
            </motion.div>
            <motion.div 
              className="founder-details"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Sunil Kumar V</h3>
              <p className="founder-title">Founder & Proprietor</p>
              <div className="founder-achievements">
                <div className="achievement-item">
                  <span className="achievement-number">9+</span>
                  <span className="achievement-text">Years of Excellence</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">2</span>
                  <span className="achievement-text">Districts Covered</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">400+</span>
                  <span className="achievement-text">Retailers Network</span>
                </div>
              </div>
              <div className="founder-description">
                <p>
                  With over 9 years of dedicated service in the distribution industry, Sunil Kumar V has 
                  transformed SLV Enterprises into a trusted name across Kolar and Chikkabalapura districts. 
                  His vision of providing quality products to every corner of the region has made SLV 
                  Enterprises the preferred choice for major brands and retailers.
                </p>
                <p>
                  Under his leadership, the company has expanded its network to serve 400+ retailers, 
                  established strong partnerships with 18+ premium brands, and created employment 
                  opportunities across multiple taluks. His commitment to excellence and customer 
                  satisfaction continues to drive the company's growth and success.
                </p>
              </div>
              <div className="founder-quote">
                <blockquote>
                  "Our success lies in building strong relationships with our partners and ensuring 
                  quality products reach every retailer in our network."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="services-grid">
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">
                <FaTruck />
              </div>
              <h3>Distribution Services</h3>
              <p>Comprehensive distribution network covering KGF and KGF rural areas with efficient logistics and timely delivery.</p>
            </motion.div>
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">
                <FaStore />
              </div>
              <h3>Super Stockist</h3>
              <p>Authorized super stockist for Kolar and Chikkabalapura Districts, ensuring product availability across all taluks.</p>
            </motion.div>
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">
                <FaUsers />
              </div>
              <h3>Network Management</h3>
              <p>Managing a vast network of distributors across multiple taluks, ensuring seamless product flow and market coverage.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="brands">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Premium Brands
          </motion.h2>
          <motion.div 
            className="brands-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {brands.map((brand, index) => (
              <motion.div 
                key={index}
                className="brand-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="brand-logo-container">
                  <img 
                    src={brand.imagePath} 
                    alt={brand.name}
                    className="brand-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="brand-logo-placeholder">
                    <FaStore size={30} />
                  </div>
                </div>
                <h4>{brand.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Partners Say
          </motion.h2>
          <motion.div 
            className="testimonials-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -10 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="timeline">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <motion.div 
            className="timeline-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Gallery
          </motion.h2>
          <motion.div 
            className="gallery-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {galleryImages.map((image, index) => (
              <motion.div 
                key={image.id}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="gallery-image-placeholder">
                  <FaStore size={40} />
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          <div className="contact-content">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Address</h4>
                  <p>SLV Enterprises<br />
                  Site No: 71-72, 2nd Cross Ashwath Layout<br />
                  Swarna Kuppa, Robertsonpet<br />
                  KGF 563122</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 7019637432</p>
                  <p>+91 9380293508</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>slventerprises.kgf1@gmail.com</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Your Phone" />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src={logo} alt="SLV Enterprises Logo" className="footer-logo-img" />
                <span>SLV Enterprises</span>
              </div>
              <p>Your trusted partner in distribution and super stockist services across Kolar and Chikkabalapura districts.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#founder">Founder</a>
              <a href="#services">Services</a>
              <a href="#brands">Brands</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <button className="social-link" onClick={() => window.open('https://facebook.com', '_blank')}><FaFacebook /></button>
                <button className="social-link" onClick={() => window.open('https://instagram.com', '_blank')}><FaInstagram /></button>
                <button className="social-link" onClick={openWhatsApp}><FaWhatsapp /></button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SLV Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <motion.button
        className="whatsapp-float"
        onClick={openWhatsApp}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <FaWhatsapp />
      </motion.button>

      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowUp />
        </motion.button>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <motion.div 
          className="image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-placeholder">
              <FaStore size={60} />
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
