import { useEffect, useState } from 'react';
import Hamburger from '../hamburger/Hamburger.jsx';
import NavigationList from './NavigationList.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import crossImg from '../../assets/cross.png';
import './Navigation.css';

const Navigation = ({ refs }) => {
    const [changeBackground, setChangeBackground] = useState(false);
    const [sidebarIsOpened, setSidebarIsOpened] = useState(false);

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

    const handleOpenSidebar = () => {
        if (!changeBackground) setChangeBackground(true);
        setSidebarIsOpened(true);

        // Disable scrolling
        const bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.style.overflow = 'hidden';
    };

    const handleCloseSidebar = () => {
        setSidebarIsOpened(false);

        if (window.scrollY > 550) {
            setChangeBackground(true);
        } else {
            setChangeBackground(false);
        }

        // Enable scrolling
        const bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.removeAttribute('style');
    };

    const handleSidebarLinkClick = (ref) => {
        handleCloseSidebar();
        handleScroll(ref);
    };

    const handleNameClick = () => {
        handleScroll(refs.homeRef);
        if (sidebarIsOpened) setSidebarIsOpened(false);
    };

    return (
        <>
            {sidebarIsOpened && (
                <Sidebar>
                    <NavigationList
                        onLinkClick={handleSidebarLinkClick}
                        sidebarIsOpened={true}
                        refs={refs}
                    />
                </Sidebar>
            )}
            <nav className={changeBackground ? 'blue-nav' : undefined}>
                <h1 onClick={handleNameClick}>Tlhalefo Sebaeng</h1>
                <NavigationList onLinkClick={handleScroll} refs={refs} />
                {!sidebarIsOpened && <Hamburger onClick={handleOpenSidebar} />}
                {sidebarIsOpened && (
                    <img src={crossImg} onClick={handleCloseSidebar} />
                )}
            </nav>
        </>
    );
};

export default Navigation;
