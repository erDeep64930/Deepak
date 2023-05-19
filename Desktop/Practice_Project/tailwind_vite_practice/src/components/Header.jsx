import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [nav, setNav] = useState(false);
  const [currentTabs, setCurrentTabs] = useState();

  const menuItems = [
    {
      id: 1,
      link: "home",
      path: "/",
    },
    {
      id: 2,
      link: "about",
      path: "/about",
    },
    {
      id: 3,
      link: "skills",
      path: "/skills",
    },
    {
      id: 4,
      link: "projects",
      path: "/projects",
    },
    {
      id: 5,
      link: "contact",
      path: "/contact",
    },
  ];

  const handleTabs = (e) => {
    setCurrentTabs(e.target.id);
  };
  return (
    <div className="container">
      <div>
        <h1>
          D<span className="text-amber-500">K</span>
        </h1>
      </div>

      {nav ? (
        <AiOutlineMenu
          onClick={() => setNav(!nav)}
          className="text-white text-2xl md:hidden block"
        />
      ) : (
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          className="text-white text-2xl md:hidden block"
        />
      )}

      <ul>
        {menuItems.map((menu, id) => {
          return (
            <li key={id}>
              <a href={`${menu.path}`}>
                {menu.link}
                <span></span>
                <span></span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* for mobile device */}
      <ul
        className={`md:hidden flex flex-col fixed items-center gap-6 top-[88px] w-full h-screen duration-300 ${
          nav ? "left-[0]" : "left-[-100%]"
        }`}
      >
        {menuItems.map((menu, id) => {
          return (
            <li key={id}>
              <a
                href={`${menu.path}`}
                key={id}
                id={menu.id}
                disabled={currentTabs === `${menu.id}`}
                onClick={handleTabs}
              >
                {menu.link}
                <span></span>
                <span></span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
