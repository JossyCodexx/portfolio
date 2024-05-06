import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import cert1 from "../images/cert1.jpg";
import cert2 from "../images/cert2.jpg";
const Resume = () => {
  return (
    <main className="portfolio center">
      <NavBar />
      <SectionHeader lightText={"My"} boldText={"Resume"} />
      <div className="cert">
        <img src={cert1} alt="" />
        <img className="img2" src={cert2} alt="" />
      </div>
    </main>
  );
};

export default Resume;
