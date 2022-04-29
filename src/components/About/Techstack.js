import React from "react";
import { Col, Row } from "react-bootstrap";


function Techstack(props) {
  return (
    <>
    <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
       <Col className="skill-name" xs={4}>
        {props.name}
      </Col>
      <Col xs={6}>
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
