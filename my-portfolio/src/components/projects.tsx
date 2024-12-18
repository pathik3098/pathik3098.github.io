import React from "react";

interface ProjectProps {
  title: string;
  description: string[];
}

const projects: ProjectProps[] = [
  {
    title: "Halifax Foodie",
    description: [
      "Created a Food ordering web application using serverless cloud technologies.",
      "The app's frontend was developed with React.js, while the backend was created with Node.js and hosted on AWS Lambda, with a REST API built using AWS API Gateway for access.",
      "To provide better customer service, a fully interactive chatbot was created using AWS LEX with features like online order placement, live order status, and more.",
      "Developed an ML model which evaluates the similarities of recipes of restaurants using Google AutoML.",
    ],
  },
  {
    title: "MyCloud Gallery",
    description: [
      "Developed a photo gallery web application using React.js and Express.js which enables users to share photos among friends as well as publicly using expirable photo-link.",
      "Created REST API for photo link sharing in Python using AWS API Gateway, AWS Lambda and hosted the application on AWS Beanstalk.",
    ],
  },
  {
    title: "Volunteer Mart",
    description: [
      "Built a Web application to enable volunteers to assist senior citizens with their daily grocery shopping from home.",
      "Conducted a thorough analysis of the application user base and created wireframes and sitemaps for the initial web designing phase.",
      "Followed MERN (MongoDB, Express.js, React.js, Node.js) stack architecture for development.",
      "Developed the application landing page, User Management, and Product catalog.",
      "Implemented various REST APIs to connect to the backend database.",
    ],
  },
  {
    title: "Online Chess",
    description: [
      "Developed a Java Spring Boot Chess tournament application, following Agile methodology, Test-driven development, and Software design principles.",
      "Covered 100% of the code with test cases using the Junit testing framework.",
      "Implemented the core game logic and built a CI/CD pipeline to automate the build, testing, and deployment of the application using the GitLab platform.",
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-700">{project.title}</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;