import React, {useState} from 'react';
import MyBookCard from './MyBookCard';
// import Input from './Input';





function DataBooks({inputValue, data}) {
    
    
    // use state to save the data from input:
    const [filteredData, setFilteredData] = useState([]);

    React.useEffect(() => {
        if (inputValue) {
            const filtered = data.filter(book => book.title.toLowerCase().includes(inputValue));
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [data, inputValue])


    // console.log(data);
    return(
        filteredData.map(book => (
            <MyBookCard asin={book.asin} title={book.title} img={book.img} price={book.price} category={book.category} />
        ))

        
    );

}




export default DataBooks;



// 1) import data directly from file
// 2) import bookcard component
// 3) map 1) and asign data keys as card props
