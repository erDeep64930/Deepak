import React from "react";
import picGit from "../assets/github.png";
import css from "../assets/css.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";

const Skills = () => {
  const techStack = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: picGit,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 8,
      src: node,
      title: "Node.js",
      style: "shadow-white",
    },
  ];
  return (
    <div className="container">
      <div className="">
        {/* this is for heading */}
        <div className=" p-8 space-y-4  ">
          <h4>
            <span className="text-secondary">Professional</span>
            <span className="text-amber-400"> Skills :-</span>
          </h4>
        </div>
        {/* this is for techstach */}

        <div className="w-full justify-center flex flex-wrap items-center space-y-12  gap-6 text-center py-8 px-12">
          {techStack.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md mx-auto w-full hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-full sm:w-20 mx-auto" />
                <h5 className="mt-4">{title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
