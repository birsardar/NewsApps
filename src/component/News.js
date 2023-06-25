import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
export default function News() {
  const [data, setData] = useState([]);
  const baseURL =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5d42f73ae7c94aca9b5dbabdfae7187b";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.articles);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <div className="container my-3">
        <div className="row">
          {data.map((value) => {
            return (
              <div className="col-md-4">
                <NewsItem
                  key={value.url}
                  title={value.title}
                  img={value.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
