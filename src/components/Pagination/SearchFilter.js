import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const SearchFilter = () => {
  return (
    <InputGroup
      className="mb-3"
      style={{
        width: "100%",
        maxWidth: "900px",
        marginBottom: "20px",
      }}
    >
      <Form.Control placeholder="Search" />
    </InputGroup>
  );
};

export default SearchFilter;
