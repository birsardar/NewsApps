import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export default function News() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5d42f73ae7c94aca9b5dbabdfae7187b";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.articles);
      setLoading(false);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <div className="container my-3">
        {loading ? ( // Check loading state
          <Spinner /> // Display the Spinner component while loading
        ) : (
          <div className="row">
            {data.map((value) => {
              return (
                <div className="col-md-4" key={value.url}>
                  <NewsItem title={value.title} img={value.urlToImage} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
