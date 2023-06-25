import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import Spinner from "../Spinner";

export default function News(props) {
  // console.log(props.category);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const baseURL = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=5d42f73ae7c94aca9b5dbabdfae7187b`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        console.log(response.data.articles);
        setData(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [props.category]);

  // Get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Pagination Slider */}
      {/* Scroll Slider */}
      <div className="container my-3" style={{ minHeight: "400px" }}>
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            {currentItems.map((value) => (
              <div className="col-md-4" key={value.url}>
                <NewsItem
                  title={value.title}
                  img={value.urlToImage}
                  description={value.description}
                />
              </div>
            ))}
          </div>
        )}
        {data.length > itemsPerPage && (
          <nav className="mt-3">
            <ul
              className="pagination pagination-lg d-flex justify-content-center"
              style={{ margin: "20px 0" }}
            >
              {Array(Math.ceil(data.length / itemsPerPage))
                .fill()
                .map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                      reset
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
