import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faDownload,
  faExternalLinkAlt,
  faCode,
  faPalette,
  faServer,
  faDatabase,
  faTools,
  faRocket,
  faHeart,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import './App.css';

// Home Component
function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Md. Robayed Molla</span>
            </h1>
            <p className="hero-subtitle">Computer Science Engineer & Full Stack Developer</p>
            <p className="hero-description">
              I create innovative solutions using modern technologies. Passionate about 
              problem-solving, competitive programming, and building scalable applications.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                <FontAwesomeIcon icon={faRocket} /> View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                <FontAwesomeIcon icon={faEnvelope} /> Get In Touch
              </button>
              <a href={process.env.PUBLIC_URL + "/cv/Md_Robayed_Molla_CV.pdf"} className="btn btn-outline" download>
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Robayed110" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/md-robayed-molla-a45087344/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <img src={process.env.PUBLIC_URL + "/photo/robayed.jpg"} alt="Md. Robayed Molla"  />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <FontAwesomeIcon icon={faHeart} className="scroll-icon" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faStar} /> About Me
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Computer Science and Engineering student at Khulna University of Engineering & Technology (KUET) 
                with a strong passion for problem-solving and software development. I specialize in full-stack development, 
                machine learning, and competitive programming.
              </p>
              <p>
                With expertise in multiple programming languages and frameworks, I enjoy building scalable applications 
                that solve real-world problems. I'm also an active competitive programmer with 900+ problems solved 
                across multiple platforms.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>900+</h3>
                  <p>Problems Solved</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Major Projects</p>
                </div>
                <div className="stat">
                  <h3>1291</h3>
                  <p>Codeforces Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faTools} /> Skills & Technologies
          </h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3><FontAwesomeIcon icon={faCode} /> Programming Languages</h3>
              <div className="skill-items">
                <span className="skill-item">C</span>
                <span className="skill-item">C++</span>
                <span className="skill-item">Python</span>
                <span className="skill-item">Java</span>
                <span className="skill-item">JavaScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3><FontAwesomeIcon icon={faPalette} /> Web Technologies</h3>
              <div className="skill-items">
                <span className="skill-item">HTML</span>
                <span className="skill-item">CSS</span>
                <span className="skill-item">React</span>
                <span className="skill-item">Laravel</span>
                <span className="skill-item">Node.js</span>
              </div>
            </div>
            <div className="skill-category">
              <h3><FontAwesomeIcon icon={faDatabase} /> Databases & Others</h3>
              <div className="skill-items">
                <span className="skill-item">MySQL</span>
                <span className="skill-item">Firebase</span>
                <span className="skill-item">Oracle SQL</span>
                <span className="skill-item">Solidity</span>
                <span className="skill-item">NLP</span>
              </div>
            </div>
            <div className="skill-category">
              <h3><FontAwesomeIcon icon={faTools} /> Tools & Technologies</h3>
              <div className="skill-items">
                <span className="skill-item">Git</span>
                <span className="skill-item">GitHub</span>
                <span className="skill-item">Android SDK</span>
                <span className="skill-item">Truffle</span>
                <span className="skill-item">LLMs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faRocket} /> Featured Projects
          </h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL +"/projects/ai-review-system.svg"} alt="AI Review Management System" />
                <div className="project-overlay">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
              <div className="project-content">
                <h3>AliExpress Product Review Reply Management System</h3>
                <p>An intelligent system for fake review detection, category classification, sentiment analysis, and generating response to product reviews using LLMs. Achieved high accuracy with LoRA, QLoRA, and quantization optimization.</p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>NLP</span>
                  <span>LLMs</span>
                  <span>Machine Learning</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Robayed110/Product-Review-Reply-Management-System" className="project-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + "/projects/bus-ticketing.svg"} alt="Easy-Travel Bus Ticketing" />
                <div className="project-overlay">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
              <div className="project-content">
                <h3>Easy-Travel - Bus Ticketing Website</h3>
                <p>A dynamic bus ticket booking website with route-based search, real-time schedules, seat selection, ticket booking, and admin activities with MySQL integration.</p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                  <span>Laravel</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Robayed110/EasyTravel" className="project-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + "/projects/car-app.svg"} alt="SellXChange Car App" />
                <div className="project-overlay">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
              <div className="project-content">
                <h3>SellXChange - Car Purchasing Android App</h3>
                <p>An Android app for car purchasing with user authentication, product browsing, cart management, payments, and admin features for managing categories and products.</p>
                <div className="project-tech">
                  <span>Java</span>
                  <span>Android SDK</span>
                  <span>Firebase</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Robayed110/SellXChange" className="project-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + "/projects/blockchain.svg"} alt="Blockchain Verification" />
                <div className="project-overlay">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
              <div className="project-content">
                <h3>Fake Product Identification using Blockchain</h3>
                <p>A decentralized web application to identify counterfeit products using Ethereum blockchain. Smart contracts in Solidity deployed on Ganache via Truffle with MetaMask integration.</p>
                <div className="project-tech">
                  <span>Solidity</span>
                  <span>Truffle</span>
                  <span>Ganache</span>
                  <span>Web3.js</span>
                  <span>MetaMask</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Robayed110/Fake-Product-Identification" className="project-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + "/projects/temperature-dashboard.svg"} alt="Temperature Dashboard" />
                <div className="project-overlay">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
              <div className="project-content">
                <h3>Temperature Dashboard - Real-time Monitoring</h3>
                <p>A real-time temperature visualization dashboard featuring RESTful API with rate limiting, Chart.js-based live graph updates, logging, and performance-tested backend.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>Chart.js</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Robayed110/temperature-api" className="project-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + "/projects/backgammon-game.svg"} alt="Backgammon AI Game" />
                <div className="project-overlay">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
              <div className="project-content">
                <h3>Backgammon Game - AI Implementation</h3>
                <p>Backgammon AI Game with Tkinter-based GUI featuring AI players using Heuristic approach and Minimax algorithms, offering Normal and Hard modes for strategic gameplay.</p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Pygame</span>
                  <span>AI Algorithms</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Robayed110/BackgammonAIGame" className="project-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + "/projects/cardiac-recorder.svg"} alt="Cardiac Recorder Health App" />
                <div className="project-overlay">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
              <div className="project-content">
                <h3>Cardiac Recorder - Android Health Monitoring App</h3>
                <p>Developed a mobile application to record and track users' systolic & diastolic blood pressure and heart rate. The app helps users monitor their cardiovascular health over time, offering insights for improved lifestyle and decision-making. Features include real-time data entry, historical record tracking, and user-friendly health monitoring interface.</p>
                <div className="project-tech">
                  <span>Java</span>
                  <span>Android Studio</span>
                  <span>Firebase</span>
                  <span>Health Monitoring</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Robayed110/CardiacRecorder" className="project-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + "/projects/biowell.svg"} alt="BioWell iOS Health App" />
                <div className="project-overlay">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
              <div className="project-content">
                <h3>BioWell - iOS Health Monitoring Application</h3>
                <p>iOS application for monitoring a person's health, diabetic prediction and used API for showing corona statistics. Features comprehensive health tracking with real-time data visualization and predictive analytics for better health management.</p>
                <div className="project-tech">
                  <span>Swift</span>
                  <span>iOS</span>
                  <span>Health APIs</span>
                  <span>Predictive Analytics</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Robayed110/BioWell" className="project-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faEnvelope} /> Get In Touch
          </h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <span>mdrobayedmolla765@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <span>+8801906919129</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                  <span>Madhukhali, Faridpur, Bangladesh</span>
                </div>
              </div>
              <div className="social-links contact-social">
                <a href="https://github.com/Robayed110" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/md-robayed-molla-a45087344/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;
              
              const subject = `Portfolio Contact from ${name}`;
              const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
              
              window.open(`mailto:mdrobayedmolla765@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
            }}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faEnvelope} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

// Navigation Component
function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on nav click (mobile)
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <FontAwesomeIcon icon={faCode} />
          <span>Robayed</span>
        </div>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-menu${menuOpen ? ' show' : ''}`}>
          <li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
            <button onClick={() => handleNavClick('home')}>Home</button>
          </li>
          <li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
            <button onClick={() => handleNavClick('about')}>About</button>
          </li>
          <li className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}>
            <button onClick={() => handleNavClick('skills')}>Skills</button>
          </li>
          <li className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>
            <button onClick={() => handleNavClick('projects')}>Projects</button>
          </li>
          <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
            <button onClick={() => handleNavClick('contact')}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Main App Component
function App() {
  return (
    
    <Router basename="/Portfolio">
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Md. Robayed Molla. Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
