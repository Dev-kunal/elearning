import React from "react";
import ExploreButton from "./ExploreButton";

function Card() {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-img">
          <img
            src="../../public/Assets/Rectangle 236.png"
            alt="rec"
            height="320px"
            width="250px"
          />
        </div>
        <div className="card-content">
          <h3>Learn from leading universities and companies</h3>
          <p>
            Start streaming on-demand video lectures today from top instructors
            in subjects like business, computer science, data science, language
            learning, & more.
          </p>
          <ExploreButton />
        </div>
      </div>
    </div>
  );
}

export default Card;
