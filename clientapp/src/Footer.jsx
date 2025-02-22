import { Container } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <footer className="text-center py-3 bg-dark text-light">
            <Container>
                <p>© {new Date().getFullYear()} MyApp. All Rights Reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;
