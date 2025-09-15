import { useEffect, useState } from 'react';
import './Navigation.css';
import Hamburger from '../hamburger/Hamburger.jsx';
import NavigationList from './NavigationList.jsx';

const Navigation = ({ refs }) => {
    const [changeBackground, setChangeBackground] = useState(false);

    useEffect(() => {
        const handleWindowScroll = () => {
            const scrolled = window.scrollY; // Value of how much we have scrolled

            if (scrolled > 550) {
                setChangeBackground(true);
            } else {
                setChangeBackground(false);
            }
        };

        window.addEventListener('scroll', handleWindowScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={changeBackground ? 'blue-nav' : undefined}>
            <h1 onClick={() => handleScroll(refs.homeRef)}>Tlhalefo Sebaeng</h1>
            <NavigationList onScroll={handleScroll} refs={refs} />
            <Hamburger />
        </nav>
    );
};

export default Navigation;
