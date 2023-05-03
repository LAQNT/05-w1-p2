import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';




function Input({onInputChange}) {
    
    return(
        <div className="container" >

            <div className="row">
                <div className="col-12 col-lg-6 mx-auto">
                <InputGroup className="my-4 px-5">
                    <Form.Control
                    placeholder="Search a book"
                    aria-label="Search a book"
                    aria-describedby="basic-addon2"
                    onChange={onInputChange}
                    />
                    <InputGroup.Text    id="basic-addon2"><i   className="bi bi-search" style=  {{ fontSize: 15 }} ></i></  InputGroup.Text>
                </InputGroup>
                </div>
            </div>
        </div>
      )
}

export default Input;