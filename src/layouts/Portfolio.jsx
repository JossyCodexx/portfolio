import NavComponent from "../components/NavComponent";
import PortfolioCard from "../components/PortfolioCard";
import SectionHeader from "../components/SectionHeader";

const Portfolio = () => {
  const navData = [
    { name: "all", to: "" },
    { name: "aitechnology", to: "" },
    { name: "3D logo", to: "" },
    { name: "fliers", to: "" },
    { name: "webdev", to: "" },
  ];

  return (
    <div className="portfolio">
      <SectionHeader lightText={"Featured"} boldText={"Portfolio"} />
      <ul className="navLinks">
        {navData.map((element) => (
          <NavComponent key={element.name} name={element.name} />
        ))}
      </ul>
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
