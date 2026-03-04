import React from "react";

function Hero() {
  return (
    <section style={sectionStyle} className="fade-in-up">
      <div style={containerStyle}>
        
        {/* LEFT SIDE CONTENT */}
        <div style={leftStyle} className="fade-in-left">
          <div style={greetingStyle}>
            <span style={emojiStyle}>👋</span>
            <span style={greetingTextStyle}>Hi, I'm</span>
          </div>
          
          <h1 style={nameStyle}>
            Nagur Jani Shaik
          </h1>

          <div style={roleContainer}>
            <h2 style={roleStyle}>
              Full Stack Developer
            </h2>
            <div style={typingIndicator}>
              <span style={typingIndicatorSpan}></span>
              <span style={{...typingIndicatorSpan, ...typingIndicatorSpan1}}></span>
              <span style={{...typingIndicatorSpan, ...typingIndicatorSpan2}}></span>
            </div>
          </div>

          <p style={descStyle}>
            Passionate about crafting scalable web applications with clean architecture, 
            modern technologies, and innovative user experiences that make a difference.
          </p>

          <div style={buttonContainer}>
            <button style={btnPrimary} className="btn-primary">
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
            <button style={btnSecondary} className="btn-secondary">
              <span>Get In Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"/>
              </svg>
            </button>
          </div>

          {/* Social Links */}
          <div style={socialContainer}>
            <a href="https://github.com/Nagurjani786" target="_blank" rel="noopener noreferrer" style={socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/shaik-nagur-jani-76212b318/" target="_blank" rel="noopener noreferrer" style={socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CODE CARD */}
        <div style={rightStyle} className="fade-in-right">
          <div style={codeCard} className="float">
            <div style={codeHeader}>
              <div style={codeDots}>
                <span style={{...dot, background: "#FF5F56"}}></span>
                <span style={{...dot, background: "#FFBD2E"}}></span>
                <span style={{...dot, background: "#27C93F"}}></span>
              </div>
              <span style={codeTitle}>developer.js</span>
            </div>
            <div style={codeContent}>
              <p style={{ color: "#F472B6", margin: "0 0 8px 0" }}>const</p>
              <p style={{ margin: "0 0 16px 0" }}>
                <span style={{ color: "#22D3EE" }}>developer</span> = 
                <span style={{ color: "#FACC15" }}> "Nagur Jani Shaik"</span>
              </p>
              <p style={{ color: "#F472B6", margin: "0 0 8px 0" }}>function</p>
              <p style={{ margin: "0 0 8px 0" }}>
                <span style={{ color: "#22D3EE" }}>buildScalableApps</span>() {"{"}
              </p>
              <p style={{ color: "#94A3B8", marginLeft: "20px", margin: "0 0 8px 0" }}>
                // Engineering the future
              </p>
              <p style={{ color: "#94A3B8", marginLeft: "20px", margin: "0 0 8px 0" }}>
                // One line at a time
              </p>
              <p style={{ color: "#10B981", marginLeft: "20px", margin: "0 0 8px 0" }}>
                return <span style={{ color: "#FACC15" }}>success</span>;
              </p>
              <p>{"}"}</p>
            </div>
          </div>

          {/* Floating Elements */}
          <div style={floatingElement1} className="float"></div>
          <div style={floatingElement2} className="float"></div>
          <div style={floatingElement3} className="float"></div>
        </div>

      </div>
    </section>
  );
}

export default Hero;

/* ================= PROFESSIONAL STYLES ================= */

const sectionStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
  display: "flex",
  alignItems: "center",
  padding: "0 10%",
  position: "relative",
  overflow: "hidden",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  flexWrap: "wrap",
  gap: "60px",
  maxWidth: "1400px",
  margin: "0 auto",
};

const leftStyle = {
  flex: 1,
  minWidth: "350px",
  zIndex: 2,
};

const greetingStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "16px",
};

const emojiStyle = {
  fontSize: "28px",
  animation: "pulse 2s infinite",
};

const greetingTextStyle = {
  fontSize: "18px",
  color: "#94A3B8",
  fontWeight: "500",
};

const nameStyle = {
  fontSize: "4rem",
  fontWeight: "900",
  background: "linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "gradientShift 3s ease infinite",
  lineHeight: "1.1",
  marginBottom: "16px",
};

const roleContainer = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "24px",
};

const roleStyle = {
  fontSize: "1.8rem",
  color: "#E2E8F0",
  fontWeight: "600",
};

const typingIndicator = {
  display: "flex",
  gap: "4px",
  alignItems: "flex-end",
};

const typingIndicatorSpan = {
  width: "4px",
  height: "20px",
  background: "#3B82F6",
  borderRadius: "2px",
  animation: "pulse 1.4s infinite ease-in-out",
};

const typingIndicatorSpan1 = {
  animationDelay: "0s",
};

const typingIndicatorSpan2 = {
  animationDelay: "0.2s",
};

const typingIndicatorSpan3 = {
  animationDelay: "0.4s",
};

const descStyle = {
  fontSize: "1.1rem",
  maxWidth: "550px",
  color: "#94A3B8",
  lineHeight: "1.7",
  marginBottom: "32px",
};

const buttonContainer = {
  display: "flex",
  gap: "16px",
  marginBottom: "40px",
  flexWrap: "wrap",
};

const btnPrimary = {
  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
  color: "white",
  padding: "14px 32px",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
  position: "relative",
  overflow: "hidden",
};

const btnSecondary = {
  background: "transparent",
  color: "#E2E8F0",
  padding: "14px 32px",
  border: "2px solid #334155",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "all 0.3s ease",
};

const socialContainer = {
  display: "flex",
  gap: "16px",
};

const socialLink = {
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  background: "rgba(30, 41, 59, 0.8)",
  border: "1px solid #334155",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#94A3B8",
  textDecoration: "none",
  transition: "all 0.3s ease",
};

const rightStyle = {
  flex: 1,
  minWidth: "350px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const codeCard = {
  background: "rgba(15, 23, 42, 0.9)",
  backdropFilter: "blur(20px)",
  padding: "32px",
  borderRadius: "20px",
  color: "#E2E8F0",
  fontFamily: "'Fira Code', 'Courier New', monospace",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
  border: "1px solid rgba(59, 130, 246, 0.2)",
  position: "relative",
  zIndex: 2,
  minWidth: "400px",
};

const codeHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "24px",
  paddingBottom: "16px",
  borderBottom: "1px solid #334155",
};

const codeDots = {
  display: "flex",
  gap: "8px",
};

const dot = {
  width: "12px",
  height: "12px",
  borderRadius: "50%",
};

const codeTitle = {
  color: "#94A3B8",
  fontSize: "14px",
};

const codeContent = {
  fontSize: "14px",
  lineHeight: "1.6",
};

const floatingElement1 = {
  position: "absolute",
  top: "20%",
  right: "10%",
  width: "60px",
  height: "60px",
  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
  borderRadius: "50%",
  opacity: 0.1,
  animationDelay: "0s",
};

const floatingElement2 = {
  position: "absolute",
  top: "60%",
  right: "20%",
  width: "40px",
  height: "40px",
  background: "linear-gradient(135deg, #06B6D4, #10B981)",
  borderRadius: "50%",
  opacity: 0.1,
  animationDelay: "1s",
};

const floatingElement3 = {
  position: "absolute",
  bottom: "30%",
  right: "5%",
  width: "80px",
  height: "80px",
  background: "linear-gradient(135deg, #F59E0B, #EF4444)",
  borderRadius: "50%",
  opacity: 0.1,
  animationDelay: "2s",
};