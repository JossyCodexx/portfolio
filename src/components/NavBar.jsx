import { Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useState } from "react";

const NavBar = ({ styles }) => {
  const [navOpen, setNavOpen] = useState(false);

  const navData = [
    { id: 1, name: "Home", to: "/" },
    { id: 3, name: "Portfolio", to: "/portfolio" },
    { id: 2, name: "resume", to: "/resume" },
    { id: 4, name: "about", to: "/about" },
    { id: 5, name: "contact", to: "/contact" },
  ];

  function handleClick() {
    setNavOpen(nav => !nav);
  }

  return (
    <nav style={styles}>
      {navOpen ? (
        <FaXmark onClick={handleClick} />
      ) : (
        <FaBarsStaggered onClick={handleClick} />
      )}
      <ul className={`${navOpen ? "navOpen" : "navClose"} `} id="webNav">
        {navData.map(({ id, to, name }) => {
          return (
            <Link key={id} to={to}>
              {name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
