import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
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
    title: `SQL Server`,
    image: `https://static.cdnlogo.com/logos/m/21/microsoft-sql-server.svg`
  },
  {
    id: 16,
    title: `MySQL`,
    image: `https://static.cdnlogo.com/logos/m/10/mysql.svg`
  },
];

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techStackIds }) => {
  const stackIcons = techStacks.filter(stack => techStackIds.includes(stack.title));

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {/* Overlay */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 flex-col space-y-4 px-4">
          {/* Icon Links */}
          <div className="flex space-x-4">
            <Link href={gitUrl} className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white relative group/link">
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
            </Link>
            <Link href={previewUrl} className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white relative group/link">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
            </Link>
          </div>
          {/* Tech stack */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {stackIcons.map(stack => (
              <div key={stack.id} className="flex flex-col items-center text-white text-xs">
                <img src={stack.image} alt={stack.title} className="h-10 w-10 object-contain" />
                <span>{stack.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
