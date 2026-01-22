"use client";
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const techStacks = [
  {
    id: 1,
    title: "Java",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    id: 2,
    title: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 3,
    title: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 4,
    title: "C#",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    id: 5,
    title: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 6,
    title: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 7,
    title: "Android",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  {
    id: 8,
    title: ".NET",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg",
  },
  {
    id: 9,
    title: "Firebase",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
  },
  {
    id: 10,
    title: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 11,
    title: "Postman",
    image: "https://skillicons.dev/icons?i=postman",
  },
  {
    id: 12,
    title: "Docker",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
  {
    id: 13,
    title: "React Native",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 14,
    title: "Java Servlet",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    id: 15,
    title: "SQL Server",
    image: "https://static.cdnlogo.com/logos/m/21/microsoft-sql-server.svg",
  },
  {
    id: 16,
    title: "MySQL",
    image: "https://static.cdnlogo.com/logos/m/10/mysql.svg",
  },
];

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techStackIds, featured }) => {
  const [isHovered, setIsHovered] = useState(false);
  const stackIcons = techStacks.filter((stack) => techStackIds.includes(stack.title));

  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden bg-night-lighter border border-silver/10 hover:border-ember/30 transition-all duration-300 ${
        featured ? "ring-2 ring-ember/20" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-ember to-ember-light text-white text-xs font-bold rounded-full">
          Featured
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-night via-night/80 to-transparent flex flex-col items-center justify-center gap-4 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link
              href={gitUrl}
              target="_blank"
              className="w-12 h-12 rounded-full bg-night-elevated/90 border border-silver/20 flex items-center justify-center hover:bg-ember hover:border-ember transition-all duration-200"
            >
              <CodeBracketIcon className="w-5 h-5 text-silver-light" />
            </Link>
            <Link
              href={previewUrl}
              target="_blank"
              className="w-12 h-12 rounded-full bg-night-elevated/90 border border-silver/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-200"
            >
              <EyeIcon className="w-5 h-5 text-silver-light" />
            </Link>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {stackIcons.map((stack) => (
              <div
                key={stack.id}
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-night/80 border border-silver/10"
              >
                <img
                  src={stack.image}
                  alt={stack.title}
                  className="w-4 h-4 object-contain"
                />
                <span className="text-xs text-silver">{stack.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-outfit font-bold text-lg text-silver-light mb-2 group-hover:text-ember-light transition-colors">
          {title}
        </h3>
        <p className="text-silver text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Tech Stack Pills - Always Visible */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {stackIcons.slice(0, 3).map((stack) => (
            <span
              key={stack.id}
              className="px-2 py-0.5 text-xs rounded-md bg-ember/10 text-ember border border-ember/20"
            >
              {stack.title}
            </span>
          ))}
          {stackIcons.length > 3 && (
            <span className="px-2 py-0.5 text-xs rounded-md bg-night-elevated text-silver">
              +{stackIcons.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
