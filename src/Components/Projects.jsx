import React from "react";

function Projects() {
  const projects = [
    {
      title: "Semiconductor Wafer Defect Detection",
      desc: "Built a deep learning model using ResNet50 + CBAM for automated wafer defect classification to improve semiconductor manufacturing accuracy.",
      tools: ["Python", "TensorFlow", "OpenCV"],
    },
    {
      title: "8-bit & 16-bit Reversible ALU Design",
      desc: "Designed low-power reversible logic ALU circuits to enhance energy efficiency for quantum and low-power computing applications.",
      tools: ["Verilog", "Xilinx Vivado"],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px",
        scrollMarginTop: "80px",   // prevents navbar overlap
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "40px",
          color: "inherit",        // SAME as About Me
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(135deg, #0f172a, #020617)",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 0 20px rgba(0,255,255,0.15)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "160px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #1e293b, #0f172a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              ⚛
            </div>

            <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "inherit" }}>
              {project.title}
            </h3>

            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "inherit" }}>
              {project.desc}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                margin: "15px 0",
              }}
            >
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "20px",
                    background: "rgba(56,189,248,0.15)",
                    color: "inherit",
                    fontSize: "12px",
                    border: "1px solid rgba(56,189,248,0.3)",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;