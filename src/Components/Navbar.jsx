import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "blog", "resume", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "👤" },
    { href: "#skills", label: "Skills", icon: "💻" },
    { href: "#projects", label: "Projects", icon: "🚀" },
    { href: "#blog", label: "Blog", icon: "📝" },
    { href: "#resume", label: "Resume", icon: "📄" },
    { href: "#contact", label: "Contact", icon: "📧" },
  ];

  return (
    <nav style={{...navStyle, ...(scrolled && navScrolledStyle)}} className="fade-in-down">
      {/* LEFT LOGO */}
      <div style={logoContainer}>
        <div style={logoWrapper}>
          <div style={logoInner}>
            <span style={logoIcon}>NJ</span>
          </div>
        </div>
        <div style={nameContainer}>
          <span style={nameStyle}>Nagur Jani</span>
          <span style={titleStyle}>Full Stack Developer</span>
        </div>
      </div>

      {/* RIGHT MENU */}
      <div style={menuStyle}>
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              ...linkStyle,
              ...(activeSection === item.href.slice(1) && activeLinkStyle)
            }}
            className="nav-link"
          >
            <span style={linkIcon}>{item.icon}</span>
            <span style={linkText}>{item.label}</span>
            {activeSection === item.href.slice(1) && (
              <div style={activeIndicator}></div>
            )}
          </a>
        ))}
      </div>

      {/* MOBILE MENU BUTTON */}
      <button style={mobileMenuButton} className="mobile-menu-btn">
        <div style={hamburgerLine}></div>
        <div style={hamburgerLine}></div>
        <div style={hamburgerLine}></div>
      </button>
    </nav>
  );
}

export default Navbar;

/* ================= PROFESSIONAL STYLES ================= */

const navStyle = {
  height: "90px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 8%",
  backgroundColor: "rgba(15, 23, 42, 0.8)",
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  transition: "all 0.3s ease",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
};

const navScrolledStyle = {
  height: "75px",
  backgroundColor: "rgba(15, 23, 42, 0.95)",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
  borderBottom: "1px solid rgba(59, 130, 246, 0.3)",
};

const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  cursor: "pointer",
  transition: "transform 0.3s ease",
};

const logoWrapper = {
  position: "relative",
  width: "50px",
  height: "50px",
};

const logoInner = {
  width: "100%",
  height: "100%",
  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
  position: "relative",
  overflow: "hidden",
};

const logoInnerBefore = {
  content: '""',
  position: "absolute",
  top: 0,
  left: -100,
  width: "100%",
  height: "100%",
  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
  transition: "left 0.5s ease",
};

const logoInnerHoverBefore = {
  left: "100%",
};

const logoIcon = {
  color: "white",
  fontWeight: "800",
  fontSize: "18px",
  letterSpacing: "1px",
};

const nameContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "2px",
};

const nameStyle = {
  color: "#F1F5F9",
  fontWeight: "700",
  fontSize: "22px",
  lineHeight: "1",
  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const titleStyle = {
  color: "#94A3B8",
  fontSize: "12px",
  fontWeight: "500",
  letterSpacing: "0.5px",
};

const menuStyle = {
  display: "flex",
  gap: "8px",
  alignItems: "center",
  background: "rgba(30, 41, 59, 0.5)",
  padding: "8px 16px",
  borderRadius: "50px",
  border: "1px solid rgba(59, 130, 246, 0.1)",
};

const linkStyle = {
  textDecoration: "none",
  color: "#CBD5E1",
  fontSize: "14px",
  fontWeight: "500",
  padding: "10px 16px",
  borderRadius: "25px",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  position: "relative",
  cursor: "pointer",
};

const activeLinkStyle = {
  color: "#F1F5F9",
  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
  border: "1px solid rgba(59, 130, 246, 0.3)",
};

const linkIcon = {
  fontSize: "16px",
  opacity: 0.8,
};

const linkText = {
  fontWeight: "600",
};

const activeIndicator = {
  position: "absolute",
  bottom: "-2px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "4px",
  height: "4px",
  background: "#3B82F6",
  borderRadius: "50%",
  boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
};

const mobileMenuButton = {
  display: "none",
  flexDirection: "column",
  gap: "4px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "8px",
};

const hamburgerLine = {
  width: "24px",
  height: "2px",
  background: "#CBD5E1",
  borderRadius: "2px",
  transition: "all 0.3s ease",
};

// Note: Responsive styles should be handled with CSS classes or inline styles
// The media query syntax above was incorrect for JavaScript objects