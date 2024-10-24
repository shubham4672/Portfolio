import { useState } from "react";
import { WEB_PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("web");

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
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h2>
      <div className='mb-16 flex flex-col md:flex-row justify-center gap-5 md:gap-10'>
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
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
              <a href={project.link} target='_blank'>
                <img
                  src={project.image}
                  alt={project.title}
                  width={210}
                  height={170}
                  className='mb-6 rounded'
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <a href={project.gitLink} target='_blank'>
                <h6 className='mb-2 font-semibold'>{project.title}</h6>
              </a>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
