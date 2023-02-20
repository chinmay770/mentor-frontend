import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Layout/styles/Table.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const TableComponent = () => {
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);
  const data = JSON.parse(localStorage.getItem("user-details"));

  useEffect(() => {
    setUser(data);
    axios
      .get(`http://localhost:8000/mentor/profile/${data.email}`, info)
      .then((res) => {
        setInfo(res.data.mentorData[0]);
        console.log(res.data.mentorData[0]);
      });
  }, []);
  console.log(user);
  console.log("messages are :- ", info?.students);

  return (
    <>
      {info?.students && (
        <Table data-aos="zoom-in">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Roll Number</Th>
              <Th>Department</Th>
              <Th>Batch</Th>
              <Th>View</Th>
            </Tr>
          </Thead>
          {info?.students.map((data) => {
            return (
              <Tbody>
                <Tr>
                  <Td>{data.name}</Td>
                  <Td>{data.rollno}</Td>
                  <Td>{data.dept}</Td>
                  <Td>{data.batch}</Td>
                  <Td>
                    <a href="#">View</a>
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      )}
    </>
  );
};

export default TableComponent;
