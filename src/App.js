import React, { Component } from 'react';
import './App.css';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';

class App extends Component {
  render() {
    return (
      <Form className="login-form">
        <h2 className="font-weight-bold text-center">Login to website</h2>
        <h3 className="text-center">Welcome</h3>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="email"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="Password" placeholder="Password"/>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">
          Log in
        </Button>
        <div className="text-center pt-3">
          Or continue with your social account
        </div>
        <FacebookLoginButton className="mt-3 mb-3"></FacebookLoginButton>
        <div className="text-center">
          <a href="/sign-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </Form>
    );
  }}

export default App;
