import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
      {/* <div></div> */}
      <p>Copyright {footerYear}</p>
    </footer>
  );
}

export default Footer;
