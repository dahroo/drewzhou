import React from 'react';
import projectsData from "@/data/projectsData";

const ProjectsView: React.FC = () => {
  return (
    <div className="space-y-4">
      {projectsData.map((project) => (
        <a
          key={project.title}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block border p-4 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          <div>
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectsView;