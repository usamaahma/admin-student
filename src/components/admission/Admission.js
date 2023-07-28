import React from "react";
import "./admission.css";
import { Container } from "react-bootstrap";

const data = [
  {
    id: 1,
    country: "country",
    purpose: "purpose",
    field: "field",
    education: "education",
    marks: "marks",
    intake: "intake",
    test1: "test1",
    test1Number: "test1Number",
    test2: "test2",
    test2Number: "test2nmbr",
    workExperience: "workexperience",
  },
];

function Admission() {
  return (
    <div>
      <p className="txtam">Students Who have Applied for Admission</p>
      <Container>
        <div className="everycard">
          {data.map((student, index) => (
            <div key={index} className="student">
              <p className="entry">Entry Number: {index + 1}</p>
              <div className="allone">
                <p>
                  <span className="andrtxt">Country:</span> {student.country}
                </p>
                <p>
                  {" "}
                  <span className="andrtxt">Purpose: </span>
                  {student.purpose}
                </p>
                <p>
                  <span className="andrtxt">Field:</span> {student.field}
                </p>
                <p>
                  <span className="andrtxt">Education:</span>{" "}
                  {student.education}
                </p>
                <p>
                  <span className="andrtxt">Marks:</span> {student.marks}
                </p>
                <p>
                  <span className="andrtxt">Intake: </span>
                  {student.intake}
                </p>
                <p>
                  <span className="andrtxt">Test1:</span> {student.test1}
                </p>
                <p>
                  <span className="andrtxt">Test1 Number:</span>{" "}
                  {student.test1Number}
                </p>
                <p>
                  <span className="andrtxt">Test2:</span> {student.test2}
                </p>
                <p>
                  <span className="andrtxt">Test2 Number:</span>{" "}
                  {student.test2Number}
                </p>
                <p>
                  <span className="andrtxt">Work Experience:</span>{" "}
                  {student.workExperience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Admission;
