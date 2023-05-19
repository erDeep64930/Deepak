import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const socialMenu = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/deepkr54/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Deep64930",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:",
    },
    {
      id: 4,
      child: (
        <div>
          CV <BsFillPersonLinesFill size={25} />
        </div>
      ),
      href: "/cv.pdf",
    },
  ];
  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
      <ul className="flex flex-col">
        {socialMenu.map(({ id, child, href, style, download }) => {
          return (
            <li
              key={id}
              className={
                "md:flex justify-between items-center p-2 space-x-2 w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200  border-[1px] border-cyan-600" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex space-x-4 justify-center items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
