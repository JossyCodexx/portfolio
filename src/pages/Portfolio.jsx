import NavBar from "../components/NavBar";
import PortfolioCard from "../components/PortfolioCard";
import SectionHeader from "../components/SectionHeader";

const Portfolio = () => {
  return (
    <div className="portfolio center">
      <NavBar styles={{ marginBottom: "50px" }} />
      <SectionHeader
        lightText={"Featured"}
        boldText={"Portfolio"}
        className={"pad-header"}
      />
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
