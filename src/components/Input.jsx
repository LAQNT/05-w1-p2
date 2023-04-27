import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



function Input({onInputChange}) {
    
    return(
        <InputGroup className="my-4 px-5">
            <Form.Control
            placeholder="Search a book"
            aria-label="Search a book"
            aria-describedby="basic-addon2"
            onChange={onInputChange}
            />
            <InputGroup.Text id="basic-addon2"><i class="bi bi-search" style={{ fontSize: 15 }} ></i></InputGroup.Text>
        </InputGroup>
      )
}

export default Input;