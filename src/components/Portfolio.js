import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import myImg from '../WhatsApp Image 2025-04-23 at 19.05.31.jpeg'
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  // Portfolio data
  const portfolioData = {
    name: "Aniket Dwari",
    title: "Full Stack Web Developer",
    education: "B.Tech in IT",
    about: "A highly motivated and detail-oriented Information Technology graduate with strong analytical skills and a passion for web development. Proficient in the MERN stack, with hands-on experience in building responsive and scalable web applications. Eager to contribute technical expertise and creativity in a dynamic and growth-oriented work environment.",
    profile: {
      student: "Netaji Subhash Engineering College",
      field: "Information Technology",
      education: "B.Tech UG",
      languages: "Bengali, Hindi, English",
      skills: ["JAVA", "C", "React", "Node", "Express", "MongoDB", "Postman", "Colab", "SQL", "Oracle"],
      hobbies: "Travelling, Riding, Watching movies",
      resume: ""
    },
    projects: [
      {
        title: "JobSync",
        description: "A job portal website where experienced professionals can apply for jobs based on roles and companies can hire people according to their requirements.",
        technologies: ["React.js from scratch", "Node.js", "Express.js", "MongoDB"]
      },
      {
        title: "Portfolio",
        description: "Provided with all details and skills",
        technologies: ["React.js from scratch", "Framer-Motion"]
      }
    ],
    stats: {
      achievements: ["Certified by Ardent Computech Pvt. Ltd. for VAT course on MERN stack", "Certified by Infosys Springboard for completion of course programming using JAVA.", "Certified by AWS Academy for course on ML Foundations.", "Certified by GFG for course on basics of Gen AI."],
      projects: 2,
      DSA_problem_solving: 100,
      Achievements: 10,
    },
    contact: {
      phone: "+91 8697404083",
      email: "aniketdwari2@gmail.com",
      location: "Howrah, West Bengal"
    }
  };

  const handleGithubClick = () => {
    window.open('https://github.com/dwariAniket', '_blank');
  };

  // Your social media URLs
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/aniket-dwari-4a22b732a/",
    facebook: "https://www.facebook.com/aniket.dwari/",
    twitter: "https://x.com/dwari_Ani2"
  };

  const handleSocialClick = (platform) => {
    window.open(socialLinks[platform], '_blank');
  };


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mnnbyqja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F0F8FF',
      padding: '20px',
      position: 'relative',
      fontFamily: "'Inter', sans-serif",
      color: "#2d3748",
      lineHeight: 1.6
    }}>
      {/* Navigation */}
      <motion.nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 2rem",
          position: "sticky",
          top: 0,
          // background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          zIndex: 100
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>

        </div>

        <div style={{
          display: "flex",
          gap: "2rem",
        }}>
          <a
            href="#home"
            style={{
              textDecoration: "none",
              color: activeSection === 'home' ? "#6366f1" : "#2d3748",
              fontWeight: 500,
              position: "relative",
              padding: "0.5rem 0",
              transition: "color 0.3s"
            }}
            onClick={() => setActiveSection('home')}
            onMouseOver={(e) => {
              e.currentTarget.style.setProperty('--underline-width', '100%');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--underline-width', '0%');
            }}
          >
            Home
            <span style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "var(--underline-width, 0%)",
              height: "2px",
              backgroundColor: "#6366f1",
              transition: "width 0.3s ease",
              borderRadius: "2px"
            }}></span>
          </a>

          <a
            href="#about"
            style={{
              textDecoration: "none",
              color: activeSection === 'about' ? "#6366f1" : "#2d3748",
              fontWeight: 500,
              position: "relative",
              padding: "0.5rem 0",
              transition: "color 0.3s"
            }}
            onClick={() => setActiveSection('about')}
            onMouseOver={(e) => {
              e.currentTarget.style.setProperty('--underline-width', '100%');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--underline-width', '0%');
            }}
          >
            About
            <span style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "var(--underline-width, 0%)",
              height: "2px",
              backgroundColor: "#6366f1",
              transition: "width 0.3s ease",
              borderRadius: "2px"
            }}></span>
          </a>

          <a
            href="#projects"
            style={{
              textDecoration: "none",
              color: activeSection === 'projects' ? "#6366f1" : "#2d3748",
              fontWeight: 500,
              position: "relative",
              padding: "0.5rem 0",
              transition: "color 0.3s"
            }}
            onClick={() => setActiveSection('projects')}
            onMouseOver={(e) => {
              e.currentTarget.style.setProperty('--underline-width', '100%');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--underline-width', '0%');
            }}
          >
            Projects
            <span style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "var(--underline-width, 0%)",
              height: "2px",
              backgroundColor: "#6366f1",
              transition: "width 0.3s ease",
              borderRadius: "2px"
            }}></span>
          </a>

          <a
            href="#contact"
            style={{
              textDecoration: "none",
              color: activeSection === 'contact' ? "#6366f1" : "#2d3748",
              fontWeight: 500,
              position: "relative",
              padding: "0.5rem 0",
              transition: "color 0.3s"
            }}
            onClick={() => setActiveSection('contact')}
            onMouseOver={(e) => {
              e.currentTarget.style.setProperty('--underline-width', '100%');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--underline-width', '0%');
            }}
          >
            Contact
            <span style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "var(--underline-width, 0%)",
              height: "2px",
              backgroundColor: "#6366f1",
              transition: "width 0.3s ease",
              borderRadius: "2px"
            }}></span>
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "center",
        minHeight: "80vh",
        padding: "2rem"
      }}>
        <div style={{
          padding: "2rem"
        }}>
          <motion.h1
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              marginBottom: "1rem",
              lineHeight: 1.2
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I'm <span style={{
              color: "#6366f1",
              position: "relative",
              display: "inline-block"
            }}>{portfolioData.name}</span>
          </motion.h1>

          <motion.h2
            style={{
              fontSize: "1.5rem",
              color: "#6b7280",
              marginBottom: "1rem"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {portfolioData.title}
          </motion.h2>

          <motion.p
            style={{
              fontSize: "1.1rem",
              marginBottom: "2rem",
              color: "#6b7280"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {portfolioData.education}
          </motion.p>

          <motion.div
            style={{
              display: "flex",
              gap: "1rem"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              style={{
                background: "#6366f1",
                color: "white",
                border: "none",
                padding: "0.8rem 2rem",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGithubClick}
            >
              View My Work
            </motion.button>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <motion.button
                style={{
                  background: "transparent",
                  color: "#6366f1",
                  border: "2px solid #6366f1",
                  padding: "0.8rem 2rem",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                Find me on
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      right: 0,
                      marginTop: '0.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      padding: '1rem',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '1.5rem',
                      zIndex: 1000
                    }}
                  >
                    {/* LinkedIn Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSocialClick('linkedin')}
                      style={{ cursor: 'pointer' }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="#0077B5">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </motion.div>

                    {/* Facebook Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSocialClick('facebook')}
                      style={{ cursor: 'pointer' }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </motion.div>

                    {/* Twitter/X Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSocialClick('twitter')}
                      style={{ cursor: 'pointer' }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="#000000">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <div style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <div style={{
            width: "315px",
            height: "340px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #ADD8E6",
            cursor: "pointer",
            transition: "transform 0.3s ease"
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.15)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={myImg}  // Replace with your image path
              alt="Your Name"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: "5rem 2rem"
      }}>
        <motion.h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "3rem",
            position: "relative"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem"
        }}>
          <motion.div
            style={{}}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{
              fontSize: "1.1rem",
              marginBottom: "2rem",
              color: "#6b7280"
            }}>{portfolioData.about}</p>

            <div style={{
              marginTop: "2rem"
            }}>
              <h3 style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "#6366f1"
              }}>Profile</h3>
              <ul style={{
                listStyle: "none"
              }}>
                <li style={{
                  marginBottom: "0.5rem"
                }}><strong>Student at:</strong> {portfolioData.profile.student}</li>
                <li style={{
                  marginBottom: "0.5rem"
                }}><strong>Field:</strong> {portfolioData.profile.field}</li>
                <li style={{
                  marginBottom: "0.5rem"
                }}><strong>Education:</strong> {portfolioData.profile.education}</li>
                <li style={{
                  marginBottom: "0.5rem"
                }}><strong>Languages:</strong> {portfolioData.profile.languages}</li>
                <li style={{
                  marginBottom: "0.5rem"
                }}><strong>Skills:</strong> {portfolioData.profile.skills.join(', ')}</li>
                <li style={{
                  marginBottom: "0.5rem",

                }}><strong>Hobbies:</strong> {portfolioData.profile.hobbies}</li>
                <li style={{
                  marginBottom: "0.5rem",                  
                }}><strong></strong><a href='https://drive.google.com/drive/u/1/folders/1Mp_TvoASbVGtD0HXxjiSEV_Z1IMglV-v?role=writer'><i><b>Resume</b></i></a></li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            style={{}}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              color: "#6366f1"
            }}>Skills</h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
              gap: "1rem"
            }}>
              {portfolioData.profile.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: "white",
                    padding: "0.8rem 1rem",
                    borderRadius: "8px",
                    textAlign: "center",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s",
                    cursor: "default"
                  }}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>          
        </div>

        
      </section>


      <section id="education" style={{
        padding: "5rem 2rem",
        background: "#f9fafb",
        borderRadius: "20px",
        margin: "2rem"
      }}>
        <motion.h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "3rem",
            position: "relative",
            color: "#2d3748"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          EDUCATION
        </motion.h2>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          {/* B.Tech */}
          <motion.div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              borderLeft: "4px solid #6366f1"
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#6366f1",
              marginBottom: "0.5rem"
            }}>
              BACHELOR OF TECHNOLOGY (B.TECH) IN INFORMATION TECHNOLOGY (IT)
            </h3>
            <p style={{
              color: "#6b7280",
              marginBottom: "0.5rem",
              fontWeight: 500
            }}>
              Netaji Subhash Engineering College (MAKAUT University)
            </p>
            <p style={{
              color: "#6b7280",
              marginBottom: "0.5rem"
            }}>
              2023-2026
            </p>
            <p style={{
              color: "#2d3748",
              fontWeight: 600
            }}>
              CGPA: 7.35
            </p>
          </motion.div>

          {/* Diploma */}
          <motion.div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              borderLeft: "4px solid #10b981"
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#10b981",
              marginBottom: "0.5rem"
            }}>
              DIPLOMA
            </h3>
            <p style={{
              color: "#6b7280",
              marginBottom: "0.5rem",
              fontWeight: 500
            }}>
              Ramakrishna Mission Shilpamandira (WBSCTE)
            </p>
            <p style={{
              color: "#6b7280",
              marginBottom: "0.5rem"
            }}>
              2019-2022
            </p>
            <p style={{
              color: "#2d3748",
              fontWeight: 600
            }}>
              CGPA: 8.7 (with Distinction)
            </p>
          </motion.div>

          {/* Secondary Education */}
          <motion.div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              borderLeft: "4px solid #f59e0b"
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#f59e0b",
              marginBottom: "0.5rem"
            }}>
              SECONDARY EDUCATION
            </h3>
            <p style={{
              color: "#6b7280",
              marginBottom: "0.5rem",
              fontWeight: 500
            }}>
              Howrah Zilla School (WBBSE)
            </p>
            <p style={{
              color: "#6b7280",
              marginBottom: "0.5rem"
            }}>
              2016
            </p>
            <p style={{
              color: "#2d3748",
              fontWeight: 600
            }}>
              Scored: 88%
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: "5rem 2rem",
        background: "white",
        borderRadius: "20px",
        margin: "2rem"
      }}>
        <motion.h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "1rem",
            position: "relative"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "3rem",
            fontSize: "1.1rem"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
        </motion.p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginBottom: "4rem"
        }}>
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              style={{
                background: "#f9fafb",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s"
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <h3 style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "#6366f1"
              }}>{project.title}</h3>
              <p style={{
                color: "#6b7280",
                marginBottom: "1.5rem"
              }}>{project.description}</p>
              <div style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap"
              }}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={`${index}-${techIndex}`} style={{
                    background: "#e5e7eb",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    margin: "0.2rem",
                    display: "inline-block"
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{
            textAlign: "center"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {/* Main Content Container */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginBottom: "2rem"
          }}>

            {/* Achievements Section */}
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              textAlign: 'left'
            }}>
              <h2 style={{
                color: "#4f46e5",
                marginBottom: "1.5rem",
                fontSize: "1.5rem",
                textAlign: "center"
              }}>My Achievements</h2>

              {/* Achievements List */}
              <ul style={{
                listStyleType: 'none',
                padding: 0,
                marginBottom: '1rem'
              }}>
                {portfolioData.stats.achievements.map((achievement, index) => (
                  <li key={index} style={{
                    padding: '0.8rem 0.8rem 0.8rem 2.2rem',
                    marginBottom: '0.7rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    position: 'relative',
                    fontSize: '0.85rem',
                    lineHeight: '1.4',
                    color: '#334155',
                    borderLeft: '3px solid #4f46e5'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0.8rem',
                      color: '#4f46e5',
                      fontSize: '1.2rem',
                      top: '50%',
                      transform: 'translateY(-50%)'
                    }}>•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
              <p style={{
                fontSize: '1rem',
                color: '#6b7580ff',
                fontStyle: 'italic',
                textAlign: 'start'
              }}>
               <b>More on Resume</b> 
              </p>
            </div>

            {/* Interests Section - Fixed at bottom */}
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{
                color: "#4f46e5",
                marginBottom: "1rem",
                fontSize: "1.3rem",
                textAlign: 'center'
              }}>My Interests</h3>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.8rem',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {['Full Stack Web Development', 'Core JAVA', 'Gen AI',
                  'UI/UX Design', 'Open Source', 'Problem Solving'].map((interest, index) => (
                    <span key={index} style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#eef2ff',
                      color: '#4f46e5',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      border: '1px solid #c7d2fe'
                    }}>
                      {interest}
                    </span>
                  ))}
              </div>

              {/* Stats Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginTop: '1.5rem'
              }}>
                <div style={{
                  textAlign: "center",
                  padding: '1.2rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px'
                }}>
                  <h3 style={{
                    fontSize: "2rem",
                    color: "#6366f1",
                    marginBottom: "0.4rem",
                    fontWeight: '600'
                  }}>{portfolioData.stats.projects}+</h3>
                  <p style={{
                    color: "#6b7280",
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>Projects</p>
                </div>

                <div style={{
                  textAlign: "center",
                  padding: '1.2rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px'
                }}>
                  <h3 style={{
                    fontSize: "2rem",
                    color: "#6366f1",
                    marginBottom: "0.4rem",
                    fontWeight: '600'
                  }}>{portfolioData.stats.DSA_problem_solving}+</h3>
                  <p style={{
                    color: "#6b7280",
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>DSA Problems Solved</p>
                </div>

                <div style={{
                  textAlign: "center",
                  padding: '1.2rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px'
                }}>
                  <h3 style={{
                    fontSize: "2rem",
                    color: "#6366f1",
                    marginBottom: "0.4rem",
                    fontWeight: '600'
                  }}>{portfolioData.stats.Achievements}+</h3>
                  <p style={{
                    color: "#6b7280",
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>Achievements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            borderLeft: '4px solid #6366f1'
          }}>
            <p style={{
              color: '#374151',
              fontSize: '1rem',
              fontStyle: 'italic',
              lineHeight: '1.6',
              margin: 0,
              textAlign: 'center'
            }}>
              "Passionate about uncovering hidden insights in data to solve complex challenges and drive strategic decisions."
            </p>
            <p style={{
              marginTop: '1rem',
              textAlign: 'center'
            }}>
              <a href="https://github.com/dwariAniket?tab=repositories" style={{
                color: '#6366f1',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1.2rem'
              }}>
                <b>More projects on Github →</b>
              </a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: "5rem 2rem",
        background: "white",
        borderRadius: "20px",
        margin: "2rem"
      }}>
        <motion.h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "1rem",
            position: "relative"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "3rem",
            fontSize: "1.1rem"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Below are the details to reach out to me!
        </motion.p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem"
        }}>
          <motion.div
            style={{}}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              color: "#6366f1"
            }}>Get in Touch</h3>

            <div style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1.5rem"
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                background: "#6366f1",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "1rem",
                fontSize: "1.2rem"
              }}>📍</div>
              <div style={{ flex: 1 }}> <h4 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Location</h4> <p style={{ color: "#6b7280" }}>{portfolioData.contact.location}</p> </div> </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1.5rem"
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                background: "#6366f1",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "1rem",
                fontSize: "1.2rem"
              }}>📞</div>
              <div style={{
                flex: 1
              }}>
                <h4 style={{
                  marginBottom: "0.5rem",
                  fontSize: "1.1rem"
                }}>Phone Number</h4>
                <p style={{
                  color: "#6b7280"
                }}>{portfolioData.contact.phone}</p>
              </div>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1.5rem"
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                background: "#6366f1",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "1rem",
                fontSize: "1.2rem"
              }}>✉️</div>
              <div style={{
                flex: 1
              }}>
                <h4 style={{
                  marginBottom: "0.5rem",
                  fontSize: "1.1rem"
                }}>Email Address</h4>
                <p style={{
                  color: "#6b7280"
                }}>{portfolioData.contact.email}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              color: "#6366f1"
            }}>Have a Question?</h3>

            {submitStatus === 'success' && (
              <div style={{
                padding: "1rem",
                backgroundColor: "#dcfce7",
                color: "#166534",
                borderRadius: "8px",
                marginBottom: "1rem",
                border: "1px solid #bbf7d0"
              }}>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{
                padding: "1rem",
                backgroundColor: "#fee2e2",
                color: "#991b1b",
                borderRadius: "8px",
                marginBottom: "1rem",
                border: "1px solid #fecaca"
              }}>
                There was an error sending your message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1.5rem" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "1rem"
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "1rem"
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    resize: "vertical"
                  }}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting ? "#9ca3af" : "#6366f1",
                  color: "white",
                  border: "none",
                  padding: "0.8rem 2rem",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  width: "100%"
                }}
                whileHover={isSubmitting ? {} : { scale: 1.05 }}
                whileTap={isSubmitting ? {} : { scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "2rem",
        marginTop: "3rem",
        borderTop: "1px solid #e5e7eb"
      }}>
        <p style={{
          color: "#6b7280"
        }}>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
