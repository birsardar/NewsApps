import React from "react";
import "./news.css";
export default function NewsItem(props) {
  return (
    <div className="container my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="img"
          src={
            props.img
              ? props.img
              : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design.jpg"
          }
          alt="something"
        />

        <div className="card-body">
          <h5 className="card-title text-light">
            {props.title.length >= 50
              ? props.title.slice(0, 40) + "..."
              : props.title}
          </h5>
          <p className="card-text text-light">
            {props.description && props.description.length >= 60
              ? props.description.slice(0, 60) + "..."
              : props.description}
          </p>
          <a
            href={props.url}
            className="btn btn-sm btn-primary center text-light"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
