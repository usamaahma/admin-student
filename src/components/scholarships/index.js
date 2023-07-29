import React, { useEffect, useState } from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { course } from "../../helper/axios";
import { message } from "antd";
// const data = [
//   {
//     id: 1,
//     country: "country",
//     purpose: "purpose",
//     field: "field",
//     intake: "intake",
//   },
// ];

function Scholarships() {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const getCourse = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");
    // const queryParams = {
    //   page: currentPage,
    //   limit: perPage,
    //   status: true,
    // };
    course({
      method: "get",
      headers: {
        // Authorization: `Bearer ${token}`,
      },
      // params: queryParams,
    })
      .then((res) => {
        console.log(res.data, "pro");
        setdata(res.data);
        setloading(false);
      })
      .catch(() => {
        message.error("an error occured please try later");
        setloading(false);
      });
  };
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div>
      <p className="txtam">Students Who have Applied for Admission</p>
      <Container>
        <div className="everycard">
          {data.results?.map((student, index) => (
            <div key={index} className="student">
              <p className="entry">Entry Number: {index + 1}</p>
              <div className="allone">
                <p>
                  <span className="andrtxt">Country:</span> {student.country}
                </p>
                <p>
                  <span className="andrtxt">Purpose: </span>
                  {student.purpose}
                </p>
                <p>
                  <span className="andrtxt">Field:</span> {student.field}
                </p>
                <p>
                  <span className="andrtxt">Intake: </span>
                  {student.intake}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Scholarships;
