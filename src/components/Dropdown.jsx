import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Dropdowninput = (props) => {
    return (
        <FloatingLabel controlId={props.label} label={props.label}>
            <Form.Select>
                {props.value.map((option) => {
                    return(
                        <option value={option} key={Math.random()} >{option}</option>
                    )
                })}
            </Form.Select>
        </FloatingLabel>

    )
}
export default Dropdowninput