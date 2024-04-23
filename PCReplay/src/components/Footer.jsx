import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto">
        <p>
          © {new Date().getFullYear()} Your E-Commerce Name. All Rights
          Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/about" className="hover:text-gray-300">
            About Us
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
          <a href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" className="hover:text-gray-300">
            Facebook
          </a>
          <a href="https://twitter.com" className="hover:text-gray-300">
            Twitter
          </a>
          <a href="https://instagram.com" className="hover:text-gray-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
