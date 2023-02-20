import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const TableComponent = () => {
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);
  const data = JSON.parse(localStorage.getItem("user-details"));

  useEffect(() => {
    setUser(data);
    axios
      .get(`http://localhost:8000/student/profile/${data.email}`, info)
      .then((res) => {
        setInfo(res.data.studentData[0]);
        console.log(res.data.studentData[0]);
      });
  }, []);
  console.log(user);
  console.log("messages are :- ", info?.academics);

  return (
    <>
      {info?.academics && (
        <Table data-aos="zoom-in">
          <Thead>
            <Tr>
              <Th>Serial Number</Th>
              <Th>Activity Type</Th>
              <Th>Activity Name</Th>
              <Th>Activity Description</Th>
              <Th>Certificate</Th>
            </Tr>
          </Thead>
          {info?.academics.map((data) => {
            return (
              <Tbody>
                <Tr>
                  <Td>{data._id}</Td>
                  <Td>{data.activity}</Td>
                  <Td>{data.activityName}</Td>
                  <Td>{data.description}</Td>
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
