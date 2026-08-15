import React, { useEffect, useState } from "react";

function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  /* =====================================================
     SCREEN SIZE
  ===================================================== */

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);

      if (window.innerWidth > 600) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =====================================================
     SCROLL EFFECT
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     ACTIVE SECTION
  ===================================================== */

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "resume",
      "contact",
    ];

    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =====================================================
     NAV ITEMS
  ===================================================== */

  const navItems = [
    {
      href: "#home",
      label: "Home",
      icon: "⌂",
    },
    {
      href: "#about",
      label: "About",
      icon: "👤",
    },
    {
      href: "#skills",
      label: "Skills",
      icon: "💻",
    },
    {
      href: "#projects",
      label: "Projects",
      icon: "🚀",
    },
    {
      href: "#resume",
      label: "Resume",
      icon: "📄",
    },
    {
      href: "#contact",
      label: "Contact",
      icon: "✉",
    },
  ];

  /* =====================================================
     RESPONSIVE
  ===================================================== */

  const isMobile = screenWidth <= 600;

  const isTablet =
    screenWidth > 600 && screenWidth <= 900;

  const isSmallDesktop =
    screenWidth > 900 && screenWidth <= 1150;

  /* =====================================================
     SCROLL TO SECTION
  ===================================================== */

  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (!target) return;

    const navbarHeight = isMobile
      ? 64
      : isTablet
      ? 70
      : 78;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setMobileMenuOpen(false);
  };

  /* =====================================================
     RETURN
  ===================================================== */

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1000,

          height: scrolled
            ? isMobile
              ? "62px"
              : isTablet
              ? "68px"
              : "70px"
            : isMobile
            ? "68px"
            : isTablet
            ? "74px"
            : "78px",

          padding: isMobile
            ? "0 14px"
            : isTablet
            ? "0 22px"
            : isSmallDesktop
            ? "0 3.5%"
            : "0 5%",

          boxSizing: "border-box",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          background: scrolled
            ? "rgba(2, 6, 23, 0.96)"
            : "rgba(2, 6, 23, 0.86)",

          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",

          borderBottom: scrolled
            ? "1px solid rgba(56,189,248,0.28)"
            : "1px solid rgba(56,189,248,0.10)",

          boxShadow: scrolled
            ? "0 8px 30px rgba(0,0,0,0.40), 0 0 20px rgba(56,189,248,0.06)"
            : "0 4px 20px rgba(0,0,0,0.12)",

          transition:
            "height 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",

          animation: "navbarSlideDown 0.55s ease",

          boxSizing: "border-box",
        }}
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <button
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
          style={{
            display: "flex",
            alignItems: "center",

            gap: isMobile
              ? "8px"
              : isTablet
              ? "9px"
              : "11px",

            cursor: "pointer",
            flexShrink: 0,

            border: "none",
            background: "transparent",
            padding: 0,

            transition:
              "transform 0.3s ease, filter 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-2px)";

            e.currentTarget.style.filter =
              "drop-shadow(0 0 10px rgba(56,189,248,0.35))";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0)";

            e.currentTarget.style.filter = "none";
          }}
        >
          {/* LOGO */}

          <div
            style={{
              width: isMobile
                ? "40px"
                : isTablet
                ? "43px"
                : "46px",

              height: isMobile
                ? "40px"
                : isTablet
                ? "43px"
                : "46px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              borderRadius: "12px",

              background:
                "linear-gradient(135deg,#3B82F6,#06B6D4,#8B5CF6)",

              boxShadow:
                "0 5px 18px rgba(59,130,246,0.30)",

              position: "relative",
              overflow: "hidden",

              flexShrink: 0,
            }}
          >
            <span
              style={{
                color: "#FFFFFF",

                fontWeight: "900",

                fontSize: isMobile
                  ? "14px"
                  : isTablet
                  ? "16px"
                  : "17px",

                letterSpacing: "1px",
              }}
            >
              NJ
            </span>
          </div>

          {/* NAME */}

          {!isMobile && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                minWidth: 0,
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontSize: isTablet
                    ? "18px"
                    : isSmallDesktop
                    ? "19px"
                    : "21px",

                  fontWeight: "800",
                  lineHeight: "1",

                  whiteSpace: "nowrap",

                  background:
                    "linear-gradient(135deg,#38BDF8,#3B82F6,#8B5CF6)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Nagur Jani
              </span>

              <span
                style={{
                  color: "#64748B",

                  fontSize: isTablet
                    ? "9px"
                    : "10px",

                  fontWeight: "500",

                  letterSpacing: "0.25px",

                  whiteSpace: "nowrap",
                }}
              >
                Java Full Stack Developer
              </span>
            </div>
          )}
        </button>

        {/* =================================================
            DESKTOP MENU
        ================================================= */}

        {!isMobile && !isTablet && (
          <div
            style={{
              display: "flex",
              alignItems: "center",

              gap: isSmallDesktop
                ? "1px"
                : "4px",

              padding: isSmallDesktop
                ? "5px"
                : "6px 8px",

              borderRadius: "50px",

              background:
                "rgba(15,23,42,0.70)",

              border:
                "1px solid rgba(56,189,248,0.14)",

              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",

              boxShadow:
                "0 5px 22px rgba(0,0,0,0.20)",
            }}
          >
            {navItems.map((item) => {
              const id = item.href.substring(1);

              const isActive =
                activeSection === id;

              const isHovered =
                hoveredItem === id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                  onMouseEnter={() =>
                    setHoveredItem(id)
                  }
                  onMouseLeave={() =>
                    setHoveredItem(null)
                  }
                  style={{
                    position: "relative",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    gap: isSmallDesktop
                      ? "4px"
                      : "6px",

                    padding: isSmallDesktop
                      ? "8px 9px"
                      : "9px 12px",

                    borderRadius: "24px",

                    textDecoration: "none",

                    color:
                      isActive || isHovered
                        ? "#F8FAFC"
                        : "#94A3B8",

                    fontSize: isSmallDesktop
                      ? "11px"
                      : "13px",

                    fontWeight: "650",

                    whiteSpace: "nowrap",

                    background: isActive
                      ? "linear-gradient(135deg,rgba(59,130,246,0.23),rgba(6,182,212,0.15))"
                      : isHovered
                      ? "rgba(56,189,248,0.08)"
                      : "transparent",

                    border: isActive
                      ? "1px solid rgba(56,189,248,0.30)"
                      : "1px solid transparent",

                    boxShadow: isActive
                      ? "0 0 16px rgba(56,189,248,0.16)"
                      : "none",

                    transform: isHovered
                      ? "translateY(-1px)"
                      : "translateY(0)",

                    transition:
                      "all 0.25s ease",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: isSmallDesktop
                        ? "13px"
                        : "15px",

                      lineHeight: 1,
                    }}
                  >
                    {item.icon}
                  </span>

                  <span>{item.label}</span>

                  {isActive && (
                    <span
                      style={{
                        position: "absolute",

                        bottom: "-3px",
                        left: "50%",

                        transform:
                          "translateX(-50%)",

                        width: "5px",
                        height: "5px",

                        borderRadius: "50%",

                        background: "#38BDF8",

                        boxShadow:
                          "0 0 10px rgba(56,189,248,0.9)",

                        animation:
                          "activePulse 1.8s ease-in-out infinite",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        )}

        {/* =================================================
            TABLET MENU
        ================================================= */}

        {isTablet && (
          <div
            style={{
              display: "flex",
              alignItems: "center",

              gap: "3px",

              padding: "5px 6px",

              borderRadius: "40px",

              background:
                "rgba(15,23,42,0.72)",

              border:
                "1px solid rgba(56,189,248,0.14)",

              boxShadow:
                "0 0 18px rgba(56,189,248,0.06)",
            }}
          >
            {navItems.map((item) => {
              const id = item.href.substring(1);

              const isActive =
                activeSection === id;

              return (
                <button
                  key={item.href}
                  onClick={() =>
                    scrollToSection(id)
                  }
                  aria-label={item.label}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  style={{
                    width: "40px",
                    height: "37px",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRadius: "11px",

                    border: isActive
                      ? "1px solid rgba(56,189,248,0.28)"
                      : "1px solid transparent",

                    background: isActive
                      ? "rgba(56,189,248,0.13)"
                      : "transparent",

                    color: isActive
                      ? "#F8FAFC"
                      : "#94A3B8",

                    cursor: "pointer",

                    boxShadow: isActive
                      ? "0 0 16px rgba(56,189,248,0.16)"
                      : "none",

                    transition:
                      "all 0.25s ease",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    {item.icon}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* =================================================
            MOBILE BUTTON
        ================================================= */}

        {isMobile && (
          <button
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            style={{
              width: "40px",
              height: "40px",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              gap: "5px",

              padding: 0,

              borderRadius: "11px",

              border:
                "1px solid rgba(56,189,248,0.22)",

              background:
                "rgba(15,23,42,0.75)",

              cursor: "pointer",

              flexShrink: 0,

              transition:
                "all 0.25s ease",
            }}
          >
            <span
              style={{
                ...hamburgerLine,

                ...(mobileMenuOpen
                  ? hamburgerLine1Active
                  : {}),
              }}
            />

            <span
              style={{
                ...hamburgerLine,

                ...(mobileMenuOpen
                  ? hamburgerLine2Active
                  : {}),
              }}
            />

            <span
              style={{
                ...hamburgerLine,

                ...(mobileMenuOpen
                  ? hamburgerLine3Active
                  : {}),
              }}
            />
          </button>
        )}
      </nav>

      {/* =================================================
          MOBILE MENU
      ================================================= */}

      {mobileMenuOpen && isMobile && (
        <div
          style={{
            position: "fixed",
            inset: 0,

            width: "100%",
            height: "100vh",

            background:
              "rgba(0,0,0,0.62)",

            backdropFilter: "blur(5px)",
            WebkitBackdropFilter:
              "blur(5px)",

            zIndex: 1100,

            animation:
              "overlayFade 0.25s ease",
          }}
          onClick={() =>
            setMobileMenuOpen(false)
          }
        >
          {/* PANEL */}

          <div
            style={{
              position: "absolute",

              top: 0,
              right: 0,

              width:
                screenWidth <= 380
                  ? "88%"
                  : "82%",

              maxWidth: "330px",

              height: "100%",

              padding:
                screenWidth <= 380
                  ? "20px 15px"
                  : "24px 20px",

              boxSizing: "border-box",

              overflowY: "auto",

              background:
                "linear-gradient(145deg,#020617,#0F172A,#111827)",

              borderLeft:
                "1px solid rgba(56,189,248,0.22)",

              boxShadow:
                "-15px 0 50px rgba(0,0,0,0.5)",

              animation:
                "mobileMenuSlide 0.3s ease",
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            {/* MOBILE HEADER */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent:
                  "space-between",

                paddingBottom: "20px",
                marginBottom: "18px",

                borderBottom:
                  "1px solid rgba(56,189,248,0.12)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "19px",
                    fontWeight: "800",

                    background:
                      "linear-gradient(135deg,#38BDF8,#8B5CF6)",

                    WebkitBackgroundClip:
                      "text",

                    WebkitTextFillColor:
                      "transparent",
                  }}
                >
                  Nagur Jani
                </div>

                <div
                  style={{
                    marginTop: "4px",

                    color: "#64748B",

                    fontSize: "10px",
                  }}
                >
                  Java Full Stack Developer
                </div>
              </div>

              <button
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                aria-label="Close menu"
                style={{
                  width: "36px",
                  height: "36px",

                  borderRadius: "10px",

                  border:
                    "1px solid rgba(56,189,248,0.22)",

                  background:
                    "rgba(56,189,248,0.07)",

                  color: "#CBD5E1",

                  fontSize: "22px",

                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>

            {/* MOBILE LINKS */}

            {navItems.map((item, index) => {
              const id = item.href.substring(1);

              const isActive =
                activeSection === id;

              return (
                <button
                  key={item.href}
                  onClick={() =>
                    scrollToSection(id)
                  }
                  style={{
                    width: "100%",

                    display: "flex",
                    alignItems: "center",

                    padding:
                      screenWidth <= 380
                        ? "13px 12px"
                        : "14px 15px",

                    margin: "7px 0",

                    borderRadius: "13px",

                    border: isActive
                      ? "1px solid rgba(56,189,248,0.32)"
                      : "1px solid rgba(56,189,248,0.05)",

                    background: isActive
                      ? "linear-gradient(135deg,rgba(59,130,246,0.20),rgba(6,182,212,0.12))"
                      : "rgba(15,23,42,0.32)",

                    color: isActive
                      ? "#F8FAFC"
                      : "#CBD5E1",

                    fontSize:
                      screenWidth <= 380
                        ? "14px"
                        : "15px",

                    fontWeight: "600",

                    cursor: "pointer",

                    textAlign: "left",

                    boxShadow: isActive
                      ? "0 0 18px rgba(56,189,248,0.14)"
                      : "none",

                    animation: `mobileLinkFade 0.35s ease ${
                      index * 0.04
                    }s both`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "32px",

                      display: "inline-flex",

                      alignItems: "center",
                      justifyContent:
                        "center",

                      fontSize: "17px",
                    }}
                  >
                    {item.icon}
                  </span>

                  <span
                    style={{
                      flex: 1,
                    }}
                  >
                    {item.label}
                  </span>

                  {isActive && (
                    <span
                      style={{
                        width: "7px",
                        height: "7px",

                        borderRadius: "50%",

                        background:
                          "#38BDF8",

                        boxShadow:
                          "0 0 12px rgba(56,189,248,0.9)",
                      }}
                    />
                  )}
                </button>
              );
            })}

            {/* FOOTER */}

            <div
              style={{
                marginTop: "30px",
                paddingTop: "20px",

                borderTop:
                  "1px solid rgba(56,189,248,0.10)",

                textAlign: "center",

                color: "#64748B",

                fontSize: "10px",
              }}
            >
              © 2026 Nagur Jani Shaik
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          ANIMATIONS
      ================================================= */}

      <style>
        {`
          @keyframes navbarSlideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes activePulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.75;
            }

            50% {
              transform: scale(1.35);
              opacity: 1;
            }
          }

          @keyframes overlayFade {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          @keyframes mobileMenuSlide {
            from {
              opacity: 0;
              transform: translateX(100%);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes mobileLinkFade {
            from {
              opacity: 0;
              transform: translateX(12px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          button,
          a {
            -webkit-tap-highlight-color: transparent;
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </>
  );
}

/* =====================================================
   HAMBURGER
===================================================== */

const hamburgerLine = {
  width: "21px",
  height: "2px",

  background: "#CBD5E1",

  borderRadius: "5px",

  transition:
    "transform 0.3s ease, opacity 0.3s ease, background 0.3s ease",
};

const hamburgerLine1Active = {
  transform:
    "rotate(45deg) translate(5px, 5px)",

  background: "#38BDF8",

  boxShadow:
    "0 0 8px rgba(56,189,248,0.7)",
};

const hamburgerLine2Active = {
  opacity: 0,
};

const hamburgerLine3Active = {
  transform:
    "rotate(-45deg) translate(5px, -5px)",

  background: "#38BDF8",

  boxShadow:
    "0 0 8px rgba(56,189,248,0.7)",
};

export default Navbar;