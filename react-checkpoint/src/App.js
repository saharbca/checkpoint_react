import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap'
import {Row,Col,Container} from 'react-bootstrap'
function App() {
  return (
<div>
 <Container fluid>
  <Row>
    <center>
    <Col>
      <form className="form">
      <h2>CONTACT US</h2>
      <p type="Name:"><input placeholder="Write your name here.."></input></p>
      <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
      <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
      <Button variant="primary">Submit</Button>{' '}
      </form>
    </Col>
    </center>
  </Row>
</Container>
</div>
  );
}

export default App;
