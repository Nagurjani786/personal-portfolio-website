import React from "react";

function Skills() {
  const skills = {
    Programming: ["Java", "SQL", "JavaScript"],
    Frontend: ["HTML", "CSS", "React"],
    Database: ["MySQL"],
    Tools: ["GitHub", "VS Code"]
  };

  // icon mapping
  const icons = {
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  };

  return (
    <section id="skills" className="section">
      <h2 className="title">Skills</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <div className="card" key={category}>
            <h3 style={{ color: "#3B82F6" }}>{category}</h3>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {items.map((skill) => (
                <li
                  key={skill}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "8px"
                  }}
                >
                  <img
                    src={icons[skill]}
                    alt={skill}
                    style={{ width: "22px", height: "22px" }}
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;