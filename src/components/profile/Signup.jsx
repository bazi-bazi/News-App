import React from 'react';
import './profile.css';
import { Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Signup() {
  return (
    <div className="profile">
      <React.Fragment>
      <Card>
          <Card.Body>
          <h1  className="text-center mb-4">Sign Up</h1>
              <Form>
                  <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email"/>
                  </Form.Group>
                  <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" />
                  </Form.Group>
                  <Form.Group id="password-confirmation">
                      <Form.Label>Password Confirmation</Form.Label>
                      <Form.Control type="password"  required />
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
