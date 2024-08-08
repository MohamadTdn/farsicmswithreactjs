import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavMenu from "./Components/NavMenu/NavMenu";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

function App() {
  let router = useRoutes(routes);

  return (
    <Container fluid className="App">
      <NavMenu />
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col lg={10}>{router}</Col>
      </Row>
    </Container>
  );
}

export default App;
