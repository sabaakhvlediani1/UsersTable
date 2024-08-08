import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ totalPages, currentPage, handleClick }) => {
  return (
    <Pagination>
      {Array.from({ length: totalPages }, (_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
