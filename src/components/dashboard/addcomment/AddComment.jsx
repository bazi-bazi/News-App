  
import React, { Component } from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import { createComments } from '../../../redux/actions/commentActions';


 class AddComment extends Component {
  state = {
    content: "",
  };


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createComments(this.state);
  };

  render() {

  return (
    <Form.Group>
      <Form onSubmit={this.handleSubmit}>
        <Form.Control onChange={this.handleChange} size="lg" type="text" id="content" placeholder="Type text" />
          <Button  variant="outline-primary" type="submit" value="Submit" block>
              Add Comment
          </Button>
      </Form>
    </Form.Group>
  )
}
}

const mapStateToProps =(state)=> {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComments: (comment) => dispatch(createComments(comment)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddComment);