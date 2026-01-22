"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Teaching Assistant",
    description:
      "Mobile app for managing classes, attendance, discussions, and feedback in real-time.",
    image: "/images/projects/TeachingAssistant.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DatTranDev/TeachingAssistantBE",
    previewUrl:
      "https://drive.google.com/file/d/1Zjc40ntRcGHRqd_4H7RIh6JjEf2EVQdS/view",
    techStackIds: ["Node.js", "MongoDB", "React Native", "Firebase"],
    featured: true,
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "App for tracking income, expenses, and personal budgets with visual insights.",
    image: "/images/projects/ExpenseTracker.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DatTranDev/ExpenseTrackerBE",
    previewUrl: "https://github.com/DatTranDev/ExpenseTrackerBE",
    techStackIds: ["Node.js", "MongoDB", "Android", "Firebase"],
  },
  {
    id: 3,
    title: "Book Store Management",
    description:
      "Desktop app to manage bookstore inventory, sales, customers, and reports.",
    image: "/images/projects/BookStore.png",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/DatTranDev/QuanLiNhaSach-UIT",
    previewUrl: "https://github.com/DatTranDev/QuanLiNhaSach-UIT",
    techStackIds: [".NET", "SQL Server"],
  },
  {
    id: 4,
    title: "Shoes Store",
    description: "E-commerce website for browsing and purchasing shoes online.",
    image: "/images/projects/Ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DatTranDev/EcommerceWeb",
    previewUrl: "https://github.com/DatTranDev/EcommerceWeb",
    techStackIds: ["MySQL", "Java Servlet"],
  },
  {
    id: 5,
    title: "Skill Exchange",
    description:
      "Mobile platform for matching users to exchange skills via ELO-based system.",
    image: "/images/projects/SkillExchange.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DatTranDev/SkillExchange",
    previewUrl: "/",
    techStackIds: ["Node.js", "MongoDB", "React Native", "Firebase"],
  },
  {
    id: 6,
    title: "Coffee Management",
    description:
      "Web system to manage menu, orders, staff, reports, and customers.",
    image: "/images/projects/CoffeeShop.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DatTranDev/CoffeeManagementWeb",
    previewUrl: "/",
    techStackIds: ["React", ".NET", "SQL Server"],
  },
];

const tags = ["All", "Web", "Mobile", "Desktop"];

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(activeTag)
  );

  return (
    <section id="projects" className="py-16 md:py-24">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-outfit font-black text-4xl md:text-5xl lg:text-6xl mb-4">
          <span className="text-gradient-thermal">My Projects</span>
        </h2>
        <motion.div
          className="h-1 w-24 mx-auto bg-gradient-to-r from-ember to-teal rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <p className="text-silver mt-6 max-w-lg mx-auto">
          A collection of projects showcasing my development journey
        </p>
      </motion.div>

      {/* Filter Tags */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
              activeTag === tag
                ? "bg-gradient-to-r from-ember to-ember-light text-white shadow-glow-sm"
                : "bg-night-lighter text-silver border border-silver/10 hover:border-ember/30 hover:text-silver-light"
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                techStackIds={project.techStackIds}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
