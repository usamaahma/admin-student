import React from "react";
import "./dashboard.css";
import { Card, Row } from "antd";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Row justify={"center"} style={{ marginTop: "5rem" }}>
        <div className="gap">
          <Link to="/admission" style={{ textDecoration: "none" }}>
            <Card
              className="card"
              bordered={false}
              style={{
                width: 400,
              }}
            >
              <p className="txtcard">Students Applied for Admission</p>
              <p className="txtcard">Go to Admission Page</p>
            </Card>
          </Link>
          <Link to="/accomodation" style={{ textDecoration: "none" }}>
            <Card
              className="card"
              bordered={false}
              style={{
                width: 400,
              }}
            >
              <p className="txtcard">Students Applied for Accomodation</p>
              <p className="txtcard">Go to Accomodation Page</p>
            </Card>
          </Link>
          <Link to="/scholarships" style={{ textDecoration: "none" }}>
            <Card
              className="card"
              bordered={false}
              style={{
                width: 400,
              }}
            >
              <p className="txtcard">Students Applied for scholarships</p>
              <p className="txtcard">Go to Scholarships Page</p>
            </Card>
          </Link>
        </div>
      </Row>
    </div>
  );
}

export default Dashboard;
