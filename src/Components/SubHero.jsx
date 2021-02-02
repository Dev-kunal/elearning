import React from "react";

function SubHero() {
  return (
    <div className="sub-hero">
      <h5
        style={{ textAlign: "center", fontSize: "xx-large", marginBottom: 0 }}
      >
        {" "}
        Learn from more than{" "}
        <span style={{ color: "red" }}>160 member universities</span>
      </h5>
      <h5
        style={{
          textAlign: "center",
          fontSize: "x-large",
          margin: "7px",
          color: "grey",
        }}
      >
        Achieve your goals with elearning
      </h5>
      <h4
        style={{
          fontSize: "x-large",
          fontWeight: "bolder",
          color: "var(--Darkblue)",
          textAlign: "center",
        }}
      >
        Why elearning
      </h4>
      <div className="img-row">
        <img
          width="90%"
          height="180px"
          src="../../public/Assets/Group 930.png"
        ></img>
        <img
          width="90%"
          height="180px"
          src="../../public/Assets/Group 930.png"
        ></img>
        <img
          width="90%"
          height="180px"
          src="../../public/Assets/Group 930.png"
        ></img>
      </div>
    </div>
  );
}

export default SubHero;
