import React from "react";

function HeroCotainer() {
  return (
    <div className="hero-container">
      <header>
        <nav>
          <div className="brand">
            <h1>
              <span className="e">e</span>
              <span className="learning">Learning</span>
            </h1>
          </div>
          <div className="item-container">
            <ul className="inline-list">
              <li className="inline-item">for Students</li>
              <li className="inline-item">for Buisness</li>
            </ul>
            <ul className="inline-list">
              <li className="inline-item">Login</li>
              <li className="inline-item">Sigup</li>
              <li className="inline-item">Search</li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="img-container">
        <div className="intro">
          <h1 className="hero-heading">
            World-class <br />
            learning for
            <br /> anyone, anywhere
          </h1>
          <p>
            Build skills with courses, certificates, and degrees <br />
            online from world-class universities and companies.
          </p>
          <input type="text" className="search" placeholder="Search anything" />
        </div>

        <div className="hero-img">
          <img
            src="../../public/Assets/Student (23).png"
            height="200px"
            width="200px"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroCotainer;
