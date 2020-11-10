import React, { Component } from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';


 class AddComment extends Component {
  

  render() {

  return (
    <Form.Group>
        <Form.Control size="lg" type="text" placeholder="Type text" />
          <Button  className="post__form__btn mt-2" variant="outline-primary" type="submit" value="Submit">
              Add Comment
          </Button>
    </Form.Group>
  )
}
}




export default connect()(AddComment);