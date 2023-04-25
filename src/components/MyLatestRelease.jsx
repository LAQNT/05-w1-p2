import DataBooks from './DataBooks';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



function MyLatestRelease() {
    return(
        <>
            <div className="container books-container mt-5">
                <InputGroup className="mb-3 px-5">
                    <Form.Control
                      placeholder="Search a book"
                      aria-label="Search a book"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2"><i class="bi bi-search" style={{ fontSize: 15 }} ></i></InputGroup.Text>
                  </InputGroup>
                
                <h3>Latest Releases</h3>
                
                <div className="row gy-4 " >
                    <DataBooks />             
                </div>
            </div>
        </>
    )
}

export default MyLatestRelease;