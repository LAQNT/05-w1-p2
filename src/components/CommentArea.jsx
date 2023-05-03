import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import Form from 'react-bootstrap/Form';

import CommentAdd from './CommentAdd';
import CommentList from './CommentList';


function CommentArea() {
  
  return (
    <>
    <CommentList />

    {/*----------------- forms ----------------*/}
    <div>
      

    <p className='mb-1 pt-2 leaveReview ' >Leave a review</p>
    <Form.Select aria-label="Default select example " className='mb-2 text-warning'>
      <option value="1">★</option>
      <option value="2">★★</option>
      <option value="3">★★★</option>
      <option value="4">★★★★</option>
      <option value="5">★★★★★</option>
    </Form.Select>
    
    <FloatingLabel className='mb-3 text-wrap' controlId="floatingTextarea2" label="your review" >
      <Form.Control
          style={{ height: '90px', fontSize: '.8rem'}}          
          />
    </FloatingLabel>
    </div>
    {/* ----------------------------- */}

    <CommentAdd />
    </>
  );
}

export default CommentArea;
