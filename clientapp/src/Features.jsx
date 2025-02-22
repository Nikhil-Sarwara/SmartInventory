import { Container, Row, Col, Card } from 'react-bootstrap';
import './Features.css';

function Features() {
    return (
        <section className="features-section py-5 bg-white">
            <Container>
                <h2 className="text-center mb-4">Our Features</h2>
                <Row>
                    <Col md={4}>
                        <Card className="text-center p-3 shadow">
                            <Card.Body>
                                <Card.Title>Feature 1</Card.Title>
                                <Card.Text>Some quick example on the feature title.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center p-3 shadow">
                            <Card.Body>
                                <Card.Title>Feature 2</Card.Title>
                                <Card.Text>Another example text for our feature.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center p-3 shadow">
                            <Card.Body>
                                <Card.Title>Feature 3</Card.Title>
                                <Card.Text>Yet another amazing feature description.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Features;
