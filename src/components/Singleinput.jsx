import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Singleinput = (props) => {
    return (
        <FloatingLabel
            controlId={props.label}
            label={props.label}
            className="sm"
        >
            <Form.Control type={props.type} placeholder="name@example.com" />
        </FloatingLabel>

    )
}
export default Singleinput