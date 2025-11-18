import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Bonjour, je suis</span>
              <span className="name">Yann Hallage</span>
              <span className="role">Développeur Full Stack</span>
            </h1>
            <p className="hero-description">
              Passionné par le développement web et les technologies modernes,
              je crée des applications performantes et élégantes.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                Voir mes projets
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Me contacter
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="code-snippet">
                <div className="code-line">
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-variable">developer</span> = {"{"}
                </div>
                <div className="code-line indent">
                  <span className="code-property">name</span>:{" "}
                  <span className="code-string">"Yann Hallage"</span>,
                </div>
                <div className="code-line indent">
                  <span className="code-property">role</span>:{" "}
                  <span className="code-string">"Full Stack Developer"</span>,
                </div>
                <div className="code-line indent">
                  <span className="code-property">passion</span>:{" "}
                  <span className="code-string">"Créer des solutions innovantes"</span>
                </div>
                <div className="code-line">{"};"}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      <section className="quick-stats">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Projets</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Passion</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

