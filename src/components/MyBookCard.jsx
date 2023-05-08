import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CommentArea from "./CommentArea";



function MyBookCard(props) {
    const [isActive, setIsActive] = useState(false);
    const [showDiv, setShowDiv] = useState(false);

    const handleClick = () => {
        setIsActive(isActive => !isActive);
        setShowDiv(!showDiv);
    };
    const handleClickRev = () => {
        // setIsActive(isActive => !isActive);
        // setShowDiv(!showDiv);
    };

    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2" >
            <div 
            className="card" 
            style={{
                backgroundColor: isActive ? 'rgba(255,255,255)' : '',
                border: isActive ? '.5px solid red' : '' ,
                boxShadow: isActive ? '.3rem .4rem .3rem rgba(150,150,150)' : '',
                cursor: 'pointer' 
            }}>
                    <img 
                    src={props.img} 
                    onClick={handleClick} 
                    alt={props.title}/>
                    <div  
                     className="card-body px-4 py-3"
                     >
                     
                        <div onClick={handleClick} >
                            <h5>{props.title}</h5>
                            <span>id: {props.asin}</span>
                        </div>
                        <span>Category: {props.category}</span>
                        <div className='price-cart'>
                            <span>€ {props.price}</span>     
                            <Button variant="dark"><i className="bi bi-cart2"></i></Button>
                        </div>
                        
                        <div className='reviews'>
                        <p onClick={handleClick} > Reviews 
                            <span  style={{
                                    display: isActive ? 'none' : '',}} > ▾</span> 
                            <span  style={{
                                    display: isActive ? '' : 'none',}} > ▴</span> 
                            
                            
                            </p>
                        {showDiv && <div>
                            <CommentArea />                            
                            </div>}
                        </div>
                        
                    </div>

            </div>
        </div>
    )
}

export default MyBookCard;
