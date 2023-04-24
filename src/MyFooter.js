import Button from 'react-bootstrap/Button';

const currentDate = new Date();
const year = currentDate.getFullYear();



function MyFooter() {
    return (
        <div className="footer">
            <span>{year}</span>
            <Button variant="warning">Warning</Button>{' '}
        </div>
    )
}

export default MyFooter;
