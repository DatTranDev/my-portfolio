"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Teaching Assistant",
    description: "Mobile app for managing classes, attendance, discussions, and feedback in real-time.",
    image: "/images/projects/TeachingAssistant.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DatTranDev/TeachingAssistantBE",
    previewUrl: "https://drive.google.com/file/d/1Zjc40ntRcGHRqd_4H7RIh6JjEf2EVQdS/view",
    techStackIds: ["Node.js", "MongoDB", "React Native", "Firebase"]
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "App for tracking income, expenses, and personal budgets with visual insights.",
    image: "/images/projects/ExpenseTracker.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DatTranDev/ExpenseTrackerBE",
    previewUrl: "https://github.com/DatTranDev/ExpenseTrackerBE",
    techStackIds: ["Node.js", "MongoDB", "Android", "Firebase"]
  },
  {
    id: 3,
    title: "Book Store Management System",
    description: "Desktop app to manage bookstore inventory, sales, customers, and reports.",
    image: "/images/projects/BookStore.png",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/DatTranDev/QuanLiNhaSach-UIT",
    previewUrl: "https://github.com/DatTranDev/QuanLiNhaSach-UIT",
    techStackIds: [".NET", "SQL Server"]
  },
  {
    id: 4,
    title: "Shoes Store",
    description: "E-commerce website for browsing and purchasing shoes online.",
    image: "/images/projects/Ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DatTranDev/EcommerceWeb",
    previewUrl: "https://github.com/DatTranDev/EcommerceWeb",
    techStackIds: ["MySQL", "Java Servlet"]
  },
  {
    id: 5,
    title: "Skill Exchange",
    description: "Mobile platform for matching users to exchange skills and chat via ELO-based system.",
    image: "/images/projects/SkillExchange.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DatTranDev/SkillExchange",
    previewUrl: "/",
    techStackIds: ["Node.js", "MongoDB", "React Native", "Firebase"]
  },
  {
    id: 6,
    title: "Coffee Management",
    description: "Web system to manage menu, orders, staff, reports, and customer interactions.",
    image: "/images/projects/CoffeeShop.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DatTranDev/CoffeeManagementWeb",
    previewUrl: "/",
    techStackIds: ["React", ".NET", "SQL Server"]
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              techStackIds={project.techStackIds}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
