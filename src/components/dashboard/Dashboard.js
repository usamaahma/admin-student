import React from "react";
import "./dashboard.css";
import { Card, Row } from "antd";

function Dashboard() {
  return (
    <div>
      <Row justify={"center"} style={{ marginTop: "5rem" }}>
        <div className="gap">
          <Card
            className="card"
            title="Students Applied for Admission"
            bordered={false}
            style={{
              width: 400,
            }}
          >
            <p className="txtcard">Go to Admission Page</p>
          </Card>
          <Card
            className="card"
            title="Students Applied for Accomodation"
            bordered={false}
            style={{
              width: 400,
            }}
          >
            <p className="txtcard">Go to Accomodation Page</p>
          </Card>
        </div>
      </Row>
    </div>
  );
}

export default Dashboard;
