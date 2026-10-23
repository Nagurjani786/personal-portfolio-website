import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    const form = e.currentTarget;

    const formData = new FormData(form);

    // Web3Forms access key
    formData.append(
      "access_key",
      "c77d35f7-2ecb-4fe6-9294-5867dac58f87"
    );

    formData.append(
      "subject",
      "New Portfolio Contact Message"
    );

    formData.append(
      "from_name",
      "Nagur Jani Portfolio"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus(
          "✅ Message sent successfully! I will get back to you soon."
        );

        form.reset();
      } else {
        setStatus(
          "❌ Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setStatus(
        "❌ Something went wrong. Please try again."
      );
    }

    setSending(false);
  };

  return (
    <section
      id="contact"
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "100px 6%",
        background:
          "linear-gradient(180deg,#020617,#0F172A)",
        color: "#F1F5F9",
        scrollMarginTop: "80px",
        overflowX: "hidden",
      }}
    >
      {/* TITLE */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: "30px",
            background:
              "rgba(59,130,246,0.08)",
            border:
              "1px solid rgba(59,130,246,0.25)",
            color: "#38BDF8",
            fontSize: "10px",
            fontWeight: "800",
            letterSpacing: "2px",
            marginBottom: "12px",
          }}
        >
          GET IN TOUCH
        </span>

        <h2
          style={{
            margin: 0,
            fontSize: "40px",
            fontWeight: "800",
            color: "#F8FAFC",
          }}
        >
          Let's Connect
        </h2>

        <p
          style={{
            maxWidth: "600px",
            margin: "15px auto 0",
            color: "#94A3B8",
            fontSize: "14px",
            lineHeight: "1.7",
          }}
        >
          Have a project, job opportunity, or
          just want to say hello? Feel free to
          send me a message.
        </p>
      </div>

      {/* MAIN CONTAINER */}

      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
          alignItems: "stretch",
        }}
      >
        {/* CONTACT FORM */}

        <div
          style={{
            background:
              "linear-gradient(145deg,#0F172A,#020617)",
            borderRadius: "18px",
            padding: "30px",
            border:
              "1px solid rgba(59,130,246,0.18)",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.25)",
          }}
        >
          <h3
            style={{
              margin: "0 0 25px",
              color: "#38BDF8",
              fontSize: "22px",
            }}
          >
            Send Me a Message
          </h3>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {/* NAME */}

            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "7px",
                  color: "#CBD5E1",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  borderRadius: "9px",
                  border:
                    "1px solid rgba(59,130,246,0.3)",
                  background: "#020617",
                  color: "#F8FAFC",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>

            {/* EMAIL */}

            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "7px",
                  color: "#CBD5E1",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  borderRadius: "9px",
                  border:
                    "1px solid rgba(59,130,246,0.3)",
                  background: "#020617",
                  color: "#F8FAFC",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>

            {/* MESSAGE */}

            <div>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "7px",
                  color: "#CBD5E1",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Write your message..."
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  borderRadius: "9px",
                  border:
                    "1px solid rgba(59,130,246,0.3)",
                  background: "#020617",
                  color: "#F8FAFC",
                  fontSize: "14px",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={sending}
              style={{
                width: "100%",
                padding: "13px",
                border: "none",
                borderRadius: "9px",
                background:
                  sending
                    ? "#475569"
                    : "linear-gradient(135deg,#3B82F6,#2563EB)",
                color: "white",
                fontSize: "14px",
                fontWeight: "700",
                cursor: sending
                  ? "not-allowed"
                  : "pointer",
                transition: "0.3s",
              }}
            >
              {sending
                ? "Sending..."
                : "Send Message 🚀"}
            </button>

            {/* STATUS */}

            {status && (
              <p
                style={{
                  margin: "5px 0 0",
                  textAlign: "center",
                  color: status.startsWith("✅")
                    ? "#22C55E"
                    : "#F87171",
                  fontSize: "13px",
                  lineHeight: "1.5",
                }}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* CONTACT INFORMATION */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0 0 15px",
                color: "#38BDF8",
                fontSize: "24px",
              }}
            >
              Get in Touch
            </h3>

            <p
              style={{
                margin: 0,
                color: "#94A3B8",
                lineHeight: "1.8",
                fontSize: "14px",
              }}
            >
              I'm always interested in hearing
              about new opportunities,
              collaborations, and exciting
              projects. Feel free to contact me
              through the form or using the
              details below.
            </p>
          </div>

          {/* EMAIL */}

          <div
            style={{
              padding: "18px",
              borderRadius: "14px",
              background:
                "rgba(30,41,59,0.5)",
              border:
                "1px solid rgba(59,130,246,0.12)",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                marginBottom: "8px",
              }}
            >
              📧
            </div>

            <h4
              style={{
                margin: "0 0 5px",
                color: "#F8FAFC",
                fontSize: "14px",
              }}
            >
              Email
            </h4>

            <a
              href="mailto:nagurjanishaik779@gmail.com"
              style={{
                color: "#38BDF8",
                textDecoration: "none",
                fontSize: "13px",
                wordBreak: "break-word",
              }}
            >
              nagurjanishaik779@gmail.com
            </a>
          </div>

          {/* PHONE */}

          <div
            style={{
              padding: "18px",
              borderRadius: "14px",
              background:
                "rgba(30,41,59,0.5)",
              border:
                "1px solid rgba(59,130,246,0.12)",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                marginBottom: "8px",
              }}
            >
              📱
            </div>

            <h4
              style={{
                margin: "0 0 5px",
                color: "#F8FAFC",
                fontSize: "14px",
              }}
            >
              Phone
            </h4>

            <a
              href="tel:+918106559861"
              style={{
                color: "#38BDF8",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              +91 8106559861
            </a>
          </div>

          {/* SOCIAL */}

          <div>
            <h4
              style={{
                margin: "0 0 14px",
                color: "#F8FAFC",
                fontSize: "17px",
              }}
            >
              Follow Me
            </h4>

            <div
              style={{
                display: "flex",
                gap: "12px",
              }}
            >
              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/nagur-jani-shaik-76212b318/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg,#0077B5,#005885)",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "800",
                  fontSize: "17px",
                }}
              >
                in
              </a>

              {/* GITHUB */}

              <a
                href="https://github.com/Nagurjani786"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg,#333,#000)",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.627 0 12 0z" />
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