import React from "react";

export const EmailTemplate = ({ subject, message, senderEmail }) => {
  const containerStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: "#f4f4f5",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "32px",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e4e4e7",
  };

  const headerStyle = {
    borderBottom: "1px solid #e4e4e7",
    paddingBottom: "20px",
    marginBottom: "24px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#18181b",
    margin: "0 0 8px 0",
  };

  const subtitleStyle = {
    fontSize: "14px",
    color: "#71717a",
    margin: "0",
  };

  const bodyStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#3f3f46",
    whiteSpace: "pre-wrap",
    marginBottom: "32px",
  };

  const footerStyle = {
    borderTop: "1px solid #e4e4e7",
    paddingTop: "20px",
    fontSize: "12px",
    color: "#a1a1aa",
    textAlign: "center",
  };

  const highlightStyle = {
    color: "#06b6d4",
    fontWeight: "500",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>{subject}</h1>
          <p style={subtitleStyle}>
            New message from <span style={highlightStyle}>{senderEmail}</span>
          </p>
        </div>
        
        <div style={bodyStyle}>
          {message}
        </div>

        <div style={footerStyle}>
          <p>This email was sent from your portfolio website.</p>
          <p>&copy; {new Date().getFullYear()} Thanh Dat Tran</p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
