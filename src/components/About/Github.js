import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I Code
      </h1>
      <GitHubCalendar
        username="brar-karamjit"
        blockSize={20}
        blockMargin={10}
        color="#2dba4e"
        fontSize={15}
      />
    </Row>
  );
}

export default Github;
