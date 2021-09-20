import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { FaPlus } from "react-icons/fa";
import { Button, Col, Table, Row } from "react-bootstrap";
import OwnerHome from "../../Home/OwnerHome";
import MenuNav from "./MenuNav";

class MenuUpdateCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const pageContent = (
      <Col style={{ padding: "0px" }} align='left'>
        <MenuNav />
        <Row style={{ marginLeft: "3%", marginTop: "3%" }}>
          <Row>
            <h1>Categories</h1>
          </Row>
          <Col
            align='right'
            style={{
              marginRight: "8%",
              fontSize: "16px",
              fontFamily: "sans-serif",
            }}>
            <Button style={{ width: "15%", height: "3.5rem" }} variant='dark'>
              <FaPlus style={{ marginRight: "10%" }} />
              New Category
            </Button>
          </Col>
          <br />
          <Row style={{ marginTop: "4%" }}>
            <Table
              style={{
                width: "80%",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Menus</th>
                  <th>Items</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{
                    height: "3.5rem",
                  }}>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr
                  style={{
                    height: "3.5rem",
                  }}>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr
                  style={{
                    height: "3.5rem",
                  }}>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Row>
      </Col>
    );
    return <OwnerHome pageContent={pageContent} />;
  }
}

export default MenuUpdateCategories;
