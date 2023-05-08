import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import CommentList from './CommentList';


function CommentArea() {
  // ----------------- define form data ----------------
  const [formData, setFormData] = useState({
    name: '',
    score: '',
    review: ''
  })
  
  // ----------------- define form data ----------------
  const [responseData, setResponseData] = useState(null);
  
  // ----------------- get values ----------------
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  };

  const postData = async () => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {

      method: 'POST',
      headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjJiZjMzYjE1MjAwMTQ3NjE3OWMiLCJpYXQiOjE2ODMzNjIyODIsImV4cCI6MTY4NDU3MTg4Mn0.PWy6hnPzCT8SVc30wfYqBWmhE2iaPI6541Lt8JgKLzg",

      "Content-Type": 'application/json'
      },
      body: JSON.stringify(formData)

      })

      const responseData = await response.json();
      setResponseData(responseData);
  }


  return (
    <>
    <CommentList />

    {/*----------------- forms ----------------*/}
    <div>

      <p className='mb-2 pt-2 leaveReview '> Leave a review </p>

      <form onSubmit={postData}>
        <Form.Select aria-label="Default select example " className='mb-2     text-warning' onChange={handleChange}>
          <option value="1">★</option>
          <option value="2">★★</option>
          <option value="3">★★★</option>
          <option value="4">★★★★</option>
          <option value="5">★★★★★</option>
        </Form.Select>  

        <FloatingLabel className='mb-2 text-wrap'   controlId="floatingTextarea2"   label="your review" onChange={handleChange} value={formData.review}>
          <Form.Control
              style={{ height: '90px', fontSize: '.8rem'}}          
              />
        </FloatingLabel>


        <Button variant="warning" className='mt-1 p-1' type="submit"> Submit </Button>
      </form>

    </div>
    {/* ------------------------------------- */}

    </>
  );
}

export default CommentArea;
