import React from 'react';

const ContactSection = ({ contactInformation }) => {
  return (
    <section id="contact">
      <h2>Contact Information</h2>
      <address>
        <a id="email-link" href="mailto:brianlouderback@student.olympic.edu">Email Me</a>
        <a id="github-link" href="https://github.com/blouderbback8" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        <a id="smoothcomp-link" href="https://smoothcomp.com/en/profile/90086" target="_blank" rel="noopener noreferrer">Smoothcomp Profile</a>
      </address>
    </section>
  );
};

export default ContactSection;
