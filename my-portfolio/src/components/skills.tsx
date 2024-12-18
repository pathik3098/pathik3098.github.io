import React from "react";

const skills = [
  "JavaScript", "Java", "TypeScript", "Python", "Agile", "REST API", "Junit", "Hibernate", "Microservice",
  "HTML", "CSS", "React.js", "Node.js", "Express.js", "Spring Boot", "Bootstrap", "MongoDB", "SDLC", "TDD",
  "SQL Server", "Neo4j", "Amazon Web Services (AWS)", "Google Cloud Services (GCP)", "Docker", "Heroku", 
  "Git", "Jira", "Jenkins", "Maven", "IBM Cognos", "Power BI", "Microsoft Dynamics 365"
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-100 text-blue-700 text-center py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;