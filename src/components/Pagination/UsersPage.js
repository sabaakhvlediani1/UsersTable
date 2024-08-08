import React, { useState } from "react";
import {
  Container,
  InputGroup,
  Form,
  DropdownButton,
  Col,
  Row,
  Dropdown,
} from "react-bootstrap";

import PaginationComponent from "./PaginationComponent";
import useFetchUserData from "../../api/Api";
import TableComponent from "./TableComponent";

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [input, setInput] = useState("");
  const { users, total } = useFetchUserData(currentPage);
  const [gender, setGender] = useState("All");

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(total / 30);

  // ორმაგი ფილტრი. პირველი ფილტრავს სერჩ ინფუთს, მეორე ფილტრი თუ gender სტეიტი არ არის "All" გაფილტრავს დროპდაუნიდან შერჩეული ჯენდერის მიხედვით.
  // ფილტრებს შეუძლიათ მუშაობა ერთმენეთთან პარალელურად.
  const filteredUsers = users
    .filter(
      (user) =>
        user.firstName.toLowerCase().includes(input.toLowerCase()) ||
        user.lastName.toLowerCase().includes(input.toLowerCase()) ||
        user.username.toLowerCase().includes(input.toLowerCase()) ||
        user.email.toLowerCase().includes(input.toLowerCase()) ||
        user.phone.toLowerCase().includes(input.toLowerCase())
    )
    .filter((user) => gender === "All" || user.gender.toLowerCase() === gender.toLowerCase());

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "100px",
        }}
      >
        <Row
          className="mb-3"
          style={{
            width: "100%",
            maxWidth: "900px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Col>
            <InputGroup>
              <Form.Control
                placeholder="Search"
                onChange={(e) => setInput(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col>
            <DropdownButton
              id="dropdown-basic-button"
              title={gender}
              onSelect={(e) => setGender(e)}
            >
              <Dropdown.Item eventKey="All">All</Dropdown.Item>
              <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
              <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </div>
      <Container
        className="d-flex flex-column align-items-center justify-content-between"
        style={{
          width: "100%",
          maxWidth: "900px",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginTop: "20px",
          marginBottom: "100px",
          border: "2px solid #f4f4f4",
          borderRadius: "10px",
          minHeight: "500px",
        }}
      >
        <TableComponent filteredUsers={filteredUsers} />
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          handleClick={handleClick}
        />
      </Container>
    </>
  );
};

export default UsersPage;
