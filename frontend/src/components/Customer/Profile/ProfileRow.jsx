import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { PropTypes } from "prop-types";

class ProfileRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      FieldName,
      valueField,
      typeField,
      nameField,
      requiredField,
      patternField,
    } = this.props;

    return (
      <>
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
              required={requiredField}
              pattern={patternField}
            />
          </Col>
        </Row>
        <br />
      </>
    );
  }
}

ProfileRow.propTypes = {
  nameField: PropTypes.string.isRequired,
  FieldName: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  patternField: PropTypes.string.isRequired,
  typeField: PropTypes.string.isRequired,
  requiredField: PropTypes.bool.isRequired,
};

export default ProfileRow;
