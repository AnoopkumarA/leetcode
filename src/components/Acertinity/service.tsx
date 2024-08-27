import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-[#101828] rounded-[3rem] p-6 flex flex-col items-center shadow-lg w-96 ">
      <img src={imageSrc} alt={title} className="w-48 h-32 mb-4" />
      <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 text-center mb-8">{description}</p>
      <a href="#" className="relative text-blue-400 font-medium border border-neutral-700 rounded-3xl px-4 py-1 transition duration-300 ease-in-out flex items-center overflow-hidden group">
  <span className="group-hover:mr-4 transition-all duration-300 ease-in-out">
    View Projects
  </span>
  <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center mr-1">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </span>
</a>


    </div>
  );
};

export default ProjectCard;
