import React, {Fragment} from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'

function OrderForm  ()  {


    return (
        <div className="order_form">
            <h5>Confirm Your Order Please: </h5>
            <Form>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Name</InputGroup.Text>
                    <FormControl className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" required="true" />
                </InputGroup>
                <br />
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
                    <FormControl className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" required="true" />
                </InputGroup>
                <br />
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Phone</InputGroup.Text>
                    <FormControl className="order_form_input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" required="true" />
                </InputGroup>
                <div style={{textAlign:'end'}}>
                    <button className="confirm_order_btn" type="submit"> Create Order</button>
                </div>
                
            </Form>
        </div>
    )
}

export default OrderForm;