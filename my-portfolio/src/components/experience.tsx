import React from "react";

interface ExperienceProps {
  position: string;
  time: string;
  company: string;
  location: string;
  responsibilities: string[];
}

const experiences: ExperienceProps[] = [
  {
    position: "Full Stack Developer / IT Specialist",
    time: "August 2022 - July 2024",
    company: "IBM",
    location: "Halifax, Canada",
    responsibilities: [
      "Worked on developing a hybrid mobile app for Android and iOS using React.js and Java Spring MVC.",
      "Implemented responsive design for mobile devices, Integrated external APIs for additional functionalities and developed REST APIs and services using Java Spring MVC.",
      "Debugged and fixed potential security issues in the web application by leveraging SAST scanners and code audits, reducing vulnerability score by up to 25%.",
      "Integrated WCAG-compliant accessibility features for assisting visually impaired customers.",
    ],
  },
  {
    position: "ERP/CRM Developer",
    time: "January 2022 - April 2022",
    company: "National Research Council Canada (NRC)",
    location: "Halifax, Canada",
    responsibilities: [
      "Worked in an agile team environment identifying the existing challenges and gathering requirements for merging two legacy platforms.",
      "Developed the company’s blog articles using HTML, CSS, and JavaScript.",
      "Designed and Developed a change management process following ITIL standards in Microsoft Azure which reduced the resolution time of change requests by 30%.",
    ],
  },
  {
    position: "Software Developer",
    time: "May 2020 - April 2021",
    company: "Sabarmati Ashram Gaushala (SAG)",
    location: "Bidaj, India",
    responsibilities: [
      "Worked on the company marketing web app, which is used to organize and order the company’s products.",
      "Developed Rest APIs and implemented core business logic for online customer demand and complaint management features using Java Spring Boot and Spring JDBC.",
      "Performed bug fixes on the existing features by determining the root cause.",
      "Optimized existing queries, resulting in a 40% reduction in response time.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-700">{exp.position}</h3>
            <p className="text-sm text-gray-600">{exp.time}</p>
            <p className="text-sm text-gray-600">{exp.company}, {exp.location}</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
              {exp.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;