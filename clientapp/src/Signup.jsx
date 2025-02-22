// Signup.jsx
import { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';

function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:7266/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, email, password }),
            });
            if (!response.ok) throw new Error('Signup failed');
            setMessage('Signup successful! You can now log in.');
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Signup</Card.Title>
                {message && <Alert variant={message.includes('successful') ? "success" : "danger"}>{message}</Alert>}
                <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="signupFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>
                    <Button variant="success" type="submit">Signup</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Signup;