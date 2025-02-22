// import { useState, useEffect } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Card, Button, Badge, Spinner, Alert, Form } from 'react-bootstrap';

// function App() {
//     const [count, setCount] = useState(0);
//     const [apiMessage, setApiMessage] = useState('');
//     const [secureData, setSecureData] = useState(null);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [loading, setLoading] = useState(true);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken') || ''); // Store JWT token in state

//     // Fetch data from /api/test/secure-data with Authorization header
//     useEffect(() => {
//         if (jwtToken) {
//             fetch('https://localhost:7266/api/test/secure-data', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${jwtToken}`,
//                 },
//             })
//                 .then((response) => {
//                     if (response.status === 401) {
//                         throw new Error('Unauthorized access - 401');
//                     }
//                     return response.json();
//                 })
//                 .then((data) => {
//                     setSecureData(data);
//                     setLoading(false);
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching data:', error);
//                     setErrorMessage(error.message);
//                     setLoading(false);
//                 });
//         }
//     }, [jwtToken]);

//     // Handle login form submission
//     const handleLogin = (e) => {
//         e.preventDefault();

//         const credentials = { email, password };

//         // Make the API request to login and get JWT token
//         fetch('https://localhost:7266/api/auth/login', { // Replace with your actual login API endpoint
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(credentials),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Invalid credentials');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 // Store the JWT token in localStorage
//                 localStorage.setItem('jwtToken', data.token);
//                 setJwtToken(data.token);
//                 setErrorMessage('');
//             })
//             .catch((error) => {
//                 console.error('Error logging in:', error);
//                 setErrorMessage(error.message);
//             });
//     };

//     return (
//         <Container className="mt-4">
//             {/* Header Section */}
//             <Row className="mb-4">
//                 <Col className="d-flex justify-content-between align-items-center">
//                     <h1>Secure Data Dashboard</h1>
//                     <Button variant="primary" onClick={() => setCount(count + 1)}>
//                         Refresh Count (Current: {count})
//                     </Button>
//                 </Col>
//             </Row>

//             {/* Login Form Section */}
//             {!jwtToken ? (
//                 <Row className="mb-4">
//                     <Col sm={12}>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Login</Card.Title>
//                                 <Form onSubmit={handleLogin}>
//                                     <Form.Group className="mb-3" controlId="formEmail">
//                                         <Form.Label>Email</Form.Label>
//                                         <Form.Control
//                                             type="email"
//                                             placeholder="Enter email"
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                         />
//                                     </Form.Group>

//                                     <Form.Group className="mb-3" controlId="formPassword">
//                                         <Form.Label>Password</Form.Label>
//                                         <Form.Control
//                                             type="password"
//                                             placeholder="Enter password"
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)}
//                                         />
//                                     </Form.Group>

//                                     <Button variant="primary" type="submit">
//                                         Login
//                                     </Button>
//                                 </Form>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             ) : (
//                 <Row className="mb-4">
//                     <Col sm={12}>
//                         <Alert variant="success">You are logged in!</Alert>
//                     </Col>
//                 </Row>
//             )}

//             {/* API Status Section */}
//             {loading && <Spinner animation="border" variant="primary" />}
//             {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
//             {apiMessage && <Alert variant="success">{apiMessage}</Alert>}

//             {/* Secure Data Section */}
//             <Row>
//                 {secureData ? (
//                     <Col sm={12}>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Secure Data</Card.Title>
//                                 <Card.Text>{JSON.stringify(secureData)}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ) : (
//                     <p>No secure data available.</p>
//                 )}
//             </Row>
//         </Container>
//     );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
// import Login from './Login';
// import Signup from './Signup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// function App() {
//     const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken') || '');
//     const [secureData, setSecureData] = useState(null);
//     const [errorMessage, setErrorMessage] = useState('');

