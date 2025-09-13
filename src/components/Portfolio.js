import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Portfolio data
  const portfolioData = {
    name: "Aniket",
    title: "Full Stack Web Developer",
    education: "B.Tech in IT",
    about: "A highly motivated and detail-oriented Information Technology graduate with strong analytical skills and a passion for web development. Proficient in the MERN stack, with hands-on experience in building responsive and scalable web applications. Eager to contribute technical expertise and creativity in a dynamic and growth-oriented work environment.",
    profile: {
      student: "Netaji Subhash Engineering College",
      field: "Information Technology",
      education: "B.Tech",
      languages: "Bengali, Hindi, English",
      skills: ["JAVA, React, Node, Express, MongoDB, SQL, Oracle, Web Dev, Android App Dev"],
      hobbies: "Travelling, Riding, Watching movies"
    },
    projects: [
      {
        title: "JobSync",
        description: "A job portal website where experienced professionals can apply for jobs based on roles and companies can hire people according to their requirements.",
        technologies: ["React.js from scratch, Node.js, Express.js, MongoDB"]
      },
      {
        title: "Portfolio",
        description: "Provided with all details and skills",
        technologies: ["React.js from scratch, Framer-Motion"]
      }
    ],
    stats: {
      achievements: ["Certified by Ardent Computech Pvt. Ltd. for VAT course on MERN stack",
        "Certified by Infosys Springboard for completion of course programming using JAVA.",
        "Certified by AWS Academy for course on ML Foundations.",
        "Certified by GFG for course on basics of Gen AI."],
      projects: 2,
    },
    contact: {
      phone: "+91 8697404083",
      email: "aniketdwari2@gmail.com",
      location: "Howrah, West Bengal"
    }
  };

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
          gap: "2rem"
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
          >
            Home
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
          >
            About
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
          >
            Projects
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
          >
            Contact
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
            >
              View My Work
            </motion.button>
            <motion.button
              style={{
                background: "transparent",
                color: "#6366f1",
                border: "2px solid #6366f1",
                padding: "0.8rem 2rem",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div style={{
            background: "white",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            position: "absolute",
            top: "20%",
            right: "10%",
            zIndex: 2,
            animation: "float 3s ease-in-out infinite"
          }}>
            <div style={{
              textAlign: "center"
            }}>
              <span style={{
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#6366f1",
                display: "block"
              }}>$100/hr</span>
              <span style={{
                color: "#6b7280",
                fontSize: "0.9rem"
              }}>Freelance Rate</span>
            </div>
          </div>
          <div style={{
            width: "300px",
            height: "300px",
            background: "linear-gradient(135deg, #6366f1, #10b981)",
            borderRadius: "50%",
            opacity: 0.8,
            filter: "blur(80px)"
          }}></div>
        </motion.div>
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
                  marginBottom: "0.5rem"
                }}><strong>Hobbies:</strong> {portfolioData.profile.hobbies}</li>
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
                  transition={{ delay: index * 0.1 }}
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
                  <span key={techIndex} style={{
                    background: "#e5e7eb",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.8rem"
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
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
            marginBottom: "2rem"
          }}>
            <div style={{
              textAlign: "center"
            }}>
              <h3 style={{
                fontSize: "2.5rem",
                color: "#6366f1",
                marginBottom: "0.5rem"
              }}>{portfolioData.stats.achievements}+</h3>
              <p style={{
                color: "#6b7280"
              }}>Achievements</p>
            </div>
            <div style={{
              textAlign: "center"
            }}>
              <h3 style={{
                fontSize: "2.5rem",
                color: "#6366f1",
                marginBottom: "0.5rem"
              }}>{portfolioData.stats.projects}+</h3>
              <p style={{
                color: "#6b7280"
              }}>Projects</p>
            </div>
            <div style={{
              textAlign: "center"
            }}>
              <h3 style={{
                fontSize: "2.5rem",
                color: "#6366f1",
                marginBottom: "0.5rem"
              }}>{portfolioData.stats.meetings}+</h3>
              <p style={{
                color: "#6b7280"
              }}>Meetings</p>
            </div>
            <div style={{
              textAlign: "center"
            }}>
              <h3 style={{
                fontSize: "2.5rem",
                color: "#6366f1",
                marginBottom: "0.5rem"
              }}>{portfolioData.stats.clients}+</h3>
              <p style={{
                color: "#6b7280"
              }}>Clients</p>
            </div>
          </div>

          <motion.p
            style={{
              fontSize: "1.2rem",
              color: "#6b7280",
              marginBottom: "2rem",
              fontStyle: "italic"
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            I love to solve business problems using hidden data stores
          </motion.p>

          <motion.button
            style={{
              background: "#6366f1",
              color: "white",
              border: "none",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More projects on Github
          </motion.button>
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
            }}>Have a Question?</h3>

            <form style={{}}
              onSubmit={(e) => e.preventDefault()}
            >
              <div style={{
                marginBottom: "1.5rem"
              }}>
                <input
                  type="text"
                  placeholder="Your Name"
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

              <div style={{
                marginBottom: "1.5rem"
              }}>
                <input
                  type="email"
                  placeholder="Your Email"
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

              <div style={{
                marginBottom: "1.5rem"
              }}>
                <textarea
                  placeholder="Your Message"
                  rows="5"
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
                style={{
                  background: "#6366f1",
                  color: "white",
                  border: "none",
                  padding: "0.8rem 2rem",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                  width: "100%"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
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
