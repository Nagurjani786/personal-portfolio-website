import React from 'react';

function BlogPosts() {
  const blogPosts = [
    {
      date: "Dec 15, 2024",
      category: "React",
      title: "Building Performant React Applications with Server Components",
      description: "Exploring the latest React Server Components and how they can dramatically improve your application's performance...",
      link: "#"
    },
    {
      date: "Dec 8, 2024", 
      category: "DevOps",
      title: "Kubernetes Best Practices for Production Deployments",
      description: "A comprehensive guide to deploying and managing applications in Kubernetes clusters at scale...",
      link: "#"
    },
    {
      date: "Nov 28, 2024",
      category: "AI/ML", 
      title: "Integrating AI into Web Applications: A Practical Guide",
      description: "Learn how to integrate AI into web applications with modern tools and frameworks...",
      link: "#"
    }
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case "React": return "linear-gradient(135deg, #61DAFB, #21759B)";
      case "DevOps": return "linear-gradient(135deg, #326CE5, #1A5490)";
      case "AI/ML": return "linear-gradient(135deg, #FF6B6B, #C92A2A)";
      default: return "linear-gradient(135deg, #3B82F6, #2563EB)";
    }
  };

  return (
    <section 
      id="blog"
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
          marginBottom: "40px",
          color: "#3B82F6",
        }}
      >
        Latest Blog Posts
      </h2>

      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {blogPosts.map((post, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(135deg, #1E293B, #0F172A)",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "0 0 20px rgba(59,130,246,0.2)",
              border: "1px solid rgba(59,130,246,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(59,130,246,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.2)";
            }}
          >
            {/* Header with date and category */}
            <div 
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <span 
                style={{
                  color: "#94A3B8",
                  fontSize: "14px",
                }}
              >
                {post.date}
              </span>
              <span
                style={{
                  background: getCategoryColor(post.category),
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h3 
              style={{
                fontSize: "18px",
                marginBottom: "12px",
                color: "#F1F5F9",
                lineHeight: "1.4",
              }}
            >
              {post.title}
            </h3>

            {/* Description */}
            <p 
              style={{
                color: "#94A3B8",
                fontSize: "14px",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              {post.description}
            </p>

            {/* Read More Link */}
            <a
              href={post.link}
              style={{
                color: "#3B82F6",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                transition: "gap 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.gap = "10px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.gap = "5px";
              }}
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPosts;
