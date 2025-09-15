import ReactDOM from 'react-dom';
import './Sidebar.css';

const Sidebar = ({ children }) => {
    return ReactDOM.createPortal(
        <section className="sidebar">{children}</section>,
        document.getElementById('sidebar-hook')
    );
};

export default Sidebar;
