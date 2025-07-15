import Input from '../../utils/Input.jsx';
import './ContactForm.css';

const ContactForm = ({ fields, onSubmit }) => {
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
                                label={fieldValue}
                            />
                        </li>
                    );
                })}
            </ul>
            <button onClick={onSubmit}>Submit</button>
        </form>
    );
};

export default ContactForm;
