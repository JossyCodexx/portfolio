import React from "react";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import ignatius from "../images/IMG_7789.JPG";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const About = () => {
  return (
    <section className="portfolio about-section">
      <NavBar />
      <div className="about-container">
        <div className="about-img">
          <img src={ignatius} alt="Ignatius" />
        </div>
        <div className="about-info pad-header">
          <SectionHeader lightText={"About"} boldText={"Me"} />
          <article>
            <p>
              my name is melody ignatius ibu, my Company name is
              Infroteclimited, am a Web devloper, Graphic designer, App design,
              Coding, Landscape and Architecture design....
            </p>
            <p>
              A gentle rivulet known as Silvamur murmurs beside their abode,
              providing it with the vital elements of serenity. This
              paradisiacal land is where crisped segments of sentences
              delicately find their path to your lips.
            </p>
            <Button link={"https://wa.me/08034141117"} color={"#BAC964"}>
              {"Chat me on WhatsApp"}
            </Button>
            <Button color={"#ccc"}>
              <Link to="/contact" element={<Contact />}>
                {"Send me a gmail"}
              </Link>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
