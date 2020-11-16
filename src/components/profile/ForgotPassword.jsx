import React, { Component } from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap";
import './profile.css';
import { Link } from "react-router-dom";
import { connect }  from "react-redux";
import { forgotPassword } from "../../redux/actions/authActions";

class ForgotPassword extends Component {
  state = {
    email: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.forgotPassword(this.state);
  };

  render() {
    const { resetError } = this.props;

  return (
    <div className="profile">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {resetError ? <Alert variant="success">{resetError}</Alert> : <Alert variant="danger">{resetError}</Alert>}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" id="email" onChange={this.handleChange} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    resetError: state.auth.resetError,
    logedIn: state.auth.logedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    forgotPassword: (credentials) => dispatch(forgotPassword(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
