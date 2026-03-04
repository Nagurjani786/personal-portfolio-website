import React from "react";

function Resume() {
  return (
    <section
      id="resume"
      style={{
        padding: "100px 20px",
        scrollMarginTop: "80px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "40px",
          color: "#3B82F6",
        }}
      >
        Resume
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* LEFT CARD */}
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a, #020617)",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: "0 0 20px rgba(59,130,246,0.2)",
          }}
        >
          <h3 style={{ color: "#3B82F6", marginBottom: "10px" }}>
            Download Resume
          </h3>

          <p style={{ color: "#cbd5f5", fontSize: "14px", marginBottom: "20px" }}>
            Get a complete overview of my experience, skills, and achievements.
          </p>

          <a
            href="/resume.pdf"   // put your resume file in public folder
            download
            style={{
              display: "inline-block",
              padding: "12px 20px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #3B82F6, #2563EB)",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 0 15px rgba(59,130,246,0.6)",
            }}
          >
            📄 Download PDF
          </a>
        </div>

        {/* RIGHT CARD */}
        <div
          style={{
            background: "linear-gradient(135deg, #020617, #0f172a)",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: "0 0 20px rgba(59,130,246,0.2)",
          }}
        >
          <h3 style={{ color: "#3B82F6", marginBottom: "10px" }}>
            Key Highlights
          </h3>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "#cbd5f5",
              fontSize: "14px",
            }}
          >
            <li style={{ marginBottom: "10px" }}>🚀 Built impactful web applications</li>
            <li style={{ marginBottom: "10px" }}>⚡ Optimized performance by 60%</li>
            <li style={{ marginBottom: "10px" }}>👨‍🏫 Mentored junior developers</li>
            <li style={{ marginBottom: "10px" }}>🏆 Delivered production-ready projects</li>
            <li style={{ marginBottom: "10px" }}>📈 Improved application scalability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;