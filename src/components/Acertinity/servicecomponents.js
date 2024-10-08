import { jsx as _jsx } from "react/jsx-runtime";
import ProjectCard from "./service";
const projectData = [
    {
        imageSrc: "./src/assets/web-design.png",
        title: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        imageSrc: "./src/assets/poster.png",
        title: "Poster Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        imageSrc: "./src/assets/web.png",
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
];
const ProjectGrid = () => {
    return (_jsx("div", { className: " min-h-screen flex items-center justify-center", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-20", children: projectData.map((project, index) => (_jsx(ProjectCard, { imageSrc: project.imageSrc, title: project.title, description: project.description }, index))) }) }));
};
export default ProjectGrid;
