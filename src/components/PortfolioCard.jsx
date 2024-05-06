import React from "react";
import web from "../images/3d logo.jpg";
import banner from "../images/banner.jpg";
import flier from "../images/flier.jpg";
import graphics1 from "../images/graphics1.jpg";
import video from "../video/Future-Ft-Drake-Tems-Wait-For-U-Video-(TrendyBeatz.com).mp4";

const PortfolioCard = () => {
  const portfolioData = [
    { id: 1, img: banner, name: "Designer Shoes", description: "footwears" },
    {
      id: 2,
      img: web,
      name: "Website Development",
      description: "webdev",
    },
    { id: 3, img: graphics1, name: "Artist artwok", description: "design" },
    { id: 4, img: flier, name: "flier design", description: "design" },
  ];
  return (
    <>
      <div className="portfolio-container">
        {portfolioData.map((card) => {
          return (
            <div key={card.id}>
              <img src={card.img} alt={card.name} />
              <p>{card.name}</p>
              <span>{card.description}</span>
            </div>
          );
        })}
      </div>
      <video src={video} controls></video>
    </>
  );
};

export default PortfolioCard;
