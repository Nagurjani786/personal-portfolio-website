
import React, { useEffect, useRef, useState } from "react";

function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [

    
{
  title: "FashionStore – E-commerce Web Application",
  desc:
    "Developed a Java-based e-commerce web application using JSP, Jakarta Servlets, JDBC, and MySQL. Implemented product browsing, user registration and login, session-based shopping cart management, and cash-on-delivery checkout using the MVC architecture and DAO pattern.",
  tools: [
    "Java 17",
    "JSP",
    "Jakarta Servlets",
    "JDBC",
    "MySQL",
    "Maven",
    "MVC",
    "DAO Pattern"
  ],
  github: "https://github.com/Nagurjani786/FashionStore",
  icon: "🛍️",
},

    {
      title: "Wanderly – AI Travel Planner",
      desc:
        "Developed a responsive AI-powered travel planning application using React, JavaScript, HTML, CSS, and Vite. Integrated Google Gemini AI to provide an AI travel assistant and generate personalized day-by-day trip itineraries, along with Open-Meteo API for weather information.",
      tools: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Vite",
        "Google Gemini AI",
        "Open-Meteo API",
      ],
      live: "https://wanderly-ai-planner.netlify.app/",
      github:
        "https://github.com/Nagurjani786/wanderly-ai-travel-planner",
      icon: "✈️",
    },

    {
      title: "Personal Portfolio Website",
      desc:
        "Designed and developed a responsive personal portfolio website to showcase my technical skills, projects, education, experience, resume, and contact information with a modern and interactive user interface.",
      tools: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive Design",
      ],
      live:
        "https://shaik-nagur-jani-portfolio-website.netlify.app/",
      github:
        "https://github.com/Nagurjani786/personal-portfolio-website",
      icon: "💼",
    },

    {
      title: "Movie Search Web Application",
      desc:
        "Developed a responsive movie web application featuring trending and Top 10 movies, movie search and details, trailer viewing, category-based browsing, and ticket booking.",
      tools: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "REST API",
      ],
      live:
        "https://my-movie-app-website.netlify.app/",
      github:
        "https://github.com/Nagurjani786/myCinemasApp",
      icon: "🎬",
    },

    {
      title: "Food Ordering Web Application",
      desc:
        "Developed a responsive food delivery web application with food browsing, category-based navigation, search functionality, product details, cart management, and interactive UI components.",
      tools: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      live:
        "https://my-food-app-project.netlify.app/",
      github:
        "https://github.com/Nagurjani786/FoodApp",
      icon: "🍔",
    },

    {
      title: "Semiconductor Wafer Defect Detection",
      desc:
        "Developed a deep learning model using ResNet50 and CBAM for wafer defect classification on the WM811K dataset, including data preprocessing, model training, and performance evaluation.",
      tools: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "ResNet50",
        "CBAM",
        "Google Colab",
      ],
      github:
        "https://github.com/Nagurjani786/Semi-Conductor-Wafer-Defect-Detection-Using-Deep-Learning",
      icon: "🔬",
    },

    {
      title: "Java User Registration Web Application",
      desc:
        "Developed a Java-based user registration web application using Servlets, JDBC, and MySQL. Implemented form handling, database connectivity, user registration, validation, and MVC-based application structure.",
      tools: [
        "Java",
        "JDBC",
        "Servlets",
        "MySQL",
        "HTML",
        "CSS",
        "MVC",
      ],
      github:
        "https://github.com/Nagurjani786/User-Registration-Web-App",
      icon: "☕",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={
        visible
          ? "projects-section projects-visible"
          : "projects-section"
      }
    >
      {/* Background Effects */}
      <div className="project-bg-glow glow-one"></div>
      <div className="project-bg-glow glow-two"></div>
      <div className="project-bg-glow glow-three"></div>

      {/* Floating Particles */}
      <div className="floating-particle particle-one"></div>
      <div className="floating-particle particle-two"></div>
      <div className="floating-particle particle-three"></div>
      <div className="floating-particle particle-four"></div>

      {/* Section Header */}
      <div className="projects-header">
        <span className="projects-label">
          MY WORK
        </span>

        <h2>
          My <span>Projects</span>
        </h2>

        <p>
          A collection of projects showcasing my skills in
          Java, React, JavaScript, AI, APIs, databases, and
          deep learning.
        </p>
      </div>

      {/* Projects Container */}
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

      <style>{`
        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .projects-section {
          position: relative;
          width: 100%;
          min-height: 100vh;

          padding: 110px 20px;

          box-sizing: border-box;

          overflow: hidden;

          scroll-margin-top: 80px;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(56, 189, 248, 0.06),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #020617 0%,
              #0f172a 50%,
              #020617 100%
            );
        }

        /* =====================================================
           BACKGROUND GLOWS
        ===================================================== */

        .project-bg-glow {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(5px);

          z-index: 0;
        }

        .glow-one {
          width: 420px;
          height: 420px;

          top: -180px;
          left: -140px;

          background:
            radial-gradient(
              circle,
              rgba(56, 189, 248, 0.17),
              transparent 70%
            );

          animation:
            projectGlowMove 7s ease-in-out infinite;
        }

        .glow-two {
          width: 480px;
          height: 480px;

          right: -180px;
          bottom: -200px;

          background:
            radial-gradient(
              circle,
              rgba(139, 92, 246, 0.15),
              transparent 70%
            );

          animation:
            projectGlowMove 9s ease-in-out infinite reverse;
        }

        .glow-three {
          width: 280px;
          height: 280px;

          top: 45%;
          left: 50%;

          transform:
            translate(-50%, -50%);

          background:
            radial-gradient(
              circle,
              rgba(34, 211, 238, 0.04),
              transparent 70%
            );

          animation:
            centerGlow 5s ease-in-out infinite;
        }

        /* =====================================================
           FLOATING PARTICLES
        ===================================================== */

        .floating-particle {
          position: absolute;

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #38bdf8;

          opacity: 0.45;

          box-shadow:
            0 0 12px rgba(56, 189, 248, 0.8);

          pointer-events: none;

          z-index: 1;
        }

        .particle-one {
          top: 18%;
          left: 8%;

          animation:
            particleFloat 5s ease-in-out infinite;
        }

        .particle-two {
          top: 30%;
          right: 10%;

          animation:
            particleFloat 7s ease-in-out infinite 1s;
        }

        .particle-three {
          bottom: 25%;
          left: 15%;

          animation:
            particleFloat 6s ease-in-out infinite 2s;
        }

        .particle-four {
          bottom: 12%;
          right: 20%;

          animation:
            particleFloat 8s ease-in-out infinite 0.5s;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .projects-header {
          position: relative;

          z-index: 3;

          max-width: 780px;

          margin:
            0 auto 55px;

          text-align: center;

          opacity: 0;

          transform:
            translateY(35px);
        }

        .projects-visible .projects-header {
          animation:
            headerReveal
            0.9s
            cubic-bezier(.2,.8,.2,1)
            forwards;
        }

        .projects-label {
          display: inline-block;

          padding: 7px 15px;

          margin-bottom: 14px;

          border:
            1px solid rgba(56, 189, 248, 0.35);

          border-radius: 30px;

          background:
            rgba(56, 189, 248, 0.08);

          color: #38bdf8;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 2px;

          box-shadow:
            0 0 20px rgba(56, 189, 248, 0.08);

          animation:
            labelPulse 3s ease-in-out infinite;
        }

        .projects-header h2 {
          margin:
            0 0 15px;

          color: white;

          font-size:
            clamp(32px, 5vw, 46px);

          font-weight: 800;

          line-height: 1.2;

          letter-spacing: -0.8px;
        }

        .projects-header h2 span {
          position: relative;

          color: #38bdf8;

          text-shadow:
            0 0 25px rgba(56, 189, 248, 0.3);
        }

        .projects-header h2 span::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -5px;

          width: 100%;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #38bdf8,
              transparent
            );

          transform:
            scaleX(0);

          transform-origin:
            center;

          animation:
            titleLine
            1.2s
            ease
            0.7s
            forwards;
        }

        .projects-header p {
          max-width: 680px;

          margin:
            0 auto;

          color: #94a3b8;

          font-size: 15px;

          line-height: 1.8;
        }

        /* =====================================================
           PROJECT CONTAINER
        ===================================================== */

        .projects-container {
          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 1280px;

          margin: 0 auto;

          padding: 32px;

          box-sizing: border-box;

          border-radius: 25px;

          border:
            1px solid rgba(56, 189, 248, 0.13);

          background:
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.92),
              rgba(2, 6, 23, 0.98)
            );

          box-shadow:
            0 0 45px rgba(0, 255, 255, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.03);

          backdrop-filter:
            blur(14px);

          -webkit-backdrop-filter:
            blur(14px);

          opacity: 0;

          transform:
            translateY(40px);
        }

        .projects-visible .projects-container {
          animation:
            containerReveal
            1s
            cubic-bezier(.2,.8,.2,1)
            0.15s
            forwards;
        }

        /* =====================================================
           GRID
        ===================================================== */

        .projects-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 25px;

          width: 100%;
        }

        /* =====================================================
           PROJECT CARD
        ===================================================== */

        .project-card {
          position: relative;

          width: 100%;

          min-width: 0;

          padding: 25px;

          box-sizing: border-box;

          overflow: hidden;

          border-radius: 18px;

          border:
            1px solid rgba(56, 189, 248, 0.12);

          background:
            linear-gradient(
              135deg,
              rgba(15, 23, 42, 0.98),
              rgba(2, 6, 23, 0.98)
            );

          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.25);

          opacity: 0;

          transform:
            translateY(50px)
            scale(0.96);

          transition:
            transform 0.45s cubic-bezier(.2,.8,.2,1),
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .projects-visible .project-card {
          animation:
            cardReveal
            0.75s
            cubic-bezier(.2,.8,.2,1)
            forwards;

          animation-delay:
            calc(
              var(--card-index) * 0.12s + 0.35s
            );
        }

        .project-card:hover {
          transform:
            translateY(-10px)
            scale(1.015);

          border-color:
            rgba(56, 189, 248, 0.5);

          box-shadow:
            0 25px 55px rgba(0, 0, 0, 0.4),
            0 0 35px rgba(56, 189, 248, 0.12);
        }

        .project-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #38bdf8,
              #8b5cf6,
              transparent
            );

          transform:
            scaleX(0);

          transform-origin:
            left;

          transition:
            transform 0.5s ease;
        }

        .project-card:hover::before {
          transform:
            scaleX(1);
        }

        /* =====================================================
           CARD GLOW
        ===================================================== */

        .card-glow {
          position: absolute;

          width: 180px;
          height: 180px;

          top: -90px;
          right: -90px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(56, 189, 248, 0.16),
              transparent 70%
            );

          opacity: 0.5;

          transition:
            transform 0.5s ease,
            opacity 0.5s ease;
        }

        .project-card:hover .card-glow {
          opacity: 1;

          transform:
            scale(1.5);
        }

        /* =====================================================
           CARD TOP
        ===================================================== */

        .project-top {
          position: relative;

          z-index: 2;

          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 20px;
        }

        .project-icon {
          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 15px;

          background:
            linear-gradient(
              135deg,
              rgba(56, 189, 248, 0.16),
              rgba(37, 99, 235, 0.1)
            );

          border:
            1px solid rgba(56, 189, 248, 0.2);

          font-size: 30px;

          box-shadow:
            inset 0 0 20px rgba(56, 189, 248, 0.04);

          transition:
            transform 0.4s cubic-bezier(.2,.8,.2,1),
            box-shadow 0.4s ease;
        }

        .project-card:hover .project-icon {
          transform:
            scale(1.12)
            rotate(-5deg);

          box-shadow:
            0 0 30px rgba(56, 189, 248, 0.2);
        }

        .project-number {
          color:
            rgba(148, 163, 184, 0.5);

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 1px;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .project-card:hover .project-number {
          color: #38bdf8;

          transform:
            translateX(-3px);
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .project-card h3 {
          position: relative;

          z-index: 2;

          margin:
            0 0 12px;

          color: white;

          font-size: 21px;

          font-weight: 700;

          line-height: 1.4;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .project-card:hover h3 {
          color: #e0f2fe;

          transform:
            translateX(3px);
        }

        .project-description {
          position: relative;

          z-index: 2;

          margin: 0;

          min-height: 95px;

          color: #94a3b8;

          font-size: 14px;

          line-height: 1.75;

          transition:
            color 0.3s ease;
        }

        .project-card:hover .project-description {
          color: #a8b5c7;
        }

        /* =====================================================
           TECHNOLOGY BADGES
        ===================================================== */

        .tech-list {
          position: relative;

          z-index: 2;

          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin:
            20px 0;
        }

        .tech-badge {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          padding:
            6px 11px;

          border-radius: 20px;

          color: #bae6fd;

          background:
            rgba(56, 189, 248, 0.07);

          border:
            1px solid rgba(56, 189, 248, 0.17);

          font-size: 11px;

          font-weight: 600;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            color 0.25s ease;
        }

        .tech-badge:hover {
          color: #f8fafc;

          background:
            rgba(56, 189, 248, 0.15);

          border-color:
            rgba(56, 189, 248, 0.45);

          transform:
            translateY(-3px);

          box-shadow:
            0 6px 18px rgba(56, 189, 248, 0.12);
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .project-buttons {
          position: relative;

          z-index: 2;

          display: flex;

          gap: 10px;

          width: 100%;
        }

        .project-button {
          position: relative;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          flex: 1;

          padding:
            11px 14px;

          box-sizing: border-box;

          border-radius: 9px;

          text-decoration: none;

          font-size: 12px;

          font-weight: 700;

          overflow: hidden;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .project-button::before {
          content: "";

          position: absolute;

          top: 0;
          left: -100%;

          width: 100%;
          height: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.16),
              transparent
            );

          transition:
            left 0.55s ease;
        }

        .project-button:hover::before {
          left: 100%;
        }

        /* Live Button */

        .live-button {
          color: white;

          background:
            linear-gradient(
              135deg,
              #38bdf8,
              #2563eb
            );

          box-shadow:
            0 5px 18px rgba(37, 99, 235, 0.3);
        }

        .live-button:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 12px 30px rgba(37, 99, 235, 0.5);
        }

        /* GitHub Button */

        .github-button {
          color: #bae6fd;

          background:
            rgba(15, 23, 42, 0.8);

          border:
            1px solid rgba(56, 189, 248, 0.3);
        }

        .github-button:hover {
          color: white;

          transform:
            translateY(-4px);

          background:
            rgba(56, 189, 248, 0.1);

          border-color:
            rgba(56, 189, 248, 0.55);

          box-shadow:
            0 10px 25px rgba(56, 189, 248, 0.15);
        }

        .button-arrow {
          transition:
            transform 0.3s ease;
        }

        .project-button:hover .button-arrow {
          transform:
            translate(3px, -3px);
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes headerReveal {
          from {
            opacity: 0;

            transform:
              translateY(35px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        @keyframes containerReveal {
          from {
            opacity: 0;

            transform:
              translateY(40px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        @keyframes cardReveal {
          from {
            opacity: 0;

            transform:
              translateY(50px)
              scale(0.96);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }

        @keyframes projectGlowMove {
          0%,
          100% {
            transform:
              scale(1)
              translate(0, 0);
          }

          50% {
            transform:
              scale(1.15)
              translate(20px, 15px);
          }
        }

        @keyframes centerGlow {
          0%,
          100% {
            opacity: 0.4;

            transform:
              translate(-50%, -50%)
              scale(1);
          }

          50% {
            opacity: 0.8;

            transform:
              translate(-50%, -50%)
              scale(1.2);
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform:
              translateY(0)
              translateX(0);
          }

          50% {
            transform:
              translateY(-25px)
              translateX(10px);
          }
        }

        @keyframes labelPulse {
          0%,
          100% {
            box-shadow:
              0 0 15px rgba(56, 189, 248, 0.06);
          }

          50% {
            box-shadow:
              0 0 25px rgba(56, 189, 248, 0.14);
          }
        }

        @keyframes titleLine {
          from {
            transform:
              scaleX(0);
          }

          to {
            transform:
              scaleX(1);
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .projects-section {
            padding:
              90px 18px;
          }

          .projects-container {
            padding:
              25px;

            border-radius:
              22px;
          }

          .projects-grid {
            grid-template-columns:
              1fr;

            gap:
              22px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .projects-section {
            padding:
              75px 12px;
          }

          .projects-header {
            margin-bottom:
              38px;
          }

          .projects-label {
            padding:
              6px 12px;

            font-size:
              10px;
          }

          .projects-header p {
            font-size:
              13px;
          }

          .projects-container {
            padding:
              12px;

            border-radius:
              18px;
          }

          .projects-grid {
            gap:
              18px;
          }

          .project-card {
            padding:
              20px;

            border-radius:
              15px;
          }

          .project-icon {
            width:
              52px;

            height:
              52px;

            font-size:
              26px;
          }

          .project-card h3 {
            font-size:
              18px;
          }

          .project-description {
            min-height:
              auto;

            font-size:
              13px;
          }

          .tech-badge {
            padding:
              5px 9px;

            font-size:
              10px;
          }

          .project-buttons {
            flex-direction:
              column;
          }

          .project-button {
            width:
              100%;

            flex:
              none;
          }

          .project-bg-glow {
            opacity:
              0.7;
          }
        }

        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .projects-header,
          .projects-container,
          .project-card {
            animation:
              none !important;

            opacity:
              1;

            transform:
              none;
          }

          .project-bg-glow,
          .floating-particle,
          .projects-label {
            animation:
              none !important;
          }

          .project-card,
          .project-icon,
          .tech-badge,
          .project-button {
            transition:
              none !important;
          }
        }
      `}</style>
    </section>
  );
}


