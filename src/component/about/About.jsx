import "./about.css";
import React from "react";
import { Link } from "react-router-dom";

export default function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>About NewsApp</h1>
        <p>
          This website fetch News From NewsApi and All the news are presented to
          you..
        </p>
        {/* <Link to="/contact">
          <button className="btn">Contact</button>
        </Link> */}
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
              alt="true"
            />
          </div>
          <div className="img-stack bottom">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
              alt="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
