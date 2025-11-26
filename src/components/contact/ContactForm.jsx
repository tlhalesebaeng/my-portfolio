import Input from '../../utils/Input.jsx';
import './ContactForm.css';

const ContactForm = (props) => {
    const { fields, error, onSubmit, onChange, success, loading } = props;

    return (
        <form className="contact-fields">
            <ul>
                {fields.map((field) => {
                    const fieldValue = field.value;
                    const isMessage = fieldValue === 'Message';
                    const className = isMessage ? 'contact-message' : undefined;

                    return (
                        <li key={field.id} className={className}>
                            <Input
                                type={
                                    isMessage
                                        ? 'text-area'
                                        : fieldValue.toLowerCase()
                                }
                                onChange={onChange}
                                label={fieldValue}
                            />
                        </li>
                    );
                })}
            </ul>
            {error && <p className={'form-message ' + 'error'}>{error}</p>}
            {success && (
                <p className={'form-message ' + 'success'}>{success}</p>
            )}
            <button disabled={loading} onClick={onSubmit}>
                {loading ? 'Loading...' : 'Submit'}
            </button>
        </form>
    );
};

export default ContactForm;
