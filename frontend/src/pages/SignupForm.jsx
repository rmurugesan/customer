import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'manager', // Default based on your schema
    branch: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-up Data:', formData);
    
    // ⚠️ TODO: Send formData to your Node/Express backend API endpoint here
    // Example: axios.post('/api/signup', formData);
    
    alert('Sign-up form submitted. Check console for data.');
  };

  return (
    // Centering the form card using Bootstrap Flexbox utilities
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h3 className="card-title text-center mb-4">Create Account</h3>
              <Form onSubmit={handleSubmit}>
                
                {/* Name Field */}
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength="150"
                  />
                </Form.Group>

                {/* Email Field */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength="150"
                  />
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="8" // Recommended minimum length
                  />
                </Form.Group>

                {/* Role Field (Matching ENUM('admin','manager')) */}
                <Form.Group className="mb-3" controlId="formRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                  </Form.Select>
                </Form.Group>

                {/* Branch Field */}
                <Form.Group className="mb-3" controlId="formBranch">
                  <Form.Label>Branch</Form.Label>
                  <Form.Control
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    maxLength="100"
                  />
                </Form.Group>

                {/* Submit Button */}
                <div className="d-grid mt-4">
                  <Button variant="success" type="submit">
                    Sign Up
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupForm;