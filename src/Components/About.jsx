import React, { useEffect, useState } from "react";

function About() {
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

  const isMobile = screenWidth <= 600;
  const isTablet = screenWidth > 600 && screenWidth <= 900;

  const frontendSkills = ["HTML", "CSS", "JavaScript", "React"];

  const backendSkills = [
    "Java",
    "JDBC",
    "Servlets",
    "Hibernate",
    "JPA",
  ];

  const databaseSkills = ["SQL", "MySQL"];

  const toolSkills = ["GitHub", "VS Code", "Eclipse"];

  return (
    <section
      id="about"
      style={{
        width: "100%",
        minHeight: "100vh",
        boxSizing: "border-box",
        background:
          "linear-gradient(135deg, #020617 0%, #0F172A 50%, #020617 100%)",
        color: "#F1F5F9",
        padding: isMobile
          ? "70px 12px"
          : isTablet
          ? "80px 18px"
          : "100px 20px",
        scrollMarginTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        style={{
          position: "absolute",
          width: isMobile ? "220px" : "400px",
          height: isMobile ? "220px" : "400px",
          top: "-120px",
          left: "-120px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
          pointerEvents: "none",
          animation: "aboutGlow 6s ease-in-out infinite",
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
            "radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)",
          pointerEvents: "none",
          animation: "aboutGlow 7s ease-in-out infinite reverse",
        }}
      />

      {/* ================= HEADER ================= */}

      <div
        style={{
          textAlign: "center",
          maxWidth: "750px",
          margin: "0 auto 50px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* SMALL LABEL */}

        <span
          style={{
            display: "inline-block",
            padding: isMobile ? "5px 12px" : "6px 14px",
            marginBottom: "12px",
            borderRadius: "30px",
            border: "1px solid rgba(56,189,248,0.35)",
            background: "rgba(56,189,248,0.08)",
            color: "#38BDF8",
            fontSize: isMobile ? "10px" : "12px",
            fontWeight: "700",
            letterSpacing: "2px",
            boxShadow: "0 0 20px rgba(56,189,248,0.08)",
            animation: "fadeDown 0.8s ease",
          }}
        >
          ABOUT ME
        </span>

        {/* TITLE */}

        <h2
          style={{
            margin: "0 0 15px",
            color: "white",
            fontSize: isMobile
              ? "30px"
              : isTablet
              ? "36px"
              : "44px",
            fontWeight: "800",
            lineHeight: "1.2",
            animation: "fadeUp 0.8s ease",
          }}
        >
          About{" "}
          <span
            style={{
              color: "#38BDF8",
              textShadow: "0 0 25px rgba(56,189,248,0.3)",
            }}
          >
            Me
          </span>
        </h2>

        {/* DESCRIPTION */}

        <p
          style={{
            margin: "0 auto",
            maxWidth: "650px",
            color: "#94A3B8",
            fontSize: isMobile ? "13px" : "15px",
            lineHeight: "1.8",
            animation: "fadeUp 1s ease",
          }}
        >
          A passionate Java Full Stack Developer focused on building
          responsive, efficient, and user-friendly applications.
        </p>
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            isMobile || isTablet
              ? "1fr"
              : "minmax(0, 0.95fr) minmax(0, 1.05fr)",
          gap: isMobile
            ? "30px"
            : isTablet
            ? "40px"
            : "55px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div
          style={{
            width: "100%",
            boxSizing: "border-box",
            background:
              "linear-gradient(145deg, rgba(15,23,42,0.97), rgba(2,6,23,0.98))",
            padding: isMobile
              ? "22px"
              : isTablet
              ? "30px"
              : "40px",
            borderRadius: isMobile ? "18px" : "22px",
            border: "1px solid rgba(56,189,248,0.25)",
            boxShadow:
              "0 0 35px rgba(59,130,246,0.12), inset 0 1px 0 rgba(255,255,255,0.03)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            animation: "fadeLeft 0.9s ease",
            position: "relative",
            overflow: "hidden",
          }}
          className="about-main-card"
        >
          {/* CARD GLOW */}

          <div
            style={{
              position: "absolute",
              width: "150px",
              height: "150px",
              top: "-80px",
              right: "-80px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(56,189,248,0.16), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* ICON */}

          <div
            style={{
              width: isMobile ? "55px" : "65px",
              height: isMobile ? "55px" : "65px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(37,99,235,0.12))",
              border: "1px solid rgba(56,189,248,0.25)",
              fontSize: isMobile ? "28px" : "32px",
              marginBottom: "28px",
              boxShadow:
                "0 0 25px rgba(56,189,248,0.12)",
              animation: "iconFloat 4s ease-in-out infinite",
            }}
          >
            👨‍💻
          </div>

          {/* HEADING */}

          <h3
            style={{
              margin: "0 0 20px",
              color: "#F8FAFC",
              fontSize: isMobile
                ? "23px"
                : isTablet
                ? "28px"
                : "32px",
              fontWeight: "800",
              lineHeight: "1.3",
            }}
          >
            Java Full Stack Developer
          </h3>

          {/* PARAGRAPH 1 */}

          <p
            style={{
              margin: "0 0 24px",
              color: "#94A3B8",
              fontSize: isMobile ? "13px" : "15px",
              lineHeight: "1.9",
            }}
          >
            I'm a passionate Java Full Stack Developer with strong
            foundations in Java, React, SQL, Hibernate and JPA. I enjoy
            developing responsive web applications and creating clean,
            efficient and maintainable code.
          </p>

          {/* PARAGRAPH 2 */}

          <p
            style={{
              margin: "0 0 30px",
              color: "#94A3B8",
              fontSize: isMobile ? "13px" : "15px",
              lineHeight: "1.9",
            }}
          >
            I have hands-on experience working with frontend
            technologies, backend development, databases and
            object-relational mapping. I continuously improve my
            technical skills by building real-world projects.
          </p>

          {/* ================= MINI SKILL CARDS ================= */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: isMobile ? "12px" : "18px",
            }}
          >
            <MiniSkillCard
              title="Java"
              subtitle="Backend"
              icon="☕"
            />

            <MiniSkillCard
              title="React"
              subtitle="Frontend"
              icon="⚛️"
            />

            <MiniSkillCard
              title="SQL"
              subtitle="Database"
              icon="🗄️"
            />

            <MiniSkillCard
              title="JPA"
              subtitle="ORM"
              icon="🔗"
            />
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div
          style={{
            width: "100%",
            maxWidth: "650px",
            justifySelf: isMobile || isTablet ? "stretch" : "start",
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "18px" : "25px",
            animation: "fadeRight 0.9s ease",
          }}
        >
          {/* FRONTEND */}

          <SkillCategory
            icon="🎨"
            title="Frontend"
            skills={frontendSkills}
            isMobile={isMobile}
          />

          {/* BACKEND */}

          <SkillCategory
            icon="⚙️"
            title="Backend"
            skills={backendSkills}
            isMobile={isMobile}
          />

          {/* DATABASE */}

          <SkillCategory
            icon="🗄️"
            title="Database"
            skills={databaseSkills}
            isMobile={isMobile}
          />

          {/* TOOLS */}

          <SkillCategory
            icon="🛠️"
            title="Tools"
            skills={toolSkills}
            isMobile={isMobile}
          />
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeRight {
            from {
              opacity: 0;
              transform: translateX(40px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes iconFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-7px);
            }
          }

          @keyframes aboutGlow {
            0%, 100% {
              transform: scale(1);
              opacity: 0.8;
            }

            50% {
              transform: scale(1.15);
              opacity: 1;
            }
          }

          .about-main-card {
            transition:
              transform 0.35s ease,
              box-shadow 0.35s ease,
              border-color 0.35s ease;
          }

          .about-main-card:hover {
            transform: translateY(-6px);
            border-color: rgba(56,189,248,0.45) !important;
            box-shadow:
              0 20px 50px rgba(0,0,0,0.35),
              0 0 35px rgba(56,189,248,0.14) !important;
          }

          @media (max-width: 600px) {
            #about {
              overflow-x: hidden;
            }
          }
        `}
      </style>
    </section>
  );
}

/* =========================================================
   SKILL CATEGORY
========================================================= */

function SkillCategory({
  icon,
  title,
  skills,
  isMobile,
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: isMobile ? "20px" : "28px",
        borderRadius: isMobile ? "17px" : "20px",
        background:
          "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(2,6,23,0.98))",
        border: hover
          ? "1px solid rgba(56,189,248,0.42)"
          : "1px solid rgba(56,189,248,0.13)",
        boxShadow: hover
          ? "0 15px 40px rgba(0,0,0,0.35), 0 0 30px rgba(56,189,248,0.12)"
          : "0 8px 25px rgba(0,0,0,0.22)",
        transform: hover
          ? "translateY(-5px)"
          : "translateY(0)",
        transition:
          "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
      }}
    >
      {/* CATEGORY HEADER */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        {/* ICON */}

        <div
          style={{
            width: isMobile ? "48px" : "52px",
            height: isMobile ? "48px" : "52px",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "14px",
            background:
              "linear-gradient(135deg, rgba(56,189,248,0.13), rgba(37,99,235,0.10))",
            border: "1px solid rgba(56,189,248,0.20)",
            fontSize: isMobile ? "22px" : "25px",
            boxShadow:
              hover
                ? "0 0 20px rgba(56,189,248,0.18)"
                : "none",
            transform: hover
              ? "scale(1.05) rotate(-3deg)"
              : "scale(1)",
            transition: "0.3s ease",
          }}
        >
          {icon}
        </div>

        {/* TITLE */}

        <h3
          style={{
            margin: 0,
            color: "#38BDF8",
            fontSize: isMobile ? "19px" : "23px",
            fontWeight: "800",
            textShadow:
              "0 0 18px rgba(56,189,248,0.2)",
          }}
        >
          {title}
        </h3>
      </div>

      {/* SKILLS */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: isMobile ? "8px" : "10px",
        }}
      >
        {skills.map((skill) => (
          <SkillPill
            key={skill}
            skill={skill}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SKILL PILL
========================================================= */

function SkillPill({ skill, isMobile }) {
  const [hover, setHover] = useState(false);

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile
          ? "7px 12px"
          : "9px 15px",
        borderRadius: "25px",
        color: hover ? "#F8FAFC" : "#CBD5E1",
        background: hover
          ? "rgba(56,189,248,0.14)"
          : "rgba(30,41,59,0.75)",
        border: hover
          ? "1px solid rgba(56,189,248,0.55)"
          : "1px solid rgba(56,189,248,0.18)",
        fontSize: isMobile ? "11px" : "13px",
        fontWeight: "650",
        boxShadow: hover
          ? "0 5px 18px rgba(56,189,248,0.18)"
          : "none",
        transform: hover
          ? "translateY(-3px)"
          : "translateY(0)",
        transition:
          "all 0.25s ease",
        cursor: "default",
        whiteSpace: "nowrap",
      }}
    >
      {skill}
    </span>
  );
}

/* =========================================================
   MINI SKILL CARD
========================================================= */

function MiniSkillCard({
  title,
  subtitle,
  icon,
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        minWidth: 0,
        padding: "18px 12px",
        borderRadius: "15px",
        textAlign: "center",
        background:
          "rgba(15,23,42,0.75)",
        border: hover
          ? "1px solid rgba(56,189,248,0.40)"
          : "1px solid rgba(56,189,248,0.12)",
        boxShadow: hover
          ? "0 10px 25px rgba(56,189,248,0.10)"
          : "none",
        transform: hover
          ? "translateY(-5px)"
          : "translateY(0)",
        transition:
          "all 0.3s ease",
      }}
    >
      <div
        style={{
          fontSize: "21px",
          marginBottom: "5px",
        }}
      >
        {icon}
      </div>

      <div
        style={{
          color: "#38BDF8",
          fontSize: "18px",
          fontWeight: "800",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#64748B",
          fontSize: "12px",
          marginTop: "4px",
        }}
      >
        {subtitle}
      </div>
    </div>
  );
}

export default About;