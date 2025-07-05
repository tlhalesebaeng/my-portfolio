import About from './components/about/About.jsx';
import Header from './components/header/Header.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import PersonalInfo from './components/personal-info/PersonalInfo.jsx';

const App = () => {
    return (
        <main>
            <Navigation />
            <Header />
            <About />
            <PersonalInfo />
        </main>
    );
};

export default App;
