import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { PropTypes } from "prop-types";

class FormTextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    e.preventDefault();

    const { changeHandler } = this.props;
    changeHandler(e);
  };

  render() {
    const {
      FieldName,
      valueField,
      typeField,
      nameField,
      requiredField,
      patternField,
      maxLength,
    } = this.props;

    return (
      <Form>
        <Row>
          <Col xs={2}>
            <Form.Label>{FieldName}</Form.Label>
          </Col>
          <Col xs={6}>
            <Form.Control
              type={typeField}
              name={nameField}
              onChange={this.handleChange}
              value={valueField}
              maxLength={maxLength}
              required={requiredField}
              pattern={patternField}
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

FormTextBox.propTypes = {
  nameField: PropTypes.string.isRequired,
  FieldName: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  patternField: PropTypes.string.isRequired,
  typeField: PropTypes.string.isRequired,
  requiredField: PropTypes.bool.isRequired,
  changeHandler: PropTypes.func.isRequired,
  maxLength: PropTypes.string.isRequired,
};
export default FormTextBox;
