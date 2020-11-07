import React, { Component } from 'react';
import './profile.css';
import { Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions/authActions';

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        name: "",
    }
    

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.signUp(this.state);
    };



  render() {

  return (
    <div className="profile">
      <React.Fragment>
      <Card>
          <Card.Body>
          <h1  className="text-center mb-4">Sign Up</h1>
               <Form onSubmit={this.handleSubmit}>
                  <Form.Group id="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" id="name" onChange={this.handleChange} required />
                  </Form.Group>
                  <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" id="email" onChange={this.handleChange} required />
                  </Form.Group>
                  <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" id="password" onChange={this.handleChange} required />
                  </Form.Group>
                  <Button className="w-100" type="submit">Sign Up</Button>
              </Form>
             
          </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Already have an account?
          </div>

      </React.Fragment>
   
    </div>
  )
}
}

const mapStateToProps =(state)=> {
    return {
      auth: state.firebase.auth
    }
  }
  
  const mapDispatchToProps =(dispatch)=> {
   return {
     signUp: (newUser) => dispatch(signUp(newUser))
   }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);