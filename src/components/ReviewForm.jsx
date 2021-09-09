import React, { useState } from 'react';
import './ReviewForm.css';
import ReviewList from './ReviewList';
import { reviewsData } from '../ReviewData';

const ReviewForm = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');

  const handleFullname = (event) => {
    setFullname(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleRating = (event) => {
    setRating(event.target.value);
  };
  const handleReview = (event) => {
    setReview(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (fullname === '' && email === '' && review === '') {
      alert('Please fill all fields');
    } else {
      const newReview = {
        fullName: fullname.toLocaleLowerCase(),
        email: email,
        rating: rating,
        review: review,
      };
      reviewsData.push(newReview);
      handleRefreshTextbox();
    }
  };

  const handleRefreshTextbox = () => {
    setFullname('');
    setEmail('');
    setRating('');
    setReview('');
  };

  return (
    <div className='FormContainer'>
      <h4>Leave Review</h4>
      <form className='Form' action='submit'>
        <input
          className='InputFullname'
          type='text'
          placeholder='Full Name*'
          onChange={handleFullname}
          value={fullname}
        />
        <input
          className='InputEmail'
          type='email'
          placeholder='Email*'
          onChange={handleEmail}
          value={email}
        />
        <select
          className='SelectRating'
          placeholder='Rating*'
          onChange={handleRating}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <textarea
          className='SelectReview'
          name=''
          id=''
          cols='50'
          rows='10'
          placeholder='Review*'
          onChange={handleReview}
          value={review}
        />
        <button className='ButtonSubmit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <ReviewList data={reviewsData} />
    </div>
  );
};

export default ReviewForm;
