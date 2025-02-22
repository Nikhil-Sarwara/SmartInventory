import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css';


function Contact() {
    return (
        <section className="contact-section py-5 bg-light">
            <Container>
                <h2 className="text-center mb-4">Contact Us</h2>
                <Form className="w-50 mx-auto">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Your message" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        </section>
    );
}

export default Contact;
