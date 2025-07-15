import './Input.css';

const Input = ({ label, type }) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            {type !== 'text-area' && <input type={type} />}
            {type === 'text-area' && <textarea />}
        </div>
    );
};

export default Input;
