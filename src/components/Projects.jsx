import { useState } from "react";
import { WEB_PROJECTS } from "../constants";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter the projects based on the active category
  const filteredProjects = WEB_PROJECTS.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "web") return project.category === "web";
    if (activeCategory === "clones") return project.category === "clones";
    if (activeCategory === "design") return project.category === "design";
    return true;
  });

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div className='mb-16 flex justify-center gap-10'>
        <span
          className={`mr-2 rounded px-4 py-1 text-md font-medium cursor-pointer ${
            activeCategory === "all"
              ? "bg-gradient-to-r from-pink-300 to-purple-500 text-black"
              : ""
          }`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </span>
        <span
          className={`mr-2 rounded px-4 py-1 text-md font-medium cursor-pointer ${
            activeCategory === "web"
              ? "bg-gradient-to-r from-pink-300 to-purple-500  text-black"
              : ""
          }`}
          onClick={() => setActiveCategory("web")}
        >
          Web
        </span>
        <span
          className={`mr-2 rounded px-4 py-1 text-md font-medium cursor-pointer ${
            activeCategory === "clones"
              ? "bg-gradient-to-r from-pink-300 to-purple-500 text-black"
              : ""
          }`}
          onClick={() => setActiveCategory("clones")}
        >
          Clones
        </span>
        <span
          className={`mr-2 rounded px-4 py-1 text-md font-medium cursor-pointer ${
            activeCategory === "design"
              ? "bg-gradient-to-r from-pink-300 to-purple-500 text-black"
              : ""
          }`}
          onClick={() => setActiveCategory("design")}
        >
          UI Designs
        </span>
      </div>
      <div className='active--project'>
        {filteredProjects.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <a href={project.link}>
                <img
                  src={project.image}
                  alt={project.title}
                  width={210}
                  height={170}
                  className='mb-6 rounded'
                />
              </a>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
