import React from 'react';

const WorkExperienceSection = () => {
  // Define your work experiences data
  const jobExperiences = [
    {
      jobTitle: "RTS Associate",
      employer: "Amazon",
      date: "2022-2023",
      description: "Played a key role in enhancing operations at Amazon DSE-8 in Bremerton, Washington. Proficiently managed inventory accuracy and provided essential support to cross-functional teams. Adhered to stringent safety protocols, adapted adeptly to evolving procedures, and consistently exceeded productivity benchmarks. Fostered a collaborative and communicative team dynamic, providing valuable assistance to colleagues."
    },
    {
      jobTitle: "FT Division Supervisor",
      employer: "USS Louisiana SSBN 743(G)",
      date: "2012-2017",
      description: "Coordinated hundreds of jobs between four maintenance facility shops during arduous maintenance periods, ensuring Louisiana's Data Processing and Underwater Acoustic Monitoring were ready for strategic tasking. Supervised and maintained the overall operations and security of a division of personnel standing 5 stations on board a Nuclear Submarine. Counseled personnel on their career incentives and future employments."
    },
    {
      jobTitle: "IT Division Supervisor",
      employer: "Commander Submarine Force, U. S. Pacific Fleet",
      date: "March 2010 - July 2012",
      description: "Trained and groomed eight sailors and twenty-five civilians and contractors in the structural rehabilitation of the staff headquarters building. Managed the reporting and tracking process of 58 spillages throughout the Pacific Theater of Operation. Coordinated the upgrading of 783 assets in the 2011 tech refresh. The partnering with civilian counterparts resulted in the procurement and replacement of staff network and peripheral upgrades with minimal downtime."
    },
    {
      jobTitle: "Correction Officer",
      employer: "Camp Taji, Iraq (Government Service)",
      date: "October 2009-March 2010",
      description: "Supervised every element of overall operations and security of 12 personnel in charge of Camp Taji's procedures to include escort operations, restraint application, forced cell extractions, Detainee Information Management System (DIMS), Islamic cultural awareness. Provided safe humane care and custody of enemy combatants, collected intelligence for law enforcement and war crime investigations in support of Operation Iraqi Freedom."
    }
  ];

  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      {/* Map through job experiences and create and append paragraphs */}
      {jobExperiences.map((experience, index) => (
        <div key={index}>
          <p><strong>{experience.jobTitle}</strong></p>
          <p>{experience.employer} ({experience.date})</p>
          <p>{experience.description}</p>
          <br />
        </div>
      ))}
    </section>
  );
};

export default WorkExperienceSection;
