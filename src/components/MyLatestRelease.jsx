import React, {useState}  from 'react';
import data from './data/history.json';
import DataBooks from './DataBooks';
import Input from './Input';


function MyLatestRelease() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value.toLowerCase());
    }

    return(
        <>
            <Input onInputChange={handleInputChange} />  

            <div className="container books-container mt-2">
                <h3>Latest Releases</h3>   

                <div className="row gy-4 " >
                    <DataBooks inputValue={inputValue} data={data} />             
                </div>
            </div>
        </>
    )
}

export default MyLatestRelease;