import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button} from "react-bootstrap";
import "./Myform.css";

const Myform = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>

      <Card className="mycard" style={{ width: "250px" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card className="mycard" style={{ width: "250px" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card className="mycard" style={{ width: "250px" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Button variant="outline-primary">Primary</Button>{' '}
  <Button variant="outline-secondary">Secondary</Button>{' '}
  <Button variant="outline-success">Success</Button>{' '}
  <Button variant="outline-warning">Warning</Button>{' '}
  <Button variant="outline-danger">Danger</Button>{' '}
  <Button variant="outline-info">Info</Button>{' '}
  <Button variant="outline-light">Light</Button>{' '}
  <Button variant="outline-dark">Dark</Button>
    </>
  );
};

export default Myform;
