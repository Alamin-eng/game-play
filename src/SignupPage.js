import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./signupPage.css";


function SignupPage() {
  return (
    <div>
      <Form className="signup-page ">
        
        <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-4"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-4"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Re-type Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Re-type Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" className="bg-info border-info">
              Sign up
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SignupPage;
