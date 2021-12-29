import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@example.com" />
                  <Form.Text className="text-muted">
                    We'll never share your e-mail address, trust us!
            </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">Login</Button>
          </Form>

          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="https://cdn.akamai.steamstatic.com/steam/apps/353380/capsule_616x353.jpg?t=1617990330" />
            <Card.Body>
              <Card.Title>Card example</Card.Title>
              <Card.Text>This is  an example of react bootstrap cards</Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
          </Card>

          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test3</Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant="success">This is a button</Alert>

          <Button>Test button</Button>

        </Container>

      </header>
      <p>This is a paragraph.</p>
    </div>
  );
}

export default App;
