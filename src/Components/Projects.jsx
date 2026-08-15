import React, { useEffect, useState } from "react";

function Projects() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ================= RESPONSIVE ================= */

  const isMobile = screenWidth <= 600;
  const isTablet = screenWidth > 600 && screenWidth <= 900;

  /* ================= PROJECTS ================= */

  const projects = [

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
        "https://my-movie-app-website.netlify.app",

      icon: "🎬",
    },

    {
      title: "Hotel Reservation System",

      desc:
        "Developed a Java-based hotel reservation system using JDBC and MySQL to manage room bookings, reservations, updates, cancellations, and CRUD operations with a modular OOP-based design.",

      tools: [
        "Core Java",
        "JDBC",
        "MySQL",
        "SQL",
        "OOP",
      ],

      live: "#",

      icon: "🏨",
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
        "https://my-food-app-project.netlify.app",

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
        "Google Colab",
      ],

      live:
        "https://github.com/Nagurjani786/Semi-Conductor-Wafer-Defect-Detection-Using-Deep-Learning",

      icon: "🔬",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        width: "100%",
        minHeight: "100vh",

        padding: isMobile
          ? "75px 12px"
          : isTablet
          ? "85px 18px"
          : "110px 20px",

        scrollMarginTop: "80px",

        boxSizing: "border-box",

        position: "relative",

        overflow: "hidden",

        background:
          "linear-gradient(135deg, #020617 0%, #0F172A 50%, #020617 100%)",
      }}
    >
      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        style={{
          position: "absolute",

          width: isMobile ? "220px" : "420px",
          height: isMobile ? "220px" : "420px",

          top: "-120px",
          left: "-120px",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(59,130,246,0.16), transparent 70%)",

          pointerEvents: "none",

          animation:
            "projectGlow 6s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "absolute",

          width: isMobile ? "250px" : "450px",
          height: isMobile ? "250px" : "450px",

          bottom: "-180px",
          right: "-150px",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(139,92,246,0.13), transparent 70%)",

          pointerEvents: "none",

          animation:
            "projectGlow 7s ease-in-out infinite reverse",
        }}
      />

      {/* =================================================
          SMALL CENTER GLOW
      ================================================= */}

      <div
        style={{
          position: "absolute",

          width: "300px",
          height: "300px",

          top: "45%",
          left: "50%",

          transform: "translate(-50%, -50%)",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(56,189,248,0.035), transparent 70%)",

          pointerEvents: "none",
        }}
      />

      {/* =================================================
          HEADER
      ================================================= */}

      <div
        style={{
          textAlign: "center",

          maxWidth: "780px",

          margin: isMobile
            ? "0 auto 38px"
            : "0 auto 55px",

          position: "relative",

          zIndex: 2,
        }}
      >
        {/* SMALL LABEL */}

        <span
          style={{
            display: "inline-block",

            padding: isMobile
              ? "6px 12px"
              : "7px 15px",

            marginBottom: "13px",

            borderRadius: "30px",

            border:
              "1px solid rgba(56,189,248,0.35)",

            background:
              "rgba(56,189,248,0.08)",

            color: "#38BDF8",

            fontSize: isMobile
              ? "10px"
              : "11px",

            fontWeight: "700",

            letterSpacing: "2px",

            boxShadow:
              "0 0 20px rgba(56,189,248,0.08)",

            animation:
              "projectFadeDown 0.8s ease",
          }}
        >
          MY WORK
        </span>

        {/* TITLE */}

        <h2
          style={{
            margin: "0 0 15px",

            color: "white",

            fontSize: isMobile
              ? "30px"
              : isTablet
              ? "37px"
              : "46px",

            fontWeight: "800",

            lineHeight: "1.2",

            letterSpacing: "-0.5px",

            animation:
              "projectFadeUp 0.8s ease",
          }}
        >
          My{" "}
          <span
            style={{
              color: "#38BDF8",

              textShadow:
                "0 0 25px rgba(56,189,248,0.3)",
            }}
          >
            Projects
          </span>
        </h2>

        {/* DESCRIPTION */}

        <p
          style={{
            margin: "0 auto",

            maxWidth: "680px",

            color: "#94A3B8",

            fontSize: isMobile
              ? "13px"
              : "15px",

            lineHeight: "1.8",

            animation:
              "projectFadeUp 1s ease",
          }}
        >
          A collection of projects showcasing my
          skills in Java, React, JavaScript,
          databases, and deep learning.
        </p>
      </div>

      {/* =================================================
          MAIN PROJECT CONTAINER
      ================================================= */}

      <div
        style={{
          width: "100%",

          maxWidth: "1280px",

          margin: "0 auto",

          padding: isMobile
            ? "12px"
            : isTablet
            ? "25px"
            : "32px",

          boxSizing: "border-box",

          borderRadius: isMobile
            ? "18px"
            : "25px",

          border:
            "1px solid rgba(56,189,248,0.13)",

          background:
            "linear-gradient(145deg, rgba(15,23,42,0.92), rgba(2,6,23,0.98))",

          boxShadow:
            "0 0 45px rgba(0,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.03)",

          position: "relative",

          zIndex: 2,

          backdropFilter: "blur(12px)",

          WebkitBackdropFilter:
            "blur(12px)",
        }}
      >
        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              isMobile || isTablet
                ? "1fr"
                : "repeat(2, minmax(0, 1fr))",

            gap: isMobile
              ? "18px"
              : isTablet
              ? "22px"
              : "25px",

            width: "100%",
          }}
        >
          {projects.map(
            (project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            )
          )}
        </div>
      </div>

      {/* =================================================
          ANIMATIONS
      ================================================= */}

      <style>
        {`
          @keyframes projectFadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes projectFadeDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes projectGlow {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.8;
            }

            50% {
              transform: scale(1.15);
              opacity: 1;
            }
          }

          @keyframes projectCardAppear {
            from {
              opacity: 0;
              transform: translateY(30px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes projectPulse {
            0%,
            100% {
              opacity: 1;
              transform: scale(1);
            }

            50% {
              opacity: 0.5;
              transform: scale(1.25);
            }
          }

          @media (max-width: 600px) {
            #projects {
              overflow-x: hidden;
            }
          }

          @media (min-width: 601px) and (max-width: 900px) {
            #projects {
              overflow-x: hidden;
            }
          }
        `}
      </style>
    </section>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  isMobile,
  isTablet,
}) {
  const [hover, setHover] =
    useState(false);

  return (
    <article
      onMouseEnter={() =>
        setHover(true)
      }
      onMouseLeave={() =>
        setHover(false)
      }
      style={{
        position: "relative",

        overflow: "hidden",

        minWidth: 0,

        width: "100%",

        boxSizing: "border-box",

        padding: isMobile
          ? "20px"
          : isTablet
          ? "23px"
          : "25px",

        borderRadius: isMobile
          ? "15px"
          : "18px",

        border: hover
          ? "1px solid rgba(56,189,248,0.48)"
          : "1px solid rgba(56,189,248,0.12)",

        background:
          "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(2,6,23,0.98))",

        boxShadow: hover
          ? "0 18px 45px rgba(0,0,0,0.35), 0 0 30px rgba(56,189,248,0.14)"
          : "0 10px 30px rgba(0,0,0,0.25)",

        transform: hover
          ? "translateY(-8px)"
          : "translateY(0)",

        transition:
          "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",

        animation:
          "projectCardAppear 0.7s ease both",

        animationDelay:
          `${index * 0.12}s`,
      }}
    >
      {/* CARD GLOW */}

      <div
        style={{
          position: "absolute",

          width: "150px",
          height: "150px",

          top: "-75px",
          right: "-75px",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(56,189,248,0.13), transparent 70%)",

          pointerEvents: "none",

          opacity: hover ? 1 : 0.5,

          transition: "0.4s ease",
        }}
      />

      {/* =================================================
          TOP
      ================================================= */}

      <div
        style={{
          display: "flex",

          alignItems: "center",

          justifyContent:
            "space-between",

          marginBottom: isMobile
            ? "18px"
            : "20px",
        }}
      >
        {/* PROJECT ICON */}

        <div
          style={{
            width: isMobile
              ? "52px"
              : "58px",

            height: isMobile
              ? "52px"
              : "58px",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            borderRadius: "14px",

            background:
              "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(37,99,235,0.1))",

            border:
              "1px solid rgba(56,189,248,0.2)",

            fontSize: isMobile
              ? "26px"
              : "30px",

            transform: hover
              ? "scale(1.08) rotate(-3deg)"
              : "scale(1)",

            boxShadow: hover
              ? "0 0 25px rgba(56,189,248,0.16)"
              : "none",

            transition:
              "all 0.3s ease",
          }}
        >
          {project.icon}
        </div>

        {/* NUMBER */}

        <span
          style={{
            color:
              "rgba(148,163,184,0.5)",

            fontSize: isMobile
              ? "11px"
              : "13px",

            fontWeight: "700",

            letterSpacing: "1px",
          }}
        >
          0{index + 1}
        </span>
      </div>

      {/* =================================================
          TITLE
      ================================================= */}

      <h3
        style={{
          margin: "0 0 12px",

          color: "white",

          fontSize: isMobile
            ? "18px"
            : isTablet
            ? "20px"
            : "21px",

          fontWeight: "700",

          lineHeight: "1.4",
        }}
      >
        {project.title}
      </h3>

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <p
        style={{
          margin: "0",

          minHeight: isMobile
            ? "auto"
            : isTablet
            ? "auto"
            : "95px",

          color: "#94A3B8",

          fontSize: isMobile
            ? "13px"
            : "14px",

          lineHeight: "1.75",
        }}
      >
        {project.desc}
      </p>

      {/* =================================================
          TECHNOLOGIES
      ================================================= */}

      <div
        style={{
          display: "flex",

          flexWrap: "wrap",

          gap: "7px",

          margin: "20px 0",
        }}
      >
        {project.tools.map(
          (tool, i) => (
            <TechBadge
              key={i}
              tool={tool}
              isMobile={isMobile}
            />
          )
        )}
      </div>

      {/* =================================================
          BUTTON
      ================================================= */}

      {project.live !== "#" ? (
        <ProjectButton
          project={project}
          isMobile={isMobile}
        />
      ) : (
        <span
          style={{
            display:
              "inline-flex",

            alignItems: "center",

            gap: "8px",

            color: "#94A3B8",

            fontSize: "12px",
          }}
        >
          <span
            style={{
              width: "7px",

              height: "7px",

              borderRadius: "50%",

              background: "#38BDF8",

              boxShadow:
                "0 0 10px rgba(56,189,248,0.7)",

              animation:
                "projectPulse 1.5s infinite",
            }}
          />

          Development Project
        </span>
      )}
    </article>
  );
}

