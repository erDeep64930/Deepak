import React, { useState } from "react";
import mypic from "../assets/mypic.png";
import { useTypewriter, cursor } from "react-simple-typewriter";
const Home = () => {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const [text] = useTypewriter({
    words: ["Web Developer", "UI Developer", "Frontend Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="container mt-6">
      <div className=" md:grid grid-cols-2 space-y-12">
        {/* this is for image section */}
        <div className=" text-center w-full h-3/5 mb-6">
          <img
            src={mypic}
            alt="mypic"
            className="w-full h-full rounded-full border-8 border-secondary shadow-lg shadow-amber-400"
          />
        </div>
        <div className=" text-center">
          <h1>Hello I'm </h1>
          <h5 className="text-4xl text-amber-400 font-bold font-alkatra">
            Deepak
          </h5>
          <h2>and I'm a</h2>
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
