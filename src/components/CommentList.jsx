import React, { useState } from "react";


function CommentList() {
    const [data, setData] = useState();

    const getData = async () => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {

          headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjJiZjMzYjE1MjAwMTQ3NjE3OWMiLCJpYXQiOjE2ODMzNjIyODIsImV4cCI6MTY4NDU3MTg4Mn0.PWy6hnPzCT8SVc30wfYqBWmhE2iaPI6541Lt8JgKLzg",
    
          "Content-Type": 'application/json'
          },

          })
    
          const json = await response.json();
          setData(json);
      }
      console.log(data)


    return(
        <div className="reviewsList mb-4 mt-0">

        <li>review</li>
        <li>review</li>
        <li>review</li>
        </div>
        // data.map(review => (
        // ))
    )

}

export default CommentList;