//     useEffect(() => {
//         if (jwtToken) {
//             fetch('https://localhost:7266/api/test/secure-data', {
//                 headers: { 'Authorization': `Bearer ${jwtToken}` },
//             })
//                 .then(res => res.ok ? res.json() : Promise.reject('Unauthorized'))
//                 .then(setSecureData)
//                 .catch(setErrorMessage);
//         }
//     }, [jwtToken]);

//     return (
//         <Container className="mt-4">
//             <Row>
//                 <Col>
//                     <h1>Secure Data Dashboard</h1>
//                 </Col>
//             </Row>

//             {!jwtToken ? (
//                 <Row>
//                     <Col md={6}><Login setJwtToken={setJwtToken} /></Col>
//                     <Col md={6}><Signup /></Col>
//                 </Row>
//             ) : (
//                 <Row>
//                     <Col>
//                         <Alert variant="success">You are logged in!</Alert>
//                         <Button variant="danger" onClick={() => { localStorage.removeItem('jwtToken'); setJwtToken(''); }}>Logout</Button>
//                     </Col>
//                 </Row>
//             )}

//             {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
//             {secureData && <Alert variant="info">{JSON.stringify(secureData)}</Alert>}
//         </Container>
//     );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import { Container, Row, Col, Button, Alert, Card } from 'react-bootstrap';
// import Login from './Login';
// import Signup from './Signup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// function App() {
//     const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken') || '');
//     const [secureData, setSecureData] = useState(null);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [isLogin, setIsLogin] = useState(true);

//     useEffect(() => {
//         if (jwtToken) {
//             fetch('https://localhost:7266/api/test/secure-data', {
//                 headers: { 'Authorization': `Bearer ${jwtToken}` },
//             })
//                 .then(res => res.ok ? res.json() : Promise.reject('Unauthorized'))
//                 .then(setSecureData)
//                 .catch(setErrorMessage);
//         }
//     }, [jwtToken]);

//     return (
//         <Container className="auth-container">
//             {/* <Row>
//                 <Col className="d-flex flex-column align-items-center">
//                     <h1 className="mb-4">Secure Data Dashboard</h1>
//                 </Col>
//             </Row> */}

//             {!jwtToken ? (
//                 <Row className="justify-content-center">
//                     <Col md={6} className="auth-box">
//                         <Card className="p-4 auth-card">
//                             <div className={`form-slider ${isLogin ? 'login-active' : 'signup-active'}`}>
//                                 {isLogin ? <Login setJwtToken={setJwtToken} /> : <Signup />}
//                             </div>
//                             <Button variant="link" className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
//                                 {isLogin ? 'Need an account? Signup' : 'Already have an account? Login'}
//                             </Button>
//                         </Card>
//                     </Col>
//                 </Row>
//             ) : (
//                 <Row>
//                     <Col className="text-center">
//                         <Alert variant="success">You are logged in!</Alert>
//                         <Button variant="danger" onClick={() => { localStorage.removeItem('jwtToken'); setJwtToken(''); }}>Logout</Button>
//                     </Col>
//                 </Row>
//             )}

//             {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
//             {secureData && <Alert variant="info" className="mt-3">{JSON.stringify(secureData)}</Alert>}
//         </Container>
//     );
// }

// export default App;

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Row, Col, Button, Alert, Card } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';
import Homepage from './Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken') || '');

    return (
        <Router>
            <Routes>
                <Route path="/" element={jwtToken ? <Navigate to="/home" /> : <AuthPage setJwtToken={setJwtToken} />} />
                <Route path="/home" element={jwtToken ? <Homepage setJwtToken={setJwtToken} /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

// AuthPage component to handle login/signup UI
function AuthPage({ setJwtToken }) {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Container className="auth-container">
            <Row className="justify-content-center">
                <Col md={6} className="auth-box">
                    <Card className="p-4 auth-card">
                        <div className={`form-slider ${isLogin ? 'login-active' : 'signup-active'}`}>
                            {isLogin ? <Login setJwtToken={setJwtToken} /> : <Signup />}
                        </div>
                        <Button variant="link" className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? 'Need an account? Signup' : 'Already have an account? Login'}
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;

