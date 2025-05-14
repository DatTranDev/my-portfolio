"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Teaching Assistant",
    description: "A mobile application that supports lecturers and students in managing classes, attendance, discussions, notifications, and feedback in real-time.",
    image: "/images/projects/TeachingAssistant.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DatTranDev/TeachingAssistantBE",
    previewUrl: 'https://drive.google.com/file/d/1Zjc40ntRcGHRqd_4H7RIh6JjEf2EVQdS/view',
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "A mobile application that allows users to track income and expenses, visualize spending trends, and manage personal budgets.",
    image: "/images/projects/ExpenseTracker.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DatTranDev/ExpenseTrackerBE",
    previewUrl: "https://github.com/DatTranDev/ExpenseTrackerBE",
  },
  {
    id: 3,
    title: "Book Store Management System",
    description: "A desktop-based system for managing bookstore operations, including inventory, sales, invoices, customer management, and reporting.",
    image: "/images/projects/BookStore.png",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/DatTranDev/QuanLiNhaSach-UIT",
    previewUrl: "https://github.com/DatTranDev/QuanLiNhaSach-UIT",
  },
  {
    id: 4,
    title: "Shoes Store",
    description: "A modern web application for online shopping.",
    image: "/images/projects/Ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DatTranDev/EcommerceWeb",
    previewUrl: "https://github.com/DatTranDev/EcommerceWeb",
  },
  {
    id: 5,
    title: "Skill Exchange",
    description: "A mobile platform for users to connect and exchange skills through a matching system, chat rooms, and ELO-based ranking.",
    image: "/images/projects/SkillExchange.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DatTranDev/SkillExchange",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Coffee Management",
    description: "A web-based management system for coffee shop owners to manage menus, orders, staff, revenue reports, and customer interactions effectively.",
    image: "/images/projects/CoffeeShop.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DatTranDev/CoffeeManagementWeb",
    previewUrl: "/",
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
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
