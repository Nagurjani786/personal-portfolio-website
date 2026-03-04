import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        backgroundColor: "#0F172A",
        color: "#F1F5F9",
        scrollMarginTop: "80px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "60px",
          color: "#3B82F6",
        }}
      >
        Let's Connect
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "50px",
          maxWidth: "1000px",
          margin: "0 auto",
          alignItems: "flex-start",
        }}
      >
        {/* Contact Form */}
        <div
          style={{
            background: "linear-gradient(135deg, #1E293B, #0F172A)",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 0 20px rgba(59,130,246,0.2)",
            border: "1px solid rgba(59,130,246,0.1)",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <label htmlFor="name" style={{ display: "block", marginBottom: "8px", color: "#F1F5F9", fontSize: "16px" }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #3B82F6",
                  backgroundColor: "#1E293B",
                  color: "#F1F5F9",
                  fontSize: "16px",
                  boxSizing: "border-box",
                }}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" style={{ display: "block", marginBottom: "8px", color: "#F1F5F9", fontSize: "16px" }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #3B82F6",
                  backgroundColor: "#1E293B",
                  color: "#F1F5F9",
                  fontSize: "16px",
                  boxSizing: "border-box",
                }}
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" style={{ display: "block", marginBottom: "8px", color: "#F1F5F9", fontSize: "16px" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #3B82F6",
                  backgroundColor: "#1E293B",
                  color: "#F1F5F9",
                  fontSize: "16px",
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                color: "white",
                padding: "12px 24px",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(59,130,246,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Get in Touch Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "15px",
                color: "#3B82F6",
              }}
            >
              Get in Touch
            </h3>
            <p
              style={{
                color: "#94A3B8",
                lineHeight: "1.6",
                marginBottom: "25px",
              }}
            >
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: "18px",
                marginBottom: "15px",
                color: "#F1F5F9",
              }}
            >
              Contact Information
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p style={{ color: "#94A3B8", margin: "0" }}>
                📧 nagurjanishaik779@gmail.com
              </p>
              <p style={{ color: "#94A3B8", margin: "0" }}>
                📱 +91 8106559861
              </p>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: "18px",
                marginBottom: "15px",
                color: "#F1F5F9",
              }}
            >
              Follow Me
            </h4>
            <div
              style={{
                display: "flex",
                gap: "15px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/shaik-nagur-jani-76212b318/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0077B5, #005885)",
                  color: "white",
                  textDecoration: "none",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                in
              </a>
              <a
                href="https://github.com/Nagurjani786"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #333333, #000000)",
                  color: "white",
                  textDecoration: "none",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;