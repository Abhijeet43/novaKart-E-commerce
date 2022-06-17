import React from "react";
import { scrollToTop } from "../../functions/";
import "./ProductPagination.css";

const ProductPagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="page-btns">
      {currentPage !== 1 ? (
        <span
          className="page-btn"
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
            scrollToTop();
          }}
        >
          <i className="fas fa-angle-left"></i>
        </span>
      ) : null}

      {pageNumbers.map((pageNumber) => (
        <span
          className={`page-btn ${
            currentPage === pageNumber ? "page-btn-active" : ""
          }`}
          onClick={() => {
            setCurrentPage(pageNumber);
            scrollToTop();
          }}
          key={pageNumber}
        >
          {pageNumber}
        </span>
      ))}

      {currentPage !== Math.ceil(totalProducts / productsPerPage) ? (
        <span
          className="page-btn"
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
            scrollToTop();
          }}
        >
          <i className="fas fa-angle-right"></i>
        </span>
      ) : null}
    </section>
  );
};

export { ProductPagination };
