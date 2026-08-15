import React from "react";

function Resume() {
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1DSko85B6nHFcATy3AIapMDsYsZcU1gha";

  return (
    <section
      id="resume"
      style={{
        padding: "100px 20px",
        scrollMarginTop: "80px",
      }}
      className="resume-section"
    >
      {/* TITLE */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "40px",
          color: "#3B82F6",
        }}
        className="resume-title"
      >
        Resume
      </h2>

      {/* RESUME CONTAINER */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
        className="resume-container"
      >
        {/* LEFT CARD */}
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a, #020617)",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: "0 0 20px rgba(59,130,246,0.2)",
          }}
          className="resume-card"
        >
          <h3
            style={{
              color: "#3B82F6",
              marginBottom: "10px",
            }}
          >
            Download Resume
          </h3>

          <p
            style={{
              color: "#cbd5f5",
              fontSize: "14px",
              marginBottom: "20px",
              lineHeight: "1.6",
            }}
          >
            Get a complete overview of my education, technical skills,
            projects, internship experience, and achievements.
          </p>

          {/* DOWNLOAD BUTTON */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            download="Nagur_Jani_Resume.pdf"
            style={{
              display: "inline-block",
              padding: "12px 20px",
              borderRadius: "10px",
              background:
                "linear-gradient(135deg, #3B82F6, #2563EB)",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 0 15px rgba(59,130,246,0.6)",
              transition: "0.3s",
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
          className="resume-card"
        >
          <h3
            style={{
              color: "#3B82F6",
              marginBottom: "15px",
            }}
          >
            Key Highlights
          </h3>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "#cbd5f5",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            <li style={{ marginBottom: "12px" }}>
              ☕ Java & Object-Oriented Programming
            </li>

            <li style={{ marginBottom: "12px" }}>
              🗄️ SQL, MySQL & Hibernate/JPA
            </li>

            <li style={{ marginBottom: "12px" }}>
              ⚛️ React & JavaScript Development
            </li>

            <li style={{ marginBottom: "12px" }}>
              🌐 HTML & CSS Responsive Web Design
            </li>

            <li style={{ marginBottom: "12px" }}>
              🚀 Developed Multiple Real-World Projects
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;