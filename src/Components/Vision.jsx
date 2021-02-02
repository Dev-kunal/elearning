import React from "react";
import ExploreButton from "./ExploreButton";

function Vision() {
  return (
    <>
      <div className="vision">
        <div className="vision-content">
          <h3 style={{ fontWeight: "Bolder", color: "var(--Darkblue)" }}>
            Our Vision
          </h3>
          <p>
            87% of people learning for professional development report career
            benefits like getting a promotion, a raise, or starting a new caree
          </p>
        </div>
        <div className="vision-image"></div>
      </div>
      <div className="get-started">
        <h2>Transform your life through education</h2>
        <button className="get-btn">Get Started</button>
      </div>
    </>
  );
}

export default Vision;
