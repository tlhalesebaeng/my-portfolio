import { useRef } from 'react';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import PersonalInfo from './components/personal-info/PersonalInfo.jsx';
import Projects from './components/projects/Projects.jsx';
import Education from './components/education/Education.jsx';
import Experience from './components/experience/Experience.jsx';

const App = () => {
    const aboutRef = useRef();
    const projectsRef = useRef();
    const educationRef = useRef();
    const experienceRef = useRef();
    const contactRef = useRef();
    const homeRef = useRef();

    const refs = {
        aboutRef,
        projectsRef,
        educationRef,
        contactRef,
        homeRef,
        experienceRef,
    };

    return (
        <main>
            <Navigation refs={refs} />
            <Header refs={refs} />
            <About ref={aboutRef} />
            <PersonalInfo />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
            <Education ref={educationRef} />
            <Experience ref={experienceRef} />
            <Footer refs={refs} />
        </main>
    );
};

export default App;
