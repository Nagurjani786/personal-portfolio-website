import React, { useEffect, useState } from "react";

function Hero() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);
  const [hoverGithub, setHoverGithub] = useState(false);
  const [hoverLinkedin, setHoverLinkedin] = useState(false);

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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        width: "100%",
        minHeight: isMobile
          ? "calc(100vh - 75px)"
          : "calc(100vh - 110px)",

        boxSizing: "border-box",

        background:
          "linear-gradient(135deg, #020617 0%, #0B1224 45%, #020617 100%)",

        display: "flex",
        alignItems: "center",

        position: "relative",

        overflow: "hidden",

        /* IMPORTANT:
           No large top padding.
           This removes the gap below navbar.
        */
        padding: isMobile
          ? "50px 18px"
          : isTablet
          ? "60px 35px"
          : "55px 7%",
      }}
    >
      {/* =====================================================
          BACKGROUND GLOW - TOP LEFT
      ===================================================== */}

      <div
        style={{
          position: "absolute",

          width: isMobile ? "220px" : "420px",
          height: isMobile ? "220px" : "420px",

          top: "-180px",
          left: "-150px",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(37,99,235,0.22), transparent 70%)",

          filter: "blur(5px)",

          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          BACKGROUND GLOW - BOTTOM RIGHT
      ===================================================== */}

      <div
        style={{
          position: "absolute",

          width: isMobile ? "250px" : "450px",
          height: isMobile ? "250px" : "450px",

          bottom: "-200px",
          right: "-150px",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)",

          filter: "blur(5px)",

          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          SMALL BLUE LIGHT
      ===================================================== */}

      <div
        style={{
          position: "absolute",

          width: "5px",
          height: "5px",

          top: "25%",
          left: "8%",

          borderRadius: "50%",

          background: "#38BDF8",

          boxShadow:
            "0 0 15px #38BDF8, 0 0 30px rgba(56,189,248,0.6)",

          animation: "pulse 2s infinite",

          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        style={{
          width: "100%",
          maxWidth: "1250px",

          margin: "0 auto",

          display: "grid",

          gridTemplateColumns:
            isMobile || isTablet
              ? "1fr"
              : "1.05fr 0.95fr",

          alignItems: "center",

          gap: isMobile
            ? "55px"
            : isTablet
            ? "65px"
            : "75px",

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

            textAlign: isMobile
              ? "center"
              : "left",
          }}
        >
          {/* GREETING */}

          <div
            style={{
              display: "flex",

              alignItems: "center",

              justifyContent: isMobile
                ? "center"
                : "flex-start",

              gap: "10px",

              marginBottom: "14px",
            }}
          >
            <span
              style={{
                fontSize: isMobile
                  ? "22px"
                  : "28px",

                animation:
                  "wave 2s ease-in-out infinite",

                display: "inline-block",
              }}
            >
              👋
            </span>

            <span
              style={{
                fontSize: isMobile
                  ? "15px"
                  : "18px",

                color: "#94A3B8",

                fontWeight: "500",
              }}
            >
              Hi, I'm
            </span>
          </div>

          {/* =====================================================
              NAME
          ===================================================== */}

          <h1
            style={{
              margin: "0 0 16px",

              fontSize: isMobile
                ? "2.35rem"
                : isTablet
                ? "3.3rem"
                : "4.3rem",

              fontWeight: "900",

              lineHeight: "1.08",

              letterSpacing: "-2px",

              background:
                "linear-gradient(135deg, #38BDF8 0%, #3B82F6 45%, #8B5CF6 100%)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent",

              backgroundClip: "text",

              textShadow:
                "0 0 30px rgba(59,130,246,0.12)",
            }}
          >
            Nagur Jani Shaik
          </h1>

          {/* =====================================================
              ROLE
          ===================================================== */}

          <div
            style={{
              display: "flex",

              alignItems: "center",

              justifyContent: isMobile
                ? "center"
                : "flex-start",

              gap: "12px",

              marginBottom: "20px",

              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                margin: 0,

                color: "#E2E8F0",

                fontSize: isMobile
                  ? "1.25rem"
                  : isTablet
                  ? "1.55rem"
                  : "1.85rem",

                fontWeight: "600",
              }}
            >
              Java Full Stack Developer
            </h2>

            {/* ANIMATED BARS */}

            <div
              style={{
                display: "flex",

                gap: "4px",

                alignItems: "flex-end",

                height: "22px",
              }}
            >
              <span
                style={{
                  width: "4px",
                  height: "17px",

                  background: "#3B82F6",

                  borderRadius: "2px",

                  animation:
                    "barPulse 1.3s infinite",
                }}
              />

              <span
                style={{
                  width: "4px",
                  height: "12px",

                  background: "#8B5CF6",

                  borderRadius: "2px",

                  animation:
                    "barPulse 1.3s infinite",

                  animationDelay: "0.2s",
                }}
              />

              <span
                style={{
                  width: "4px",
                  height: "20px",

                  background: "#06B6D4",

                  borderRadius: "2px",

                  animation:
                    "barPulse 1.3s infinite",

                  animationDelay: "0.4s",
                }}
              />
            </div>
          </div>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <p
            style={{
              maxWidth: "650px",

              margin: isMobile
                ? "0 auto 28px"
                : "0 0 28px",

              color: "#94A3B8",

              fontSize: isMobile
                ? "14px"
                : "16px",

              lineHeight: "1.8",
            }}
          >
            Java Full Stack Developer with hands-on experience in
            Java, Hibernate/JPA, SQL, JavaScript, React, HTML and
            CSS. Passionate about building responsive web
            applications and solving real-world problems through
            clean and efficient code.
          </p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}

          <div
            style={{
              display: "flex",

              justifyContent: isMobile
                ? "center"
                : "flex-start",

              alignItems: "center",

              gap: "14px",

              marginBottom: "30px",

              flexWrap: "wrap",
            }}
          >
            {/* VIEW PROJECTS BUTTON */}

            <button
              onClick={() =>
                scrollToSection("projects")
              }
              onMouseEnter={() =>
                setHoverPrimary(true)
              }
              onMouseLeave={() =>
                setHoverPrimary(false)
              }
              style={{
                background:
                  "linear-gradient(135deg, #2563EB, #7C3AED)",

                color: "#FFFFFF",

                padding: isMobile
                  ? "12px 20px"
                  : "14px 25px",

                border: "1px solid rgba(96,165,250,0.4)",

                borderRadius: "10px",

                cursor: "pointer",

                fontWeight: "700",

                fontSize: isMobile
                  ? "13px"
                  : "15px",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                gap: "8px",

                boxShadow: hoverPrimary
                  ? "0 0 18px rgba(59,130,246,0.65), 0 10px 35px rgba(59,130,246,0.45)"
                  : "0 0 10px rgba(59,130,246,0.35), 0 5px 20px rgba(59,130,246,0.25)",

                transform: hoverPrimary
                  ? "translateY(-4px)"
                  : "translateY(0)",

                transition:
                  "all 0.3s ease",
              }}
            >
              <span>View My Work</span>
              <span>↗</span>
            </button>

            {/* CONTACT BUTTON */}

            <button
              onClick={() =>
                scrollToSection("contact")
              }
              onMouseEnter={() =>
                setHoverSecondary(true)
              }
              onMouseLeave={() =>
                setHoverSecondary(false)
              }
              style={{
                background: hoverSecondary
                  ? "rgba(37,99,235,0.12)"
                  : "rgba(15,23,42,0.5)",

                color: "#E2E8F0",

                padding: isMobile
                  ? "11px 20px"
                  : "13px 25px",

                border:
                  "1px solid rgba(59,130,246,0.45)",

                borderRadius: "10px",

                cursor: "pointer",

                fontWeight: "700",

                fontSize: isMobile
                  ? "13px"
                  : "15px",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                gap: "8px",

                boxShadow: hoverSecondary
                  ? "0 0 20px rgba(59,130,246,0.55), 0 8px 28px rgba(59,130,246,0.25)"
                  : "0 0 8px rgba(59,130,246,0.25)",

                transform: hoverSecondary
                  ? "translateY(-4px)"
                  : "translateY(0)",

                transition:
                  "all 0.3s ease",
              }}
            >
              <span>Get In Touch</span>
              <span>✈</span>
            </button>
          </div>

          {/* =====================================================
              SOCIAL LINKS
          ===================================================== */}

          <div
            style={{
              display: "flex",

              justifyContent: isMobile
                ? "center"
                : "flex-start",

              gap: "12px",
            }}
          >
            {/* GITHUB */}

            <a
              href="https://github.com/Nagurjani786"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() =>
                setHoverGithub(true)
              }
              onMouseLeave={() =>
                setHoverGithub(false)
              }
              style={{
                width: "44px",
                height: "44px",

                borderRadius: "50%",

                background: hoverGithub
                  ? "#172554"
                  : "rgba(15,23,42,0.75)",

                border:
                  "1px solid rgba(59,130,246,0.45)",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                color: hoverGithub
                  ? "#60A5FA"
                  : "#94A3B8",

                textDecoration: "none",

                transition:
                  "all 0.3s ease",

                transform: hoverGithub
                  ? "translateY(-5px)"
                  : "translateY(0)",

                boxShadow: hoverGithub
                  ? "0 0 20px rgba(59,130,246,0.65), 0 8px 25px rgba(59,130,246,0.3)"
                  : "0 0 8px rgba(59,130,246,0.2)",
              }}
              title="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.14 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/shaik-nagur-jani-76212b318/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() =>
                setHoverLinkedin(true)
              }
              onMouseLeave={() =>
                setHoverLinkedin(false)
              }
              style={{
                width: "44px",
                height: "44px",

                borderRadius: "50%",

                background: hoverLinkedin
                  ? "#172554"
                  : "rgba(15,23,42,0.75)",

                border:
                  "1px solid rgba(59,130,246,0.45)",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                color: hoverLinkedin
                  ? "#60A5FA"
                  : "#94A3B8",

                textDecoration: "none",

                transition:
                  "all 0.3s ease",

                transform: hoverLinkedin
                  ? "translateY(-5px)"
                  : "translateY(0)",

                boxShadow: hoverLinkedin
                  ? "0 0 20px rgba(59,130,246,0.65), 0 8px 25px rgba(59,130,246,0.3)"
                  : "0 0 8px rgba(59,130,246,0.2)",
              }}
              title="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div
          style={{
            width: "100%",

            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            position: "relative",
          }}
        >
          {/* =====================================================
              CODE CARD
          ===================================================== */}

          <div
            style={{
              width: "100%",

              maxWidth: "500px",

              boxSizing: "border-box",

              background:
                "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(8,15,30,0.92))",

              backdropFilter: "blur(20px)",

              padding: isMobile
                ? "20px"
                : "28px",

              borderRadius: "20px",

              color: "#E2E8F0",

              fontFamily:
                "'Fira Code', 'Courier New', monospace",

              boxShadow:
                "0 0 30px rgba(59,130,246,0.12), 0 25px 60px rgba(0,0,0,0.5)",

              border:
                "1px solid rgba(59,130,246,0.28)",

              position: "relative",

              zIndex: 2,
            }}
          >
            {/* CODE HEADER */}

            <div
              style={{
                display: "flex",

                alignItems: "center",

                justifyContent: "space-between",

                marginBottom: "20px",

                paddingBottom: "15px",

                borderBottom:
                  "1px solid rgba(59,130,246,0.18)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "7px",
                }}
              >
                <span
                  style={{
                    width: "11px",
                    height: "11px",

                    borderRadius: "50%",

                    background: "#FF5F56",
                  }}
                />

                <span
                  style={{
                    width: "11px",
                    height: "11px",

                    borderRadius: "50%",

                    background: "#FFBD2E",
                  }}
                />

                <span
                  style={{
                    width: "11px",
                    height: "11px",

                    borderRadius: "50%",

                    background: "#27C93F",
                  }}
                />
              </div>

              <span
                style={{
                  color: "#64748B",

                  fontSize: "12px",
                }}
              >
                developer.js
              </span>
            </div>

            {/* CODE */}

            <div
              style={{
                fontSize: isMobile
                  ? "11px"
                  : "14px",

                lineHeight: "1.8",

                overflowX: "auto",
              }}
            >
              <p
                style={{
                  color: "#F472B6",
                  margin: "0 0 7px",
                }}
              >
                const
              </p>

              <p
                style={{
                  margin: "0 0 15px",

                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    color: "#22D3EE",
                  }}
                >
                  developer
                </span>{" "}
                ={" "}
                <span
                  style={{
                    color: "#FACC15",
                  }}
                >
                  "Nagur Jani Shaik"
                </span>
              </p>

              <p
                style={{
                  color: "#F472B6",
                  margin: "0 0 7px",
                }}
              >
                function
              </p>

              <p
                style={{
                  margin: "0 0 7px",

                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    color: "#22D3EE",
                  }}
                >
                  buildFullStackApps
                </span>
                () {"{"}
              </p>

              <p
                style={{
                  color: "#94A3B8",

                  margin: "0 0 7px 20px",
                }}
              >
                // Java + React + SQL
              </p>

              <p
                style={{
                  color: "#94A3B8",

                  margin: "0 0 7px 20px",
                }}
              >
                // Building scalable solutions
              </p>

              <p
                style={{
                  color: "#10B981",

                  margin: "0 0 7px 20px",

                  whiteSpace: "nowrap",
                }}
              >
                return{" "}
                <span
                  style={{
                    color: "#FACC15",
                  }}
                >
                  success
                </span>
                ;
              </p>

              <p
                style={{
                  margin: 0,
                }}
              >
                {"}"}
              </p>
            </div>
          </div>

          {/* =====================================================
              FLOATING CIRCLE 1
          ===================================================== */}

          <div
            style={{
              position: "absolute",

              top: "5%",
              right: "3%",

              width: isMobile
                ? "45px"
                : "65px",

              height: isMobile
                ? "45px"
                : "65px",

              background:
                "linear-gradient(135deg,#3B82F6,#8B5CF6)",

              borderRadius: "50%",

              opacity: 0.12,

              animation:
                "float 4s ease-in-out infinite",

              pointerEvents: "none",
            }}
          />

          {/* =====================================================
              FLOATING CIRCLE 2
          ===================================================== */}

          <div
            style={{
              position: "absolute",

              bottom: "8%",
              left: "2%",

              width: isMobile
                ? "35px"
                : "50px",

              height: isMobile
                ? "35px"
                : "50px",

              background:
                "linear-gradient(135deg,#06B6D4,#10B981)",

              borderRadius: "50%",

              opacity: 0.12,

              animation:
                "float 5s ease-in-out infinite",

              animationDelay: "1s",

              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }

            50% {
              opacity: 0.6;
              transform: scale(1.08);
            }
          }

          @keyframes wave {
            0%, 100% {
              transform: rotate(0deg);
            }

            25% {
              transform: rotate(12deg);
            }

            50% {
              transform: rotate(-8deg);
            }

            75% {
              transform: rotate(10deg);
            }
          }

          @keyframes barPulse {
            0%, 100% {
              transform: scaleY(1);
              opacity: 1;
            }

            50% {
              transform: scaleY(0.55);
              opacity: 0.6;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-15px);
            }
          }

          button,
          a {
            -webkit-tap-highlight-color: transparent;
          }

          button:focus-visible,
          a:focus-visible {
            outline: 2px solid #38BDF8;
            outline-offset: 4px;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;