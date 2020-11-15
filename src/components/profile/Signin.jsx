import React, { Component } from 'react';
import './profile.css';
import { Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Redirect } from "react-router-dom";
import { signIn } from '../../redux/actions/authActions';
import { connect } from 'react-redux';


 class Signin extends Component {
  state = {
    email: "",
    password: "",
  };


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  

  render() {
    const { authError, logedIn, auth } = this.props;
    if (auth.uid) return <Redirect to="/" /> 
  return (
    <React.Fragment>
    <div className="profile">
      <React.Fragment>
          <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {authError ? <Alert variant="danger">{authError}</Alert> : null}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={this.handleChange} id="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={this.handleChange} type="password" id="password" required />
            </Form.Group>
            <Button  className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>    
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="signup">register</Link>
      </div>

      </React.Fragment>
    </div>
    </React.Fragment>
  )
}
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    logedIn: state.auth.logedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signin);
