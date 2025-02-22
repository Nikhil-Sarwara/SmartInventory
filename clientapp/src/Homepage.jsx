import NavbarComponent from './NavbarComponent';
import HeroSection from './HeroSection';
import Features from './Features';
import Contact from './Contact';
import Footer from './Footer';

function Homepage({ setJwtToken }) {
    return (
        <>
            <NavbarComponent setJwtToken={setJwtToken} />
            <HeroSection />
            <Features />
            <Contact />
            <Footer />
        </>
    );
}

export default Homepage;
