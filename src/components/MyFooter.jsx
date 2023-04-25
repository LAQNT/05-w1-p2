import Button from 'react-bootstrap/Button';

const currentDate = new Date();
const year = currentDate.getFullYear();



function MyFooter() {
    return (
        <div className="footer py-3">
            <Button className='col-2' href='#basic-nav-dropdown' variant="dark">Back to top</Button>{' '}
            <span>Book Shop, Laura Quintero {year}</span>
        </div>
    )
}

export default MyFooter;