/* =========================================================
   TECHNOLOGY BADGE
========================================================= */

function TechBadge({
  tool,
  isMobile,
}) {
  const [hover, setHover] =
    useState(false);

  return (
    <span
      onMouseEnter={() =>
        setHover(true)
      }
      onMouseLeave={() =>
        setHover(false)
      }
      style={{
        display: "inline-flex",

        alignItems: "center",

        justifyContent: "center",

        padding: isMobile
          ? "5px 9px"
          : "6px 11px",

        borderRadius: "20px",

        color: hover
          ? "#F8FAFC"
          : "#BAE6FD",

        background: hover
          ? "rgba(56,189,248,0.14)"
          : "rgba(56,189,248,0.08)",

        border: hover
          ? "1px solid rgba(56,189,248,0.40)"
          : "1px solid rgba(56,189,248,0.18)",

        fontSize: isMobile
          ? "10px"
          : "11px",

        fontWeight: "600",

        transform: hover
          ? "translateY(-2px)"
          : "translateY(0)",

        boxShadow: hover
          ? "0 5px 15px rgba(56,189,248,0.12)"
          : "none",

        transition:
          "all 0.25s ease",
      }}
    >
      {tool}
    </span>
  );
}

/* =========================================================
   PROJECT BUTTON
========================================================= */

