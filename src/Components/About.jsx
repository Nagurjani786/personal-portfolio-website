import React from "react";

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#0F172A",
        color: "#F1F5F9",
        padding: "100px 10%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "60px",
          color: "#3B82F6",
        }}
      >
        About Me
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {/* Left Side - About Card */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            background: "rgba(30, 41, 59, 0.7)",
            padding: "30px",
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
          }}
        >
          <p>
            I'm a passionate Full Stack Developer with strong foundations in
            Java, React, and SQL. I specialize in building scalable web
            applications and writing clean, efficient code.
          </p>

          <br />

          <p>
            With analytical thinking and structured development practices,
            I focus on delivering production-ready solutions and impactful
            digital experiences.
          </p>
        </div>

        {/* Right Side - Skills */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          
          {/* Frontend */}
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "#3B82F6", marginBottom: "15px" }}>
              Frontend
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["React", "JavaScript", "HTML", "CSS"].map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "#1E293B",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    border: "1px solid #3B82F6",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "#3B82F6", marginBottom: "15px" }}>
              Backend
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["Java", "SQL", "MySQL"].map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "#1E293B",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    border: "1px solid #3B82F6",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 style={{ color: "#3B82F6", marginBottom: "15px" }}>
              Tools
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["GitHub", "VS Code", "Eclipse"].map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "#1E293B",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    border: "1px solid #3B82F6",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;