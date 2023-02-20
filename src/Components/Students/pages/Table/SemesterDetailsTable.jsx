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
  console.log("Semester Details are :- ", info?.semesterDetails);

  return (
    <>
      {info?.semesterDetails && (
        <Table data-aos="zoom-in">
          <Thead>
            <Tr>
              <Th>Serial Number</Th>
              <Th>Semester</Th>
              <Th>CGPA</Th>
              <Th>Percentage</Th>
              <Th>Year of Semester Completion</Th>
              <Th>No. of KTs</Th>
              <Th>No. of Attempts</Th>
              <Th>Marksheet</Th>
            </Tr>
          </Thead>
          {info?.semesterDetails.map((data) => {
            return (
              <>
                <Tbody>
                  <Tr>
                    <Td>{data._id}</Td>
                    <Td>{data.semester}</Td>
                    <Td>{data.cgpa}</Td>
                    <Td>{data.cgpa * 9.5} %</Td>
                    <Td>{data.clearedSemYear}</Td>
                    <Td>{data.kt}</Td>
                    <Td>{data.attemptsForSem}</Td>
                    <Td>
                      <a href="#">View</a>
                    </Td>
                  </Tr>
                </Tbody>
              </>
            );
          })}
        </Table>
      )}
    </>
  );
};

export default TableComponent;
