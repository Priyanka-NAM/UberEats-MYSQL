import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { PropTypes } from "prop-types";

class FormTextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { FieldName } = this.props;

    return (
      <Form>
        <Row>
          <Col xs={2}>
            <Form.Label>{FieldName}</Form.Label>
          </Col>
          <Col xs={6}>
            <Form.Control placeholder='' required />
          </Col>
        </Row>
      </Form>
    );
  }
}

FormTextBox.propTypes = {
  FieldName: PropTypes.string.isRequired,
};

export default FormTextBox;
