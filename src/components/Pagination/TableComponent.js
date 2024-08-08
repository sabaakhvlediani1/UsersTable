import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = ({ filteredUsers }) => {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
