import { Container, Alert } from 'react-bootstrap';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className="hero-section text-center d-flex flex-column justify-content-center align-items-center mt-5 p-5 bg-light">
            <Container>
                <h1 className="display-4">Welcome to MyApp!</h1>
                <p className="lead">Your all-in-one solution for seamless experience.</p>
                <Alert variant="success" className="w-50 mx-auto">You are successfully logged in.</Alert>
            </Container>
        </section>
    );
}

export default HeroSection;
