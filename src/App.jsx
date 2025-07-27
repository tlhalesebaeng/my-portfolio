import { useRef } from 'react';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import PersonalInfo from './components/personal-info/PersonalInfo.jsx';
import Projects from './components/projects/Projects.jsx';
import Skills from './components/skills/Skills.jsx';

const App = () => {
    const aboutRef = useRef();
    const projectsRef = useRef();
    const educationRef = useRef();
    const contactRef = useRef();
    const headerRef = useRef();

    const refs = {
        aboutRef,
        projectsRef,
        educationRef,
        contactRef,
        headerRef,
    };

    return (
        <main>
            <Navigation refs={refs} />
            <Header refs={refs} />
            <About ref={aboutRef} />
            <PersonalInfo />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
            <Skills ref={educationRef} />
            <Footer />
        </main>
    );
};

export default App;