function ProjectButton({
  project,
  isMobile,
}) {
  const [hover, setHover] =
    useState(false);

  const isGithub =
    project.live.includes("github");

  return (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        isGithub
          ? `View ${project.title} on GitHub`
          : `View ${project.title} live demo`
      }
      onMouseEnter={() =>
        setHover(true)
      }
      onMouseLeave={() =>
        setHover(false)
      }
      style={{
        display: "inline-flex",

        alignItems: "center",

        justifyContent: "center",

        gap: "10px",

        width: isMobile
          ? "100%"
          : "auto",

        boxSizing: "border-box",

        padding: isMobile
          ? "11px 17px"
          : "10px 17px",

        borderRadius: "9px",

        background:
          "linear-gradient(135deg, #38BDF8, #2563EB)",

        color: "white",

        textDecoration: "none",

        fontSize: isMobile
          ? "12px"
          : "13px",

        fontWeight: "700",

        boxShadow: hover
          ? "0 8px 30px rgba(59,130,246,0.55)"
          : "0 5px 18px rgba(37,99,235,0.30)",

        transform: hover
          ? "translateY(-3px)"
          : "translateY(0)",

        transition:
          "all 0.3s ease",
      }}
    >
      {isGithub
        ? "View on GitHub"
        : "Live Demo"}

      <span
        style={{
          fontSize: "17px",

          transform: hover
            ? "translate(3px, -2px)"
            : "translate(0, 0)",

          transition:
            "transform 0.25s ease",
        }}
      >
        ↗
      </span>
    </a>
  );
}

export default Projects;