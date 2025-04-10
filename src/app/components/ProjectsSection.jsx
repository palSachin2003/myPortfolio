"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Application",
    description:
      "A full-featured e-commerce platform with product listings, cart, and payment integration built using MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/palSachin2003/mooncartbankend",
    previewUrl: "https://mooncart-sachin.netlify.app/",
  },
  {
    id: 2,
    title: "Blog Application",
    description:
      "A modern blogging platform where users can create, edit, delete posts, and view blogs from others.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/palSachin2003/blogapp",
    previewUrl: "https://apna-blog-sachin.netlify.app/",
  },
  {
    id: 3,
    title: "E-commerce Dashboard Application",
    description:
      "An admin dashboard for monitoring sales, orders, customers, and inventory for an online store.",
    tech: ["React", "Chart.js", "Tailwind CSS", "React Router"],
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/palSachin2003",
    previewUrl: "https://e-commerce-dash-sachin.netlify.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
