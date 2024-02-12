// EducationSection.js
import React from 'react';

const EducationSection = () => {
  // Define your education experiences data
  const educationExperiences = [
    {
      school: "<strong>Mary M. Knight High School</strong>",
      degree: "High School Diploma (1993)"
    },
    {
      school: "<strong>Olympic College</strong>",
      degree: "Associate of Applied Science-Transfer Software Development (2023)"
    }
    // Add more education experiences as needed
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      {/* Loop through education experiences and create and append paragraphs */}
      {educationExperiences.map((education, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: `${education.school} - ${education.degree}` }} />
      ))}
    </section>
  );
};

export default EducationSection;
