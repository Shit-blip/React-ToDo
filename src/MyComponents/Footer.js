import React from 'react';

export const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#333",  // Optional, just for styling
    color: "#fff",            // Optional, just for styling
    borderTop: "2px solid red", // Optional, just for styling
    textAlign: "center",
    padding: "10px 0"
  };

  return (
    <footer style={footerStyle}>
      <p>
        Copyright &copy; MyComponents.com
      </p>
    </footer>
  );
};
