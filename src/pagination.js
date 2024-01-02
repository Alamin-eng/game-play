
import "./pagination.css";
import React from "react";

const Pagination = ({ currentPage, totalPages, paginate }) => (
  <nav>
    <ul className="pagination">
      <li>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Prev
        </button>
      </li>

      {[...Array(totalPages).keys()].map((number) => (
        <li
          key={number + 1}
          className={currentPage === number + 1 ? "active" : ""}
        >
          <button
            onClick={() => paginate(number + 1)}
            className={currentPage === number + 1 ? "active-button" : ""}
          >
            {number + 1}
          </button>
        </li>
      ))}

      <li>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next &raquo;
        </button>
      </li>
    </ul>
  </nav>
);

export default Pagination;









