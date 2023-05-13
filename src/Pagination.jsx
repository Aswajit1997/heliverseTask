/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Card from "./components/Card";

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // generate array of pages
  const pages = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="pagination_container">
        {currentItems.map((item, index) => (
          <Card
            key={item.id}
            id={item.id}
            first_name={item.first_name}
            last_name={item.last_name}
            email={item.email}
            domain={item.domain}
          />
        ))}
      </div>

      <div className="pagination_buttons">
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            style={{
              fontWeight: pageNumber === currentPage ? "bold" : "normal",
            }}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
