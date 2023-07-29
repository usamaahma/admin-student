import React, { useEffect, useState } from "react";
import "./accomodation.css";
import { Container } from "react-bootstrap";
import { accommodation } from "../../helper/axios";
import { message } from "antd";
// const data = [
//   {
//     id: 1,
//     country: "country",
//     purpose: "purpose",
//     field: "field",
//     education: "education",
//     marks: "marks",
//     intake: "intake",

//   },
// ];

function Accomodation() {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const getAccommodation = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");
    // const queryParams = {
    //   page: currentPage,
    //   limit: perPage,
    //   status: true,
    // };
    accommodation({
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
    getAccommodation();
  }, []);
  return (
    <div>
      <p className="txtam">Students Who have Applied for Accommodation</p>
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
                  <span className="andrtxt">City:</span> {student.city}
                </p>
                <p>
                  <span className="andrtxt">Intake:</span> {student.prefrence}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Accomodation;