/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card"
      style={{
        "--card-index": index,
      }}
    >
      {/* Card Glow */}
      <div className="card-glow"></div>

      {/* Top */}
      <div className="project-top">
        <div className="project-icon">
          {project.icon}
        </div>

        <span className="project-number">
          0{index + 1}
        </span>
      </div>

      {/* Title */}
      <h3>
        {project.title}
      </h3>

      {/* Description */}
      <p className="project-description">
        {project.desc}
      </p>

      {/* Technologies */}
      <div className="tech-list">
        {project.tools.map((tool, i) => (
          <TechBadge
            key={tool}
            tool={tool}
            index={i}
          />
        ))}
      </div>

      {/* Buttons */}
      <ProjectButtons project={project} />
    </article>
  );
}


/* =========================================================
   TECHNOLOGY BADGE
========================================================= */

function TechBadge({ tool, index }) {
  return (
    <span
      className="tech-badge"
      style={{
        transitionDelay:
          `${index * 20}ms`,
      }}
    >
      {tool}
    </span>
  );
}


/* =========================================================
   PROJECT BUTTONS
========================================================= */

function ProjectButtons({ project }) {
  const [liveHover, setLiveHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);

  return (
    <div className="project-buttons">

      {/* Live Demo
          Only displayed when project.live exists */}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button live-button"
          aria-label={
            `View ${project.title} live demo`
          }
          onMouseEnter={() =>
            setLiveHover(true)
          }
          onMouseLeave={() =>
            setLiveHover(false)
          }
        >
          Live Demo

          <span
            className="button-arrow"
            style={{
              transform: liveHover
                ? "translate(3px, -3px)"
                : "translate(0, 0)",
            }}
          >
            ↗
          </span>
        </a>
      )}

      {/* GitHub */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button github-button"
          aria-label={
            `View ${project.title} on GitHub`
          }
          onMouseEnter={() =>
            setGithubHover(true)
          }
          onMouseLeave={() =>
            setGithubHover(false)
          }
        >
          GitHub

          <span
            className="button-arrow"
            style={{
              transform: githubHover
                ? "translate(3px, -3px)"
                : "translate(0, 0)",
            }}
          >
            ↗
          </span>
        </a>
      )}

    </div>
  );
}


export default Projects;
