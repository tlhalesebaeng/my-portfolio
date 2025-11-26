import './Input.css';

const Input = ({ label, type, onChange }) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            {type !== 'text-area' && (
                <input
                    type={type}
                    onChange={(event) => onChange(label, event.target.value)}
                />
            )}
            {type === 'text-area' && (
                <textarea
                    onChange={(event) => onChange(label, event.target.value)}
                />
            )}
        </div>
    );
};

export default Input;
