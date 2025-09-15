import './Hamburger.css';

const Hamburger = ({ onClick }) => {
    return (
        <ul className="hamburger" onClick={onClick}>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    );
};

export default Hamburger;
