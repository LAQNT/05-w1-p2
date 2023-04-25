import data from './data/history';
import MyBookCard from './MyBookCard';





function Books() {
    console.log(data)
    return(
        data.map(book => (
            <MyBookCard asin={book.asin} title={book.title} img={book.img} price={book.price} category={book.category} />
            ))
    );

}




export default Books;

