import React from "react";

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/pathik-patel-60b772149/" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pathikpatel307@gmail.com" // Replace with your email
            className="text-blue-500 hover:text-blue-400 transition"
          >
            Email
          </a>
          <a
            href="tel:+1 (705) 918 6790" // Replace with your phone number
            className="text-blue-500 hover:text-blue-400 transition"
          >
            Phone
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Pathik Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;