import React from 'react';
import Timer from './Timer';


function MyJumbotron() {
    return(
        <>
            <div className="jumbotron py-3" >
                <p>Latest realeases with the best prices</p>
                <span>free delivery season ends in</span>
                <Timer />

                
            </div>
        </>
    ) 
}

export default MyJumbotron;