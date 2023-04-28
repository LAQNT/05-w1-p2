import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CommentArea from "./CommentArea";



function MyBookCard(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(isActive => !isActive);
    }

    return (
        <div className="col-6  col-sm-6 col-md-4 col-lg-3 col-xl-2" >
            <div 
            className="card" 
            onClick={handleClick}
            style={{
                backgroundColor: isActive ? 'rgba(255,255,255)' : '',
                // border: isActive ? 'white' : '', 
                boxShadow: isActive ? '.3rem .4rem .3rem rgba(150,150,150)' : '', 
            }}>
                    <img src={props.img}  alt={props.title}/>
                    <div    className="card-body px-4 py-3">
                        <div>
                            <h5>{props.title}</h5>
                            <span>id: {props.asin}</span>
                        </div>
                        <span>Category: {props.category}</span>
                        <div className='price-cart'>
                            <span>€ {props.price}</span>     
                            <Button variant="dark"><i class="bi bi-cart2"></i></Button>
                        </div>
                        <div>
                            <span >Reviews</span>
                            <CommentArea />                            
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default MyBookCard;
