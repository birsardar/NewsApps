import React from "react";

export default function NewsItem(props) {
  return (
    <div className="container my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} alt="something" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.url} className="btn btn-dark btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
