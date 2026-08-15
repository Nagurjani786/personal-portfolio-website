import React, { useEffect, useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const skills = {
    Programming: ["Java", "SQL"],
    Frontend: ["HTML", "CSS", "JavaScript", "React"],
    Backend: ["JDBC", "Hibernate"],
    Database: ["MySQL"],
    Tools: ["GitHub", "VS Code"],
  };

  const icons = {
    Java:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",

    SQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

    JDBC:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",

    Hibernate:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",

    HTML:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",

    CSS:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

    GitHub:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

    "VS Code":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  };

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        padding: "clamp(70px, 8vw, 110px) clamp(15px, 4vw, 40px)",
        background:
          "linear-gradient(180deg, #020617 0%, #0F172A 50%, #020617 100%)",
        color: "#F1F5F9",
        scrollMarginTop: "80px",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
      className="skills-section"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "5%",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)",
          filter: "blur(15px)",
          pointerEvents: "none",
        }}
      />

      {/* ================= TITLE ================= */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "clamp(35px, 6vw, 55px)",
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateY(0)"
            : "translateY(30px)",
          transition: "all 0.8s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: "800",
            background:
              "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "0.5px",
          }}
        >
          My Skills
        </h2>

        <p
          style={{
            marginTop: "12px",
            marginBottom: 0,
            color: "#94A3B8",
            fontSize: "clamp(13px, 2vw, 15px)",
          }}
        >
          Technologies and tools I use to build modern applications
        </p>

        {/* TITLE LINE */}

        <div
          style={{
            width: "70px",
            height: "4px",
            borderRadius: "10px",
            background:
              "linear-gradient(90deg, #3B82F6, #8B5CF6)",
            margin: "16px auto 0",
            boxShadow:
              "0 0 15px rgba(59,130,246,0.5)",
          }}
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(18px, 4vw, 40px)",
          borderRadius: "24px",
          background:
            "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(2,6,23,0.98))",
          border:
            "1px solid rgba(59,130,246,0.15)",
          boxShadow:
            "0 0 50px rgba(59,130,246,0.10), inset 0 0 30px rgba(59,130,246,0.03)",
          boxSizing: "border-box",
        }}
      >
        {/* ================= GRID ================= */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
            gap: "clamp(18px, 3vw, 25px)",
            width: "100%",
          }}
        >
          {Object.entries(skills).map(
            ([category, items], categoryIndex) => (
              <div
                key={category}
                style={{
                  position: "relative",
                  background:
                    "linear-gradient(145deg, #0F172A, #020617)",
                  borderRadius: "18px",
                  padding: "clamp(18px, 3vw, 25px)",
                  border:
                    "1px solid rgba(59,130,246,0.15)",
                  boxShadow:
                    "0 8px 25px rgba(0,0,0,0.25)",
                  color: "#F1F5F9",
                  width: "100%",
                  boxSizing: "border-box",
                  overflow: "hidden",

                  opacity: visible ? 1 : 0,

                  transform: visible
                    ? "translateY(0)"
                    : "translateY(45px)",

                  transition: `
                    opacity 0.7s ease ${categoryIndex * 0.12}s,
                    transform 0.7s ease ${categoryIndex * 0.12}s,
                    box-shadow 0.3s ease,
                    border-color 0.3s ease
                  `,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px)";

                  e.currentTarget.style.borderColor =
                    "rgba(59,130,246,0.5)";

                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(59,130,246,0.20), 0 0 20px rgba(59,130,246,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";

                  e.currentTarget.style.borderColor =
                    "rgba(59,130,246,0.15)";

                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.25)";
                }}
              >
                {/* CARD GLOW */}

                <div
                  style={{
                    position: "absolute",
                    top: "-50px",
                    right: "-50px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* CATEGORY TITLE */}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "25px",
                      borderRadius: "10px",
                      background:
                        "linear-gradient(180deg, #3B82F6, #8B5CF6)",
                      boxShadow:
                        "0 0 10px rgba(59,130,246,0.5)",
                    }}
                  />

                  <h3
                    style={{
                      color: "#F1F5F9",
                      fontSize:
                        "clamp(17px, 2.5vw, 21px)",
                      margin: 0,
                      fontWeight: "700",
                    }}
                  >
                    {category}
                  </h3>
                </div>

                {/* SKILLS */}

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "11px",
                  }}
                >
                  {items.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 12px",
                        borderRadius: "11px",

                        background:
                          "rgba(59,130,246,0.045)",

                        border:
                          "1px solid rgba(59,130,246,0.08)",

                        transition:
                          "all 0.3s ease",

                        boxSizing: "border-box",
                        width: "100%",
                        minWidth: 0,

                        opacity: visible ? 1 : 0,

                        transform: visible
                          ? "translateX(0)"
                          : "translateX(-15px)",

                        transitionDelay: `${(
                          categoryIndex * 0.1 +
                          skillIndex * 0.08
                        ).toFixed(2)}s`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateX(6px)";

                        e.currentTarget.style.background =
                          "rgba(59,130,246,0.12)";

                        e.currentTarget.style.borderColor =
                          "rgba(59,130,246,0.25)";

                        e.currentTarget.style.boxShadow =
                          "0 5px 15px rgba(59,130,246,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateX(0)";

                        e.currentTarget.style.background =
                          "rgba(59,130,246,0.045)";

                        e.currentTarget.style.borderColor =
                          "rgba(59,130,246,0.08)";

                        e.currentTarget.style.boxShadow =
                          "none";
                      }}
                    >
                      {/* ICON */}

                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          minWidth: "40px",
                          borderRadius: "10px",

                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",

                          background:
                            "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",

                          border:
                            "1px solid rgba(255,255,255,0.08)",

                          boxShadow:
                            "0 4px 10px rgba(0,0,0,0.2)",

                          boxSizing: "border-box",

                          transition:
                            "all 0.3s ease",
                        }}
                      >
                        <img
                          src={icons[skill]}
                          alt={`${skill} icon`}
                          style={{
                            width: "24px",
                            height: "24px",
                            objectFit: "contain",
                            transition:
                              "transform 0.4s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "rotate(8deg) scale(1.15)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                              "rotate(0deg) scale(1)";
                          }}
                        />
                      </div>

                      {/* SKILL NAME */}

                      <span
                        style={{
                          color: "#CBD5E1",
                          fontSize: "14px",
                          fontWeight: "500",
                          wordBreak: "break-word",
                          lineHeight: "1.4",
                        }}
                      >
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;